class Tiger {
  constructor() {
    this.strength = Math.floor(Math.random() * 1000);
  }

  growl() {
    console.log("Grrrrr !!");
  }
}

module.exports = Tiger;
