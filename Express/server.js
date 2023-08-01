const express = require("express");
const dataCtrl = require("./controllers/jsonData.controller");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method}  ${req.url}`);
  next();
  const delta = Date.now() - start;
  console.log(delta);
});

app.use(express.json());

app.post("/jsonData", dataCtrl.postData);
app.get("/jsonData", dataCtrl.getAllData);
app.get("/jsonData/:dataId", dataCtrl.getData);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
