const express = require('express')
const router = express.Router();

const {createJobs,updateJobs,deleteJob,rejectedJobs,dashboardJobs,getJobs}=require('../controllers/opporttunityControllers');
const protect = require('../middleware/protect');



router.route('/').post(protect,createJobs);
router.route('/update/:id').put(protect,updateJobs);
router.route('/delete').delete(protect,deleteJob);
router.route('/get').get(getJobs);
router.route('/rej').get(rejectedJobs);
router.route('/inVer').get(dashboardJobs);


module.exports=router;

