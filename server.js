import express from "express";
const app = express()
import os from "os"
import cluster from "cluster";

const port = process.env.PORT || 3000

//console.log("core cpu count",os.cpus().length)
//console.log(cluster," my cluster")

if(cluster.isMaster){
    console.log('cluter true')
    const numsCpu = os.cpus().length
    for(let i=0;i<numsCpu;i++){
        cluster.fork()
        //console.log(`for loop ${process.pid}`)
    }
    cluster.on('exit',(Worker)=>{
        console.log(`my worker ${Worker.process.pid}`)
    })
}else{
    app.listen(port,()=>{
        console.log(process.pid,' connect succefully on port:',port)
    })
}

