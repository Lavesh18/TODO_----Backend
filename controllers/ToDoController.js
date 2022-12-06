const ToDoModel = require('../models/ToDoModel')

module.exports.getToDo = async (req,res)=>{
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo = async (req,res)=>{

    const {text} = req.body;
    ToDoModel
    .create({text})
    .then((data)=>{
        console.log("added success....");
        console.log(data);
        res.send(data)
    })
    .catch((err) => console.log(err));
   
}
//update
module.exports.updateToDo = async (req,res)=>{
    const {_id,text} = req.body

    ToDoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=>{
        res.send("Updated Succesfully")
    })
    .catch((err)=>console.log(err))

}
//delete
module.exports.deleteToDo = async (req,res)=>{
    const {_id} = req.body

    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=>{
        res.send("Deleted Succesfully")
    })
    .catch((err)=>console.log(err))

}