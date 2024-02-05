const todomodel= require('../models/todomodel');

module.exports.gettodos=async(req,res)=>{

    const todos= await todomodel.find();
    res.send(todos);

}

// module.exports.settodos=(req,res)=>{
    

//     const {todo}=req.body;
//     todomodel.create({todo}) 
//     .then((data)=>{
//         console.log("Data Saved Sucesfully");
//         res.status(201).send(data);
//     })
//     .catch(err=>{console.log(err)
//         res.send({error:err,msg:"Something went wrong!"});//sending error to frontend
//     });
// }

module.exports.settodos = (req, res) => {
  const { todo } = req.body;

  // Validate that the "todo" field is provided
  if (!todo) {
    return res.status(400).json({ error: 'Todo is required in the request body.' });
  }

  todomodel.create({ todo })
    .then((data) => {
      console.log('Data Saved Successfully');
      res.status(201).send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err, msg: 'Something went wrong!' });
    });
};


//for update
module.exports.updatetodo=(req,res)=>{

    const {todo}=req.body;
    const {id}=req.params;


    todomodel.findByIdAndUpdate(id,{todo})//where and what needs to be updated
    .then(()=>{
        
        res.send("updated sucessfully");
    })

    .catch(err=>{console.log(err)
        res.send({error:err,msg:"Something went wrong!"});//sending error to frontend
    });
    
}


//for delete
module.exports.deletetodo=(req,res)=>{

     const {id}=req.params;


    todomodel.findByIdAndDelete(id)//where to delete
    .then(()=>{
        
        res.send("deleted sucessfully");
    })

    .catch(err=>{console.log(err)
        res.send({error:err,msg:"Something went wrong!"});//sending error to frontend
    });
    
}

