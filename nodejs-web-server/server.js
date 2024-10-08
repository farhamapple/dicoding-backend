console.log("Halo, kita akan belajar membuat server");

const http = require("http");

/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 *
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */
const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");

  response.statusCode = 200;
  response.end("<h1>Halo HTTP Server!</h1>");

  const { method } = request;

  if (method === "GET") {
    response.end("<h1>Hello!</h1>");
  }

  if (method === "POST") {
    // response.end("<h1>Hai!</h1>");

    let body = [];

    request.on("data", (chunk) => {
      body.push(chunk);
    });

    request.on("end", () => {
      body = Buffer.concat(body).toString();
      response.end(`<h1>Hai, ${body}!</h1>`);
    });
  }

  /*
    Cara Ngetest-nya di Console 
    curl -X GET http://localhost:5000
    // output: <h1>Hello!</h1>
    curl -X POST http://localhost:5000
    // output: <h1>Hai!</h1>
    curl -X PUT http://localhost:5000
    // output: <h1>Bonjour!</h1>
    curl -X DELETE http://localhost:5000
    // output: <h1>Salam!</h1>
    */
};
// Cek Tetep Berjalan Servernya
const port = 5000;
const host = "localhost";

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
