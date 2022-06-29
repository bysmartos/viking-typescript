import Saxon from "../src/saxon";
import Viking from "../src/viking";
import War from "../src/war";

describe("War", function () {
    let viking:Viking, saxon:Saxon, war:War;

    function generateViking () {
      let name     = "Harald";
      let strength = 150;
      let health   = 300;

      return new Viking(name, health, strength);
    }

    function generateSaxon () {
      let health   = 60;
      let strength = 25;

      return new Saxon(health, strength);
    }

    beforeEach(function () {
      viking = generateViking();
      saxon  = generateSaxon();
      war    = new War();
    });

    describe("constructor function", function () {
      test("should receive 0 arguments", function () {
        expect(War.length).toEqual(0);
      });

      test("should assign an empty array to the vikingArmy property", function () {
        expect(war.vikingArmy).toEqual([]);
      });

      test("should assign an empty array to the saxonArmy property", function () {
        expect(war.saxonArmy).toEqual([]);
      });
    });

    describe("addViking() method", function () {
      test("should be a function", function () {
        expect(typeof(war.addViking)).toBe("function");
      });

      test("should receive 1 argument (a Viking object)", function () {
        expect(war.addViking.length).toEqual(1);
      });

      test("should add the received Viking to the army", function () {
        war.addViking(viking);
        expect(war.vikingArmy).toEqual([ viking ]);
      });

      test("shouldn't return anything", function () {
        expect(war.addViking(viking)).toEqual(undefined);
      });
    });

    describe("addSaxon() method", function () {
      test("should be a function", function () {
        expect(typeof(war.addSaxon)).toBe("function");
      });

      test("should receive 1 argument (a Saxon object)", function () {
        expect(war.addSaxon.length).toEqual(1);
      });

      test("should add the received Saxon to the army", function () {
        war.addSaxon(saxon);
        expect(war.saxonArmy).toEqual([ saxon ]);
      });

      test("shouldn't return anything", function () {
        expect(war.addSaxon(saxon)).toEqual(undefined);
      });
    });

    describe("Armies Attack", function () {
      beforeEach (function () {
        war.addViking(viking);
        war.addSaxon(saxon);
      });

      describe("vikingAttack() method", function () {
        test("should be a function", function () {
          expect(typeof(war.vikingAttack)).toBe("function");
        });

        test("should receive 0 arguments", function () {
          expect(war.vikingAttack.length).toEqual(0);
        });

        test("should make Saxon receiveDamage() equal to the strength of a Viking", function () {
          let oldHealth = saxon.health;
          war.vikingAttack();
          expect(saxon.health).toEqual(oldHealth - viking.strength);
        });

        test("should remove dead saxons from the army", function () {
          war.vikingAttack();
          expect(war.saxonArmy.length).toEqual(0);
        });

        test("should return result of calling receiveDamage() of a Saxon with the strength of a Viking", function () {
          expect(war.vikingAttack()).toEqual("A Saxon has died in combat");
        });
      });

      describe("saxonAttack() method", function () {
        test("should be a function", function () {
          expect(typeof(war.saxonAttack)).toBe("function");
        });

        test("should receive 0 arguments", function () {
          expect(war.saxonAttack.length).toEqual(0);
        });

        test("should make a Viking receiveDamage() equal to the strength of a Saxon", function () {
          let oldHealth = viking.health;
          war.saxonAttack();
          expect(viking.health).toEqual(oldHealth - saxon.strength);
        });

        test("should remove dead vikings from the army", function () {
          for (let i = 0; i < 12; i += 1) {
            war.saxonAttack();
          }
          expect(war.vikingArmy.length).toEqual(0);
        });

        test("should return result of calling receiveDamage() of a Viking with the strength of a Saxon", function () {
          expect(war.saxonAttack()).toEqual(viking.name + " has received " + saxon.strength + " points of damage");
        });
      });

      describe("showStatus() method", function () {
        test("should be a function", function () {
          expect(typeof(war.showStatus)).toBe("function");
        });

        test("should receive 0 arguments", function () {
          expect(war.showStatus.length).toEqual(0);
        });

        test("should return \"Vikings have won the war of the century!\", if the Saxons array is empty", function () {
          war.vikingAttack();
          expect(war.showStatus()).toEqual("Vikings have won the war of the century!");
        });

        test("should return \"Saxons have fought for their lives and survive another day...\", if the Vikings array is empty", function () {
          for (let i = 0; i < 12; i += 1) {
            war.saxonAttack();
          }
          expect(war.showStatus()).toEqual("Saxons have fought for their lives and survive another day...");
        });

        test("should return \"Vikings and Saxons are still in the thick of battle.\", if there are still both Vikings and Saxons", function () {
          expect(war.showStatus()).toEqual("Vikings and Saxons are still in the thick of battle.");
        });
      });
    });
  });
