class Wolf {
  constructor() {
    this.strength = Math.floor(Math.random() * 1000);
  }

  howl() {
    console.log("Awuuuuu !!");
  }
}

module.exports = Wolf;
