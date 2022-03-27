const express = require('express');
const app = express();
const port = process.env.PORT|| 8000;
const db = require('./config/mongoose');

//converting data to valid ascii format
app.use(express.urlencoded({ useNewUrlParser: true}));
// use express router
app.use('/', require('./routes'));


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
