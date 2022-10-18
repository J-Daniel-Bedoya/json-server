// const jsonServer = require("json-server");
// const server = jsonServer.create();

// const router = jsonServer.router(`${__dirname}./data/db.json`);
// const middlewares = jsonServer.defaults();

// const PORT = process.env.PORT || 3001;

// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', '*');
//     next();
// })

// server.use(router);
// server.use(middlewares);

// server.listen(PORT, () => {
//   console.log("JSON Server is running en port 3001");
// });

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(`${__dirname}/data/db.json`);
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

server.use(router);
server.use(middlewares);

server.listen(port, () => {
  console.log("JSON Server is running");
});
