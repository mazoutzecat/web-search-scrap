const pino = require('pino');
const pinoPretty = require('pino-pretty');
const path = require('path');
const fs = require('fs');

//const logsPath = path.join(__dirname, "..", "logs");

/**
 * Creates a pino logger with the specified file name.
 * @type {function(streamLog: stream): Object}
 */
const logger = (streamLog) => {
    /*
    if(!fs.existsSync(logsPath)){
        fs.mkdirSync(logsPath);
    }
    */
    //const dest = pino.destination({dest: path.join(logsPath, fn), sync: false});//TODO
    return pino({
        prettyPrint: {
            colorize: false,
            translateTime: 'yyyy-mm-dd HH:MM:ssZ',
            ignore: 'pid,hostname'
        },
        traceLog: true,
        //level: process.env.LOG_LEVEL || 'info'
    }, streamLog);
    //});
};


module.exports = {logger: logger}

