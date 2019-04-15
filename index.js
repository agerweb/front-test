#!/usr/bin/env node
const child_process = require('child_process');



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

processFn(`git clone https://gitee.com/agerweb/frontTestTpl.git ${p}`).then(()=>{
    processFn(`cd ${p}`)
}).then(()=>{
    processFn("code .")
}).then(()=>{
    console.log("http://localhost:8080/")
    processFn("npx http-server ./${p}")
}).catch((e)=>{

})