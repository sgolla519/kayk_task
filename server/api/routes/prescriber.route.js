var PrescriberCtrl=require('../controllers/prescriber.controller');
var express=require('express');
var router=express.Router();


router.post('/create', PrescriberCtrl.createPrescriber);

router.get('/get', PrescriberCtrl.getPrescriberDetails);

// router.get('/get/:id', BookCtrl.getBookDetailsByid);

// router.put('/update/:id', BookCtrl.updateBook);

// router.delete('/delete/:id', BookCtrl.deelteBookDetails);

module.exports=router;
