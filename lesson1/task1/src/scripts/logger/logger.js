export const createLogger = (name) => {
  const log = [];

  return {
    log(message) {
      log.push(`log - ${name} - ${message}`);
    },
    error(errorText) {
      log.push(`error - ${name} - ${errorText}`);
    },
    getLogs() {
      return log;
    },
  };
};
