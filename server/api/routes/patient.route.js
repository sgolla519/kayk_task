var PatientCtrl=require('../controllers/patient.controller');
var express=require('express');
var router=express.Router();


router.post('/create', PatientCtrl.createPatient);

router.get('/get', PatientCtrl.getPatientDetails);

// router.get('/get/:id', BookCtrl.getBookDetailsByid);

// router.put('/update/:id', BookCtrl.updateBook);

// router.delete('/delete/:id', BookCtrl.deelteBookDetails);

module.exports=router;
