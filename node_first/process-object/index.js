const initialMemoryUsage = process.memoryUsage();
const yourName = process.argv[2];
const environment =
  process.env.NODE_ENV != "production" ? "localhost" : "dicoding.com";

for (let i = 0; i <= 10000; i++) {
  console.log(i);
}

const currentMemoryUsage = process.memoryUsage();

console.log(`Hai, ${yourName}`);
console.log(`Mode EnvirontMent :  ${environment}`);
console.log(
  `Penggunaan memori dari : ${initialMemoryUsage.heapUsed}, naik menjadi : ${currentMemoryUsage.heapUsed}`
);

// Cara Menjalankannya
// NODE_ENV=development && node ./process-object/index.js "Farham"
