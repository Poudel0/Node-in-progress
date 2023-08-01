const express = require("express");
const dataCtrl = require("./controllers/jsonData.controller");
const msgCtrl = require("./controllers/messages.controller");
const path = require("path");
const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method}  ${req.url}`);
  next();
  const delta = Date.now() - start;
  console.log(delta);
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.render("index", {
//     title: "US",
//     caption: "kantt",
//   });
// });

app.post("/jsonData", dataCtrl.postData);
app.get("/jsonData", dataCtrl.getAllData);
app.get("/jsonData/:dataId", dataCtrl.getData);

app.get("/messages", msgCtrl.getFile);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
