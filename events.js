const EventEmitter = require("events");

const emitter = new EventEmitter();

//Register an event
emitter.on("messageLogged", (args) => {
  console.log("listner has logged a message", args);
});

//raise an event
emitter.emit("messageLogged", { id: 1, url: "http://" });
