const valid = require('../validators/register-validator')
const db = require("../models");

// module.exports = async function (username, password) {
//   console.log(`Inside vehicle service`);
  
// }

// const reduceTheSpeed = async () => {
//   console.log(`Reducing the speed`);
//   deAccelerate();
//   applyBreaks();
//   applyClutch();
//   shiftToGearTwo();
// }

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = async function () {
  console.log(`Reducing the speed`);
  // deAccelerate();
  await applyBreaks();
  applyClutch();
  // shiftToGearTwo();
}

const deAccelerate = () => {
  sleep(2000);
  console.log('de accelerating the vehicle');
}

const applyBreaks = async () => {
  await sleep(5000);
  console.log('Applying breaks');
}

const applyClutch = async () => {
  await sleep(4000);
  console.log(`Applying clutch`);
}

const shiftToGearTwo = async () => {
  await sleep(3000);
  console.log(`Shifting to gear 2`);
}
