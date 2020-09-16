var DrugCtrl=require('../controllers/drug.controller');
var express=require('express');
var router=express.Router();


router.post('/create', DrugCtrl.createDrug);

router.get('/get', DrugCtrl.getDrugDetails);

// router.get('/get/:id', BookCtrl.getBookDetailsByid);

// router.put('/update/:id', BookCtrl.updateBook);

// router.delete('/delete/:id', BookCtrl.deelteBookDetails);

module.exports=router;
