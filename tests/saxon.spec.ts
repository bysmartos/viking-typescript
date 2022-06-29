import Saxon from "../src/saxon";
import Soldier from "../src/soldier";


  describe("Saxon", function () {
    let saxon;
    let health   = 60;
    let strength = 25;

    beforeEach(function () {
      saxon = new Saxon(health, strength);
    });

    test("should inherit from Soldier", function () {
      expect(saxon instanceof Soldier).toEqual(true);
    });

    describe("constructor function", function () {
      test("should receive 2 arguments (health & strength)", function () {
        expect(Saxon.length).toEqual(2);
      });

      test("should receive the health property as its 1st argument", function () {
        expect(saxon.health).toEqual(health);
      });

      test("should receive the strength property as its 2nd argument", function () {
        expect(saxon.strength).toEqual(strength);
      });
    });

    describe("attack() method", function () {
      test("should be a function", function () {
        expect(typeof(saxon.attack)).toBe("function");
      });

      test("should receive 0 arguments", function () {
        expect(saxon.attack.length).toEqual(0);
      });

      test("should return the strength property of the Saxon", function () {
        expect(saxon.attack()).toEqual(strength);
      });
    });

    describe("receiveDamage() method", function () {
      test("should be a function", function () {
        expect(typeof(saxon.receiveDamage)).toBe("function");
      });

      test("should receive 1 argument (the damage)", function () {
        expect(saxon.receiveDamage.length).toEqual(1);
      });

      test("should remove the received damage from the health property", function () {
        saxon.receiveDamage(50);
        expect(saxon.health).toEqual(health - 50);
      });

      test("should return \"A Saxon has received DAMAGE points of damage\", if the Saxon is still alive", function () {
        expect(saxon.receiveDamage(45)).toEqual("A Saxon has received 45 points of damage");
        expect(saxon.receiveDamage(10)).toEqual("A Saxon has received 10 points of damage");
      });

      test("should return \"A Saxon has died in combat\", if the Saxon dies", function () {
        expect(saxon.receiveDamage(health)).toEqual("A Saxon has died in combat");
      });
    });
   });


