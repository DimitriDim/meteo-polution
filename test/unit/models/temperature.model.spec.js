/**
 * Tests Mocha / chai (pour l'assertion)
 */

//assertion c'est une vérification
//beforeEach permet l'execution d'instruction à chaque it

import { describe, beforeEach, it } from "mocha";
import { assert } from "chai";
import { Model } from "./../../../src/models/model.model";
import { Temperature } from "./../../../src/models/temperature/temperature.model";



//description du sujet de test
//tout doit etre contenu dans un describe()
describe("Temperature", () => {

    let temperature;

    //avant chaque it le beforEach sera invoqué
    beforeEach(() => {
        temperature = new Temperature({
            exist: undefined
        });
    });
    // description du test unitaire
    it("temperature value is 0", () => {

        assert.equal(temperature.get("temperature"),0);
    });
    // description du test unitaire
    it("min value is 0", () => {

        assert.equal(temperature.get("min"),0);
    });
    // description du test unitaire
    it("max value is 0", () => {

        assert.equal(temperature.get("max"),0);
    });

   
});