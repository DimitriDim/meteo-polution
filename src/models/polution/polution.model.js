import { Model } from "../model.model";

/**
 * @type {Polution}
 */
export class Polution extends Model {

    /**
     * @constructor
     */
    constructor() {
        super({

            /**
             * @type {Number}
             */
            aqi: 0,

            /**
             * @type {Number}
             */
            pm: 0,

            /**
             * @type {Number}
             */
            ozone: 0

        });

    }

}