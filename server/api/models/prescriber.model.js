var mongoose=require('mongoose');


var prescriberSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    license:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    npi:{
        type:String,
        required: true
    },
    dea:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required:true
    }
})


module.exports=mongoose.model('Prescriber', prescriberSchema);