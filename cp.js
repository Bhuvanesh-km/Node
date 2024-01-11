//child process module is used to create sub process within script

const cp = require("child_process");

// cp.execSync("calc");

// cp.execSync("start chrome https://www.scaler.com/topics/courses/");

console.log("hello \n" + cp.execSync("node test.js"));
