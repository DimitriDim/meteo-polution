import { Api } from "./api.model.api";

/**
 * @type {Waqi}
 */
export class Waqi extends Api {

    /**
     * @returns {String}
     */
    getEndPoint() {
        return `https://api.waqi.info/feed/here/?token=${this.get("token")}`;
    }

    /**
     * @param {Number} lat 
     * @param {Number} lng 
     * @returns {String}
     */
    getGeolocationEndPoint(lat, lng) {
        return `https://api.waqi.info/feed/geo:${lat};${lng}/?token=${this.get("token")}`;
    }

}