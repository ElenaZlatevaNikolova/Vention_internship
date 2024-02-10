import log4js from 'log4js';
import logConfig from './log4js.config.js';
let innerLogger = log4js.getLogger();
import AllureReporter from '@wdio/allure-reporter';

log4js.configure(logConfig);
class Logger {

    trace(message) {
        innerLogger.trace(message);
    }

    debug(message) {
        innerLogger.debug(message);
    }

    info(message) {
        innerLogger.info(message);
    }

    warn(message) {
        innerLogger.warn(message);
    }

    error(message) {
        innerLogger.error(message);
    }

    fatal(message) {
        innerLogger.fatal(message);
    }

    logStep(message) {
        innerLogger.info(`${message}`)
        AllureReporter.addStep(`${message}`)
    }
}

export default new Logger();