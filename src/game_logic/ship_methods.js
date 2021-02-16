function checkForShip(player, coordinates) {
  const ships = [
    {
      locations: [],
    },
  ];

  return ships.find((ship) =>
    ship.locations.some(
      (location) =>
        location[0] === coordinates[0] && location[1] === coordinates[1]
    )
  );
}

module.exports.checkForShip = checkForShip;
