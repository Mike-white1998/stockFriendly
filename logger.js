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
}

module.exports = new Logger()