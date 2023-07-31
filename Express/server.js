const express = require("express");

const app = express();

const PORT = 3000;

const jsonData = [
  { id: 0, name: "sandman" },
  { id: 1, name: "musimann" },
];

app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method}  ${req.url}`);
  next();
  const delta = Date.now() - start;
  console.log(delta);
});

app.use(express.json());

app.post("/jsonData", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Name not entered",
    });
  }
  const newjsonData = {
    name: req.body.name,
    id: jsonData.length,
  };
  jsonData.push(newjsonData);
  res.json(newjsonData);
});

app.get("/jsonData", (req, res) => {
  res.json(jsonData);
});

app.get("/jsonData/:dataId", (req, res) => {
  const dataId = +req.params.dataId;
  const data = jsonData[dataId];
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({
      error: "Data doesnt exist",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
