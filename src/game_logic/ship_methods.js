function checkForShip(player, coordinates) {
  return player.ships.some((ship) =>
    ship.locations.some(
      (location) =>
        location[0] === coordinates[0] && location[1] === coordinates[1]
    )
  );
}

function damageShip(ship, coordinates) {
  ship.damage.push(coordinates);
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
