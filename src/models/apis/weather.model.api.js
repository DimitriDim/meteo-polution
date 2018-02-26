import { Api } from "./api.model.api";

/**
 * @type {Weather}
 */
export class Weather extends Api {

    /**
     * @param {Number} lat 
     * @param {Number} lng 
     * @returns {String}
     */
    getGeolocationEndPoint(lat, lng) {
        return `http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lng}&appid=${this.get("token")}`;
    }

    /**
     * @param {String} city 
     * @returns {String}
     */
    getNameEndPoint(city) {
        return `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.get("token")}`;
    }

}