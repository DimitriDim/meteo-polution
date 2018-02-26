import { Model } from "../model.model";

/**
 * @type {Temperature}
 */
export class Temperature extends Model {

    /**
     * @constructor
     */
    constructor() {
        super({

            /**
             * @type {Number}
             */
            temperature: 0,

            /**
             * @type {Number}
             */
            min: 0,

            /**
             * @type {Number}
             */
            max: 0

        });

    }

}