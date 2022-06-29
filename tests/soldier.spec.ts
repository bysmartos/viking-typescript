import Soldier from '../src/soldier'

test('1+1 should be 2',()=>{
    expect(1+1).toBe(2);
})

describe("Soldier", function () {
    let soldier:Soldier;
    let strength = 150;
    let health   = 300;

    beforeEach (function () {
      soldier = new Soldier(health, strength);
    });

    describe("constructor function", function () {
      test("should receive 2 arguments (health & strength)", function () {
        expect(Soldier.length).toEqual(2);
      });

      test("should receive the health property as its 1st argument", function () {
        expect(soldier.health).toEqual(health);
      });

      test("should receive the strength property as its 2nd argument", function () {
        expect(soldier.strength).toEqual(strength);
      });
    });

    describe("attack() method", function () {
      test("should be a function", function () {
        expect(typeof(soldier.attack)).toBe("function");
      });

      test("should receive 0 arguments", function () {
        expect(soldier.attack.length).toEqual(0);
      });

      test("should return the strength property of the Soldier", function () {
        expect(soldier.attack()).toEqual(strength);
      });
    });

    describe("receiveDamage() method", function () {
      test("should be a function", function () {
        expect(typeof(soldier.receiveDamage)).toBe("function");
      });

      test("should receive 1 argument (the damage)", function () {
        expect(soldier.receiveDamage.length).toEqual(1);
      });

      test("should remove the received damage from the health property", function () {
        soldier.receiveDamage(50);
        expect(soldier.health).toEqual(health - 50);
      });

      test("shouldn't return anything", function () {
        expect(soldier.receiveDamage(50)).toEqual(undefined);
      });
    });
  });
