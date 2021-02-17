const settings = require('../game_settings/global_settings')
const { checkForShipIndex } = require("./ship_methods");

function validatePoint(player, point) {
  const isOutsideTheBoard = point.some(dot => dot < 0 && dot > settings.boardSize)
  return isOutsideTheBoard ? false : checkForShipIndex(player, point) === -1
}

function validatePoints(player, pointsArray) {
  return !pointsArray.some(point => !validatePoint(player, point))
}

function placeShip({player, ship, point, direction}) {
  if (!direction) throw Error('You left out the direction! I need that for the math!')
}

module.exports.validatePoint = validatePoint;
module.exports.validatePoints = validatePoints;
module.exports.placeShip = placeShip;