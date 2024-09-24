const { EventEmitter } = require("events");

const myEmitter = new EventEmitter();

const birthdayEventListener = ({ name }) => {
  console.log(`Hallo ${name}, saya dari Event Emit`);
};

myEmitter.on("birthday", birthdayEventListener);

myEmitter.emit("birthday", { name: "Farham Harvianto" });
