var RxCtrl=require('../controllers/rx.controller');
var express=require('express');
var router=express.Router();


router.post('/create', RxCtrl.createRx);

router.get('/get', RxCtrl.getRxDetails);

// router.get('/get/:id', BookCtrl.getBookDetailsByid);

// router.put('/update/:id', BookCtrl.updateBook);

// router.delete('/delete/:id', BookCtrl.deelteBookDetails);

module.exports=router;
