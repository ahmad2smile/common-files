const config = require('./common-files.config.js');
const copyCore = require('./app.js');

let setup = {
    fileNeeded: process.argv[2],
    callbackFunc: (blabla)=>{ if(blabla)console.log(blabla);}
}

copyCore.copyThisFileTo(config.commonFolder+setup.fileNeeded, "./", setup.callbackFunc);
