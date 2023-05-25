import Aszinkron from "../js/asszinkron.js";
QUnit.test("adatBe metódus teszt", (assert) => {
  const done = assert.async();
  const aszinkron = new Aszinkron();
  const vegpont = "../adatok.json";
  const callBackFuggveny = function (data) {
   
      assert.deepEqual(data, {
        szemelyek: [
          { nev: "Béla", kor: 56, nem: "ffi" },
          { nev: "Jenő", kor: 16, nem: "ffi" },
          { nev: "Rózsa", kor: 33, nem: "nő" },
        ],
      });
    done();
  };
  aszinkron.adatBe(vegpont, callBackFuggveny);
});
