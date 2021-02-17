function checkForShipIndex(player, points) {
  return player.ships.findIndex((ship) =>
    ship.locations.some(
      (shipPoints) =>
        shipPoints[0] === points[0] && shipPoints[1] === points[1]
    )
  );
}

function damageShip(ship, points) {
  ship.damage.push(points);
}

function fire(player, points) {
  const opponentShipIndex = checkForShipIndex(player, points)
  if (opponentShipIndex !== -1) damageShip(player.ships[opponentShipIndex], points)
}

module.exports.checkForShipIndex = checkForShipIndex;
module.exports.damageShip = damageShip;
module.exports.fire = fire;
