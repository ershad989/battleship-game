
describe("PLAYER METHODS", () => {
  describe("validatePoint", () => {
    const { validatePoint } = require("../src/game_logic/player_methods");
    let player;
    beforeAll(() => {
      player = {
        ships: [
          {
            locations: [
              [0, 0],
            ],
          },
          {
            locations: [
              [1, 1],
            ],
          },
          {
            locations: [
              [1, 0],
              [4, 4],
            ],
          },
        ],
      };
    });

    test("should validate if a point is valid for a player to be occupied by his ship", () => {
      expect(validatePoint(player, [9, 9])).toBe(true);
    });

    test("should validate if an occupied point is NOT valid for a player to be occupied by his ship", () => {
      expect(validatePoint(player, [4, 4])).toBe(false);
    });
  });

  describe("validatePoints", () => {
    const { validatePoints } = require("../src/game_logic/player_methods");
    let player;
    beforeAll(() => {
      player = {
        ships: [
          {
            locations: [
              [0, 0],
            ],
          },
          {
            locations: [
              [1, 1],
            ],
          },
          {
            locations: [
              [1, 0],
              [4, 4],
            ],
          },
        ],
      };
    });

    test("should validate if a SET of points ARE valid for a player to be occupied by his ship", () => {
      expect(validatePoints(player, [[9, 9], [8, 8]])).toBe(true);
    });

    test("should validate if a SET of occupied points are NOT valid for a player to be occupied by his ship", () => {
      expect(validatePoints(player, [[1, 0], [1, 1]])).toBe(false);
    });
  });

  describe("placeShip", () => {
    const { placeShip } = require("../src/game_logic/player_methods");
    let player;
    beforeAll(() => {
      player = {
        ships: [
          {
            locations: [
              [0, 0],
            ],
            size: 1
          },
          {
            locations: [
              [1, 1],
              [1, 2],
            ],
            size: 2
          },
          {
            locations: [
              [4, 0],
              [5, 0],
              [6, 0],
            ],
            size: 3
          },
        ],
      };
    });

    test("move ship to a valid point", () => {
      const ship = player.ships[0];
      const point = [0, 0]

      placeShip({player, ship, point, direction: 'horizontal'})

      expect(ship.locations).toHaveLength(1);
      expect(ship.locations[0]).toEqual(point);
    });



    test("should throw an error if no direction is specified", () => {
      const ship = player.ships[0];
      const point = [1, 0]
      function handler() {
        placeShip({player, ship, point})
      }

      expect(handler).toThrow();
      expect(handler).toThrow('You left out the direction! I need that for the math!');
    });
  });
});