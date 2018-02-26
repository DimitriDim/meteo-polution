/**
 * Tests Mocha / chai (pour l'assertion)
 */

//assertion c'est une vérification
//beforeEach permet l'execution d'instruction à chaque it

import { describe, beforeEach, it } from "mocha";
import { assert } from "chai";
import { Model } from "./../../../src/models/model.model";
import { Polution } from "./../../../src/models/polution/polution.model";



//description du sujet de test
//tout doit etre contenu dans un describe()
describe("Polution", () => {

    let polution;

    //avant chaque it le beforEach sera invoqué
    beforeEach(() => {
        polution = new Polution({
            exist: undefined
        });
    });
    // description du test unitaire
    it("aqi value is 0", () => {

        assert.equal(polution.get("aqi"),0);
    });
    // description du test unitaire
    it("pm value is 0", () => {

        assert.equal(polution.get("pm"),0);
    });
    // description du test unitaire
    it("ozon value is 0", () => {

        assert.equal(polution.get("ozone"),0);
    });

   
});