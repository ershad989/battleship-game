function checkForShip(player, coordinates) {
  return player.ships.findIndex((ship) =>
    ship.locations.some(
      (location) =>
        location[0] === coordinates[0] && location[1] === coordinates[1]
    )
  );
}

function damageShip(ship, coordinates) {
  ship.damage.push(coordinates);
}

function fire(player, coordinates) {
  const opponentShipIndex = checkForShip(player, coordinates)
  if (opponentShipIndex !== -1) damageShip(player.ships[opponentShipIndex], coordinates)
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fire = fire;
