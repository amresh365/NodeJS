const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on("WaterFull", () => {
  setTimeout(() => {
    console.log("Please Turn off Rhe Moter Gentle Reminder!");
  }, 2000);
});
console.log("Motar is Running");
myEmitter.emit("WaterFull");
console.log("Motar is Still Running");
