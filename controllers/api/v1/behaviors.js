const Behavior = require('../../../models/behaviors');
const ImprovementList = require('../../../models/improvementList');

//getting all behaviors data
module.exports.index = async function(req, res){


    let behaviors = await Behavior.find({});

    return res.json(200, {
        message: "Response:  All behaviors data",
        data:{
            behaviors: behaviors
        }
       
    })
}
module.exports.home = async function(req, res){

    return res.send("<h1>API Assignments</h1>")
}


//adding new improvement in Behavior using api
module.exports.improve = async function(req, res){

    try{
        console.log(req.body);
        let behavior = await Behavior.findById(req.params.id);
        let improvement = await ImprovementList.create({
            behaviorTitle:behavior.behaviorTitle,
            behaviorImprove:req.body.improvement
        },async function(err, improvement){
            if(err){
                console.log("Error in adding improvement of behavior using api in try block",err);
                return res.json(500, {
            message: "Internal Server Error"
        });
            }
            else{
                await behavior.BehaviorList.push(improvement);
                await behavior.save();
                return res.json(200, {
                    message: 'Response: Your Improvement is added to respective behavior',
                    data:{
                        improvement: improvement,
                    }
                });
            }
        });
  
        
       

    }catch(err){
        console.log('Error in creating Behavior using api', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

//updating existing Behavior improvement details using api
module.exports.update = async function(req, res){

    try{

        let updated_improvement = await ImprovementList.findOneAndUpdate({_id:req.params.improvementId},  { $set: { "behaviorImprove" : req.body.improvement}},
        function (err) {
                if (err){
                    console.log(err)
                }
            });

        return res.json(200, {
                message: "Improvement updated successfully!",
                data:{
                    Behavior: updated_improvement
                }
        });
        

    }catch(err){
        console.log('Unable to update Behavior', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
    
}


//deleting Behavior improvement using api
module.exports.delete = async function(req, res){

    try{
        let improvement = await ImprovementList.findById(req.params.improvementId);
        improvement.remove();
       // let behavior = await Behavior.findById(req.params.behaviorId);
        let behavior = Behavior.findByIdAndUpdate(req.params.behaviorId,{$pull:{BehaviorList:req.params.improvementId}});
        
        return res.json(200,{
            data:{
                message: "improvement deleted successfully!",
            }
        });
      
    }catch(err){
        console.log('Error in deleting improvement', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
    
}