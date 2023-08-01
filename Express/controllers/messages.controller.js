const path = require("path");

function getFile(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "kant.jpg"));
}
module.exports = { getFile };
