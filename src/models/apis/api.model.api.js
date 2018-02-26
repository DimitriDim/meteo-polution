import { Model } from "../model.model";

/**
 * @type {Api}
 */
export class Api extends Model {

    /**
     * @constructor
     * @param {String} token
     */
    constructor (token) {
        super({

            /**
             * @type {String}
             */
            token: token

        })
    }

}