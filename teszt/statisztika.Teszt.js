import Statisztika from "../js/Statisztika.js";

QUnit.module(
  "statisztika ellenőrzés metódusainak tesztelése",
  function (hooks) {
    let statisztika;
    hooks.before(() => {
      statisztika = new Statisztika();
    });
    QUnit.test("nemszerintSzama létezik-e", function (assert) {
      assert.ok(statisztika.nemszerintSzama, "létezik-e");
    });

    QUnit.test("atlagEletkor létezik-e", function (assert) {
      assert.ok(statisztika.atlagEletkor, "létezik-e");
    });

    QUnit.test("nemszerintAtlagEletkora létezik-e", function (assert) {
      assert.ok(statisztika.nemszerintAtlagEletkora, "létezik-e");
    });
  }
);
QUnit.module("nemszerintSzama tesztelések", function (hooks) {
  let statisztika;
  hooks.before(() => {
    statisztika = new Statisztika();
  });

  QUnit.test("Üres a lista", function (assert) {
    let nem = "";
   statisztika.lista =  [{}, {}, {}],
    
    assert.equal(statisztika.nemszerintSzama(nem), "");
  });
  QUnit.test("|NŐ kereső| Csak a nők vannak a listában ", function (assert) {
    let nem = "nő";
   statisztika.lista =  [{ nev: "Lilla", kor: 56, nem: "nő" },
   { nev: "Rozi", kor: 16, nem: "nő" },
   { nev: "Rózsa", kor: 33, nem: "nő" },],
    
    assert.equal(statisztika.nemszerintSzama(nem), "3");
  });
  QUnit.test("|NŐ kereső| Csak a férfiak vannak a listában ", function (assert) {
    let nem = "nő";
   statisztika.lista =  [{ nev: "Béla", kor: 56, nem: "ffi" },
   { nev: "Jenő", kor: 16, nem: "ffi" },
   { nev: "Rózsa", kor: 33, nem: "ffi" },],
    
    assert.equal(statisztika.nemszerintSzama(nem), "0");
  });
  QUnit.test("|FFI kereső| Csak a férfiak vannak a listában ", function (assert) {
    let nem = "ffi";
   statisztika.lista =  [{ nev: "Béla", kor: 56, nem: "ffi" },
   { nev: "Jenő", kor: 16, nem: "ffi" },
   { nev: "Rózsa", kor: 33, nem: "ffi" },],
    
    assert.equal(statisztika.nemszerintSzama(nem), "3");
  });
  QUnit.test("|FFI kereső| Csak a nők vannak a listában ", function (assert) {
    let nem = "ffi";
   statisztika.lista =  [{ nev: "Lilla", kor: 56, nem: "nő" },
   { nev: "Rozi", kor: 16, nem: "nő" },
   { nev: "Rózsa", kor: 33, nem: "nő" },],
    
    assert.equal(statisztika.nemszerintSzama(nem), "0");
  });

  QUnit.test("|NŐ_egyebek| Csak egyebek vannak a listában ", function (assert) {
    let nem = "nő";
   statisztika.lista =  [{ nev: "Béla", kor: 56, nem: "dsad" },
   { nev: "Jenő", kor: 16, nem: "sdsd" },
   { nev: "Rózsa", kor: 33, nem: "dsdsd" },],
    
    assert.equal(statisztika.nemszerintSzama(nem), "0");
  });
  QUnit.test("|FFI_egyebek| Csak egyebek vannak a listában ", function (assert) {
    let nem = "ffi";
   statisztika.lista =  [{ nev: "Lilla", kor: 56, nem: "fsf" },
   { nev: "Rozi", kor: 16, nem: "dsf" },
   { nev: "Rózsa", kor: 33, nem: "dffd" },],
    
    assert.equal(statisztika.nemszerintSzama(nem), "0");
  });
  QUnit.test("|NŐ_hianyoslista| Hiányos a lista, nőt keres ", function (assert) {
    let nem = "nő";
   statisztika.lista =  [{ nev: "Béla", kor: 56, nem: "nő" },
   {},
   { nev: "Rózsa", kor: 33, nem: "nő" },],
    
    assert.equal(statisztika.nemszerintSzama(nem), "2");
  });
  QUnit.test("|NŐ_hianyoslista| Hiányos a lista, ffi-t keres", function (assert) {
    let nem = "ffi";
   statisztika.lista =  [{ nev: "Lilla", kor: 56, nem: "ffi" },
   {},
   { nev: "Rózsa", kor: 33, nem: "ffi" },],
    
    assert.equal(statisztika.nemszerintSzama(nem), "2");
  });
  
});
QUnit.module("atlagEletkor tesztelések", function (hooks) {
    let statisztika;
    hooks.before(() => {
      statisztika = new Statisztika();
    });
  
    QUnit.test("Üres a lista", function (assert) {
    
     statisztika.lista =  [],
      
      assert.equal(statisztika.atlagEletkor(), 0);
    });
   
    
  });