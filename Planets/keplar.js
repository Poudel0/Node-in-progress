const { log } = require("console");
const { parse } = require("csv-parse");
const fs = require("fs");

const results = [];
// const habitablePlanets
function isHabitable(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

fs.createReadStream("./keplar_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true, // Returns each row in csv as js object as key-value instead of just arrays of values in a row
    })
  )
  .on("data", (data) => {
    if (isHabitable(data)) {
      results.push(data);
    }
  })
  .on("end", () => {
    console.log(
      results.map((planet) => {
        return planet["kepler_name"];
      })
    );
    console.log(
      `${results.length} Potential habitable planets have been discovered so far !`
    );
  })
  .on("error", (err) => {
    console.log(err);
  });
