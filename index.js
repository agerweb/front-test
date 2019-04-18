#!/usr/bin/env node
const child_process = require('child_process');
const path = require('path');



function processFn(cmd) {
    return new Promise(resolve => {
        let subProcess = child_process.exec(cmd, function (err, stdout) {
            if (err) console.log(err);
            console.log(stdout);
            subProcess.kill()


            resolve()

        });
    })
}


function setPath(){
    return `temp${Date.now()}`
}

var p=setPath();
var xp=path.resolve(__dirname,p)

processFn(`git clone https://gitee.com/agerweb/frontTestTpl.git ${p}`).then(()=>{
    processFn(`cd ${xp}`)
}).then(()=>{
    processFn(`code ${xp}`)
}).then(()=>{
    console.log("http://localhost:8080/")
    processFn(`npx http-server ./${p}`)
}).catch((e)=>{
    console.log(e)
})