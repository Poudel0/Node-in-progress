const express = require("express");

const app = express();

const PORT = 3000;

const jsonData = [
  { id: 0, name: "sandman" },
  { id: 1, name: "musiman" },
];
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
