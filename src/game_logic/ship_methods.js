function checkForShip(player, coordinates) {
  return player.ships.some((ship) =>
    ship.locations.some(
      (location) =>
        location[0] === coordinates[0] && location[1] === coordinates[1]
    )
  );
}

module.exports.checkForShip = checkForShip;
