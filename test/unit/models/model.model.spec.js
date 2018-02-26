/**
 * Tests Mocha / chai (pour l'assertion)
 */


//assertion c'est une vérification
//beforeEach permet l'execution d'instruction à chaque it

import { describe, beforeEach, it } from "mocha";
import { assert } from "chai";
import { Model } from "./../../../src/models/model.model";
import { Window } from "./../../window";

// class Child extends Model {

//         constructor(){
//             super();
//         }
// }

//description du sujet de test
//tout doit etre contenu dans un describe()
describe("Model", () => {

    let model;

    //avant chaque it le beforEach sera invoqué
    beforeEach(() => {
        model = new Model({
            exist: undefined
        });
    });
    // description du test unitaire
    it("getObservers returns an Array", () => {

        assert.isArray(model.getObservers());
    });
    // description du test unitaire
    it("Setter mute model property if not exists", () => {
        let value = true;
        model.set("foo", value); // on fait un setter : on dit foo vaut true
        assert.equal(model.get("foo"), undefined); // on test avec le get que foo vaut bien true
    });

    // description du test unitaire
    it("Setter mute model property if exists", () => {
        let value = true;
        model.set("exist", value);
        assert.equal(model.get("exist"), value); //on test que quand on fait un test ça vaut value
    });

    // description du test unitaire
    it("Getter retrieve default value if property is undefined", () => {
        let value = "defaut value";
        assert.equal(model.get("exist", value), value);
    });

    // description du test unitaire
    it("Getter retrieve default value if property do not exist", () => {
        let value = "defaut value";
        assert.equal(model.get("foo", value), value);
    });

    //the window problem : on utiliser jsdom (fichier rajouté window.js)
    // description du test unitaire
    it("toString get JSON representation of model property", () => {
        // model.set("exist", true);
        // console.log(model.toString());
        assert.equal(model.toString(), "{}");
    });

    it("toString get JSON representation of muted model property", () => {
        model.set("exist", true);
        assert.equal(model.toString(), "{\"exist\":true}");
    });


    it("notify call binded callback", () => {

        let called = false;
        let callback = () => {
            called = true;
        }
        model.bind(callback);
        model.notify();
        assert.equal(called, true);
    });


});