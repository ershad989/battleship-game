const { expect } = require("@jest/globals");

describe("checkForShip", () => {
  test("should correctly no ship at a given playe coordinate", () => {
    const { checkForShip } = require("../src/game_logic/ship_methods");
    const player = {
      ship: [
        {
          locations: [[0, 0]],
        },
      ],
    };

    expect(checkForShip(player, [9, 9])).toBeFalsy();
  });
});
