const Logger = require("./logger");
const logger = new Logger();

logger.on("logging", (args) => {
  console.log("logging event triggered with message", args);
});

logger.log("message");
