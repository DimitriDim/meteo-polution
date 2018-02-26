import { Model } from "../model.model";

/**
 * @type {Climat}
 */
export class Climat extends Model {

    /**
     * @constructor
     * @param {Temperature} temperature
     */
    constructor(temperature) {
        super({

            /**
             * @type {Number}
             */
            humidity: 0,

            /**
             * @type {Number}
             */
            wind: 0,

            /**
             * @type {Object}
             */
            temperature: temperature

        });

    }

}