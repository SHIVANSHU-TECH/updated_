const Event = require('../models/eventModel');


const createEvent = async(req,res)=>{

try {
    
const{title,DeadlineDate,description,category,image,link}=req.body;

if(!title || !DeadlineDate || !description || !category || !image || !link){
    res.status(401).json({message:"Enter the required credentials"});
}
    //check whether there is event present 
const event = await Event.findOne({title,createdBy:req.user._id});

if(event){
    res.status(401).json({message:"event already presnt"})
}
else{

const newEvent = await Event.create({title,DeadlineDate,description,category,image,createdBy:req.user._id,link});

res.status(200).json({message:"Event created Succcessfuly",newEvent})



}





} catch (error) {
    res.status(401).json({message:"Internal Server error"});
}



}





const getEvent = async(req,res)=>{
    //check for the authentication and get all the 
    //opportunites

    try {
    
        const allEvents = await Event.find({status:"approved"   });
        if(!allEvents){
            res.status(401).json({message:"events not found"});

        }
        res.status(200).json({message:"successfully fetched all events",allEvents});



    } catch (error) {
        res.status(401).json({message:"internal sever error"})
    }



}

const dashboardEvents = async (req, res) => {
    try {
      // Query the database for events with status "inVerification"
      const allEvents = await Event.find({ status: "inVerification" });
  
      if (!allEvents || allEvents.length === 0) {
        return res.status(404).json({ message: "Events not found" });
      }
  
      res.status(200).json({
        message: "Successfully fetched requested events",
        allEvents,
      });
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      res.status(500).json({ message: "Internal server error" });
    }
  };
const rejectedEvents =async(req,res)=>{


 try {
    
        const allEvents = await Event.find({status:"rejected"});
        if(!allEvents){
            res.status(401).json({message:"Events not found"});

        }
        res.status(200).json({message:"successfully fetched rejected events",allEvents});



    } catch (error) {
        res.status(401).json({message:"internal sever error"})
    }





}

const updateEvents = async(req,res)=>{

    try {
        
   

const {id}=req.params;

if(!id){
    res.status(401).json({message:"id not found"})
}

const event = await Event.findByIdAndUpdate(id, req.body, {
    new: true,

    useFindAndModify: false,
  });
if(!event){
    res.status(401).json({message:"events not found"});

}


res.status(200).json({message:"event updated successfully",event});


} catch (error) {
       res.status(400).json({message:"Internal server error"}) 
}


}


const deleteEvents = async(req,res)=>{



try {
        
   

    const id=req.params.id;
    
    if(!id){
        res.status(401).json({message:"id not found"})
    }
    
    const event = await Event.findOne({_id:id});
    if(!event){
        res.status(401).json({message:"event not found"});
    
    }
    
    
    event = await Event.findByIdAndDelete(id);
    res.status(200).json({message:"event deleted successfully",event});
    
    
    } catch (error) {
           res.status(400).json({message:"Internal server error"}) 
    }
    



}



module.exports={createEvent,getEvent,deleteEvents,rejectedEvents,updateEvents,dashboardEvents};
