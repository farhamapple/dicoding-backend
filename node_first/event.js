const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

const makeCoffe = ({ name }) => {
  console.log(`Kopi ${name} telah dibuat !`);
};

const makeBill = ({ price }) => {
  console.log(`Bill Sebesar ${price} segera dibayar !`);
};

// Mendeklarasikannya 1 1
// myEventEmitter.on("coffe-order", makeCoffe);
// myEventEmitter.on("coffe-order", makeBill);

// Menggunakan Event Listener
const onCoffeOrderedListener = ({ name, price }) => {
  makeCoffe(name);
  makeBill(price);
};

myEventEmitter.on("coffe-order", onCoffeOrderedListener);

myEventEmitter.emit("coffe-order", { name: "Tubruk", price: 50000 });
