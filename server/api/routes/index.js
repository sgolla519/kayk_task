var PatentRoute=require('./patient.route');
var DrugRoute = require('./drug.route');
var PrescriberRoute = require('./prescriber.route');
var express=require('express');
var router=express.Router();


router.use('/patient', PatentRoute);
router.use('/drug', DrugRoute);
router.use('/prescriber', PrescriberRoute);

module.exports=router;
