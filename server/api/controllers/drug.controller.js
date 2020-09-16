var  Drug= require('../models/drug.model');

// create the book details

// var createBook=(req, res)=>{
//     var book=new Book();
//     book.isbn=req.body.isbn;
//     book.title=req.body.title;
//     book.author=req.body.author;
//     book.description=req.body.description;
//     book.punlished_year=req.body.punlished_year;
//     book.publisher=req.body.publisher;
   
//     book.save()
//     .then((result)=>{
//         res.json({
//             "message":"create book details successfully",
//             "status":200,
//             "data":result
//         })
//     }).catch((err)=>{
//         res.json({
//             "message":"create book details failed",
//             "status":501,
//             "data":err
//         })
//     })
// }

var createDrug=(req, res, next)=>{
    var obj={name:req.body.name, noc:req.body.noc, from:req.body.from, brand:req.body.brand,
        awp:req.body.awp, cost:req.body.cost, prup:req.body.prup, size:req.body.size, qcd:req.body.qcd,  rxcost:req.body.rxcost}
   
        Drug.create(obj, function(err, data){
        if(err) return next(err)
        res.send(data)
    })


   
}

//get all book details

var getDrugDetails=(req, res)=>{
    Drug.find()
    .then((result)=>{
        res.json({
            "message":"get patient details successfully",
            "status":200,
            "data":result
        })
    }).catch((err)=>{
        res.json({
            "message":"get patient details failed",
            "status":501,
            "data":err
        })
    })
}

//get  book details by id

var getBookDetailsByid=(req, res)=>{
    console.log("reached or not");

    
    var id=req.params.id
    Book.findById(id)
    .then((result)=>{
        res.json({
            "message":"get book details successfully",
            "status":200,
            "data":result
        })
    }).catch((err)=>{
        res.json({
            "message":"get book details failed",
            "status":501,
            "data":err
        })
    })
}

// update values for book details

var updateBook=(req, res, next)=>{

   console.log("reached or not");

  
    var id=req.params.id;
    var obj={$set:{isbn:req.body.isbn, title:req.body.title, author:req.body.author, 
        description:req.body.description, punlished_year:req.body.punlished_year, publisher:req.body.publisher, 
        updated_date:req.body.updated_date}}

            Book.findOneAndUpdate(id, obj)
            // , function (err, post) {
            //   if (err) return next(err);
            //   res.send(post)
              

            // })
    .then((result)=>{
        result.save()
        res.json({
            "message":"Updated  book details successfully",
            "status":200,
            "data":result
        })
    }).catch((err)=>{
        res.json({
            "message":"update book details failed",
            "status":501,
            "data":err
        })
    })
}


// delete book by id 

var deelteBookDetails=(req, res)=>{

    var id=req.params.id;

 Book.findByIdAndRemove(id)
  .then((result)=>{
        
        res.json({
            "message":"delete book details successfully",
            "status":200,
            "data":result
        })
    }).catch((err)=>{
        res.json({
            "message":"delete book details failed",
            "status":501,
            "data":err
        })
    })

}


module.exports={createDrug, getDrugDetails, getBookDetailsByid, updateBook, deelteBookDetails};