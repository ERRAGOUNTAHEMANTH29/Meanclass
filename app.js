const express = require('express')
const app = express()
const db = require('./sample_node/src/database/db')
const userRouter = require('./sample_node/src/router/userRouter')


app.use("/user",userRouter)

db.on("open",()=>{
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
})
db.on("error",()=>{
console.log("error while connecting to database")
})







// const http = require("http");
// const os = require("os");
// const fs = require("fs");

// // os module

// console.log(os.hostname());
// console.log(os.type());

// fs.mkdir("demo1", (err) => {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log("created successfully");
//   }
// });

// fs.rmdir("demo1", (err) => {
//   if (err) {
//     console.log("error while removing the folder", err);
//   } else {
//     console.log("removed successfully");
//   }
// });

// fs.readFile("demoContent.txt",(err,data)=>{
//     if (err) {
//         console.log("error while readfile the folder", err);
//       } else {
//         console.log(data.toString(),"data read successfully");
//       }
// })

// http
//   .createServer(function (req, res) {
//     res.write("server is running on port 3000");
//     res.end();
//   })
//   .listen(3000);
