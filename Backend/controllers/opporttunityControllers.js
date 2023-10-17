const  Jobs = require('../models/opportunitySchema');


const createJobs = async(req,res)=>{

    try {
    
        const{title,DeadlineDate,description,companyName,link}=req.body;
        
        if(!title || !DeadlineDate || !description || !companyName || !link){
            res.status(401).json({message:"Enter the required credentials"});
        }
            //check whether there is event present 
        const event = await Jobs.findOne({title,createdBy:req.user._id});
        
        if(event){
            res.status(401).json({message:"job opportunity already present"})
        }
        else{
        
        const newEvent = await Jobs.create({title,DeadlineDate,description,companyName,link,createdBy:req.user._id});
        
        res.status(200).json({message:"Event created Succcessfuly",newEvent})
        }
        
        
        
        
        } catch (error) {
            res.status(401).json({message:"Internal Server error"});
        }
        
        
        

    
}

const getJobs = async(req,res)=>{
    //check for the authentication and get all the 
    //opportunites

    try {
    
        const allJobs = await Jobs.find({status:"approved"});
        if(!allJobs){
            res.status(401).json({message:"jobs not found"});

        }
        res.status(200).json({message:"successfully fetched all jobs",allJobs});



    } catch (error) {
        res.status(401).json({message:"internal sever error"})
    }



}

const dashboardJobs =async(req,res)=>{


 try {
    
        const allJobs = await Jobs.find({status:"inVerification"});
        if(!allJobs){
            res.status(401).json({message:"jobs not found"});

        }
        res.status(200).json({message:"successfully fetched requested jobs",allJobs});



    } catch (error) {
        res.status(401).json({message:"internal sever error"})
    }





}
const rejectedJobs =async(req,res)=>{


 try {
    
        const allJobs = await Jobs.find({status:"rejected"});
        if(!allJobs){
            res.status(401).json({message:"jobs not found"});

        }
        res.status(200).json({message:"successfully fetched rejected jobs",allJobs});



    } catch (error) {
        res.status(401).json({message:"internal sever error"})
    }





}

const updateJobs = async(req,res)=>{

    try {
        
   

const {id}=req.params;

if(!id){
    res.status(401).json({message:"id not found"})
}

const job =   await Jobs.findByIdAndUpdate(id, req.body, {
    new: true,

    useFindAndModify: false,
  });
if(!job){
    res.status(401).json({message:"opportunity not found"});

}


res.status(200).json({message:"job updated successfully",job});


} catch (error) {
       res.status(400).json({message:"Internal server error"}) 
}


}


const deleteJob = async(req,res)=>{



try {
        
   

    const id=req.params.id;
    
    if(!id){
        res.status(401).json({message:"id not found"})
    }
    
    const job = await Jobs.findOne({_id:id});
    if(!job){
        res.status(401).json({message:"job not found"});
    
    }
    
    
    job = await Jobs.findByIdAndDelete(id);
    res.status(200).json({message:"job deleted successfully",job});
    
    
    } catch (error) {
           res.status(400).json({message:"Internal server error"}) 
    }
    



}



module.exports={createJobs,deleteJob,updateJobs,getJobs,rejectedJobs,dashboardJobs};