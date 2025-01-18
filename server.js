import express from "express";
const app = express()
import os from "os"
import cluster from "cluster";

const port = process.env.PORT || 3000

console.log("core cpu count",os.cpus().length)

app.listen(port,()=>{
    console.log(process.pid,' connect succefully on port:',port)
})