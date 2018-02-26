import { Model } from "../model.model";

/**
 * @type {City}
 */
export class City extends Model {

    /**
     * @constructor
     * @param {Climat} climat
     * @param {Polution} polution
     */
    constructor (climat, polution) {
        super({

            /**
             * @type {String}
             */
            name: "",

            /**
             * @type {String}
             */
            description: "",

            /**
             * @type {Number}
             */
            sunrise: 0,

            /**
             * @type {Number}
             */
            sunset: 0,

            /**
             * @type {Number}
             */
            lat: 0,

            /**
             * @type {Number}
             */
            lng: 0,

            /**
             * @type {Object}
             */
            climat: climat,

            /**
             * @type {Object}
             */
            polution: polution

        });

    }

}