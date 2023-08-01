const model = require("../models/jsonData.model");

function postData(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Name not entered",
    });
  }
  const newjsonData = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newjsonData);
  res.json(newjsonData);
}

function getData(req, res) {
  const dataId = +req.params.dataId;
  const data = model[dataId];
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({
      error: "Data doesnt exist",
    });
  }
}

function getAllData(req, res) {
  res.json(model);
}

module.exports = {
  postData,
  getAllData,
  getData,
};
