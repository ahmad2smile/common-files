const fs = require('fs');
const path = require('path');

function copyThisFileTo(source, target, callback) {
    let didCallBack = false;
    let fileName = path.basename(source);

    console.log("Copying: " + fileName);

    let readFile  = fs.createReadStream(source);
    readFile.on("error",(err)=>{
        done(err);
    });

    let writeFile = fs.createWriteStream(target+fileName);
    writeFile.on("error",(err)=>{
        done(err);
    });

    readFile.pipe(writeFile);

    writeFile.on("close",(ex)=>{
        console.log("File Copied! Success...");
        done();
    });


    function done(err) {
        if (!didCallBack) {
            callback(err);
            didCallBack = true;
        }
    }
}

module.exports = { copyThisFileTo: copyThisFileTo }
