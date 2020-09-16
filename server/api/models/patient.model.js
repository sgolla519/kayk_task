var mongoose=require('mongoose');


var patientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    gender:{
        type:String
        
    },
    insType:{
        type:String,
        required:true
    },
    group:{
        type:String,
        required:true
    },
    rel:{
        type:String
        
    },
    personCode:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    updated_date:{
        type: Date, 
        default: Date.now }
    
})

module.exports=mongoose.model('Patient', patientSchema);