var mongoose=require('mongoose');


var drugSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    noc:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required: true
    },
    awp:{
        type:String,
        required: true
    },
    cost:{
        type:String,
        required:true
    },
    prup:{
        type:String,
        required: true
    },
    size:{
        type:String,
        required: true
    },
    qcd:{
        type:String,
        required:true
    },
    rxcost:{
        type:String,
        required:true
    }
})


module.exports=mongoose.model('Drug', drugSchema);