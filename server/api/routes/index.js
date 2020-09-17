var PatentRoute=require('./patient.route');
var DrugRoute = require('./drug.route');
var PrescriberRoute = require('./prescriber.route');
var RxRoute = require('./rx.route');
var express=require('express');
var router=express.Router();


router.use('/patient', PatentRoute);
router.use('/drug', DrugRoute);
router.use('/prescriber', PrescriberRoute);

router.use('/rx', RxRoute);

module.exports=router;
