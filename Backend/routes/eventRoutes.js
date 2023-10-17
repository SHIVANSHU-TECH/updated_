const express = require('express');
const Router = express.Router();

const {createEvent,updateEvents,deleteEvents,getEvent,rejectedEvents,dashboardEvents}= require('../controllers/eventControllers')
const protect = require('../middleware/protect');



Router.route('/').post(protect,createEvent);
Router.route('/update/:id').put(protect,updateEvents);
Router.route('/delete').delete(protect,deleteEvents);
Router.route('/get').get(getEvent);
Router.route('/rej').get(rejectedEvents);
Router.route('/inVer').get(dashboardEvents);
module.exports=Router;