'use strict'
class Logger {
    constructor() {
        
    }

    info(str) {
        console.log(str)
    }

    debug(str) {
        console.debug(str)
    }

    warning(str) {
        console.warn(str)
    }

    error(str) {
        console.error(str)
    }

    save(str) {
        const fs = require('fs')
        fs.writeFile('./temp.txt', Buffer.from(str))
    }
}

module.exports = new Logger()