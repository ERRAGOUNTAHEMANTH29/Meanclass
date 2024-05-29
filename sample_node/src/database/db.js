const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://hemantherragounta29:b22xPqjtHdwZQbfp@cluster0.im0zbw0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/")
.then(()=>{
console.log("Mongo db connected")
})
.catch((error)=>{
console.log("Mongo db is not connected",error)
})

module.exports = mongoose.connection;