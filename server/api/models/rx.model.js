var mongoose=require('mongoose');


var rxSchema=new mongoose.Schema({
    billTo:{
        type:String,
        required:true
    },
    iou:{
        type:String,
        required:true
    },
    daySupply:{
        type:String,
        required:true
    },
    fillDate:{
        type:String
        
    },
    fillNo:{
        type:String,
        required:true
    },
    delivery:{
        type:String,
        required:true
    },
    rxType:{
        type:String
        
    },
    daw:{
        type:String,
        required:true
    },
    uom:{
        type:String,
        required:true
    },
    sig:{
        type:String
        
    },
    qtyDisp:{
        type:String,
        required:true
    },
    qty:{
        type:String,
        required:true
    },
    sigDescr:{
        type:String
        
    },
    note:{
        type:String,
        required:true
    },
    awp:{
        type:String,
        required:true
    },

    unitCost:{
        type:String
        
    },
    awpPrice:{
        type:String,
        required:true
    },
    acqPrice:{
        type:String,
        required:true
    },

    price:{
        type:String
        
    },
    cashPrice:{
        type:String,
        required:true
    },
    phamacyFee:{
        type:String,
        required:true
    },

    insDispencingFee:{
        type:String
        
    },
    u$c:{
        type:String,
        required:true
    },
    patientPay:{
        type:String,
        required:true
    },

    billed:{
        type:String
        
    },
    insuranceTotalPay:{
        type:String,
        required:true
    },
   
    
    updated_date:{
        type: Date, 
        default: Date.now }
    
})

module.exports=mongoose.model('RxDetails', rxSchema);