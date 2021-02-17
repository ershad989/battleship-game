const { expect } = require("@jest/globals");

describe("checkForShip", () => {
  const { checkForShip } = require("../src/game_logic/ship_methods");
  let player;

  beforeAll(() => {
    player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
        {
          locations: [
            [1, 0],
            [1, 1],
          ],
        },
        {
          locations: [
            [1, 0],
            [3, 3],
            [4, 4],
            [5, 5],
          ],
        },
      ],
    };
  });

  test("should correctly report no ship at a given player coordinate", () => {
    expect(checkForShip(player, [9, 9])).toBe(-1);
  });

  test("should correctly report a ship at a given player coordinate", () => {
    expect(checkForShip(player, [0, 0])).not.toBe(-1);
  });

  test("should handle ships at more than one player coordinate", () => {
    expect(checkForShip(player, [0, 0])).not.toBe(-1);
    expect(checkForShip(player, [0, 1])).not.toBe(-1);

    expect(checkForShip(player, [9, 9])).toBe(-1);
  });

  test("should handle multiple ships", () => {
    expect(checkForShip(player, [0, 0])).not.toBe(-1);
    expect(checkForShip(player, [0, 1])).not.toBe(-1);

    expect(checkForShip(player, [1, 0])).not.toBe(-1);
    expect(checkForShip(player, [1, 1])).not.toBe(-1);

    expect(checkForShip(player, [9, 9])).toBe(-1);
  });
});

describe("damageShip", () => {
  const { damageShip } = require("../src/game_logic/ship_methods");

  test("should register damage on a ship in a given coordinate", () => {
    const ship = {
      locations: [[0, 0]],
      damage: [],
    };

    const damagePoint = [0, 0];
    const solidPoint = [1, 1];

    damageShip(ship, damagePoint);

    expect(ship.damage).toEqual(expect.arrayContaining([damagePoint]));
    expect(ship.damage).not.toEqual(expect.arrayContaining([solidPoint]));
  });
});

describe("fire", () => {
  const { fire } = require("../src/game_logic/ship_methods");
  const correctAttackPoint = [0, 0];
  const falseAttackPoint = [1, 1];
  let player;

  beforeEach(() => {
    player = {
      ships: [
        {
          locations: [[0, 0]],
          damage: []
        },
      ],
    };
  });

  test("should register an attack from a player to another player's ship at a given coordinate.", () => {
    fire(player, correctAttackPoint);
    expect(player.ships[0].damage).toEqual(expect.arrayContaining([correctAttackPoint]));
  });

  test("should NOT register an attack from a player to another player's ship at a Wrong given coordinate.", () => {
    fire(player, falseAttackPoint);
    expect(player.ships[0].damage).not.toEqual(expect.arrayContaining([falseAttackPoint]));
  });
});
