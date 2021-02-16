const { expect } = require("@jest/globals");

describe("checkForShip", () => {
  test("should correctly report no ship at a given player coordinate", () => {
    const { checkForShip } = require("../src/game_logic/ship_methods");
    const player = {
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
    };

    expect(checkForShip(player, [9, 9])).toBe(false);
  });

  test("should correctly report a ship at a given player coordinate", () => {
    const { checkForShip } = require("../src/game_logic/ship_methods");
    const player = {
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
    };

    expect(checkForShip(player, [0, 0])).toBe(true);
  });

  test("should handle ships at more than one player coordinate", () => {
    const { checkForShip } = require("../src/game_logic/ship_methods");
    const player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
      ],
    };

    expect(checkForShip(player, [0, 0])).toBe(true);
    expect(checkForShip(player, [0, 1])).toBe(true);

    expect(checkForShip(player, [9, 9])).toBe(false);
  });

  test("should handle multiple ships", () => {
    const { checkForShip } = require("../src/game_logic/ship_methods");
    const player = {
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
      ],
    };

    expect(checkForShip(player, [0, 0])).toBe(true);
    expect(checkForShip(player, [0, 1])).toBe(true);

    expect(checkForShip(player, [1, 0])).toBe(true);
    expect(checkForShip(player, [1, 1])).toBe(true);

    expect(checkForShip(player, [9, 9])).toBe(false);
  });
});

describe("damageShip", () => {
  test("should register damage on a ship in a given coordinate", () => {
    const { damageShip } = require("../src/game_logic/ship_methods");
    const ship = {
      locations: [[0, 0]],
      damage: [],
    };

    const damagePoint = [0, 0];
    const solidPoint = [0, 0];

    damageShip(ship, damagePoint);

    expect(ship.damage).toEqual(expect.arrayContaining([damagePoint]));
    expect(ship.damage).not.toEqual(expect.arrayContaining([solidPoint]));
  });
});
