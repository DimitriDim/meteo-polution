import { Hydrator } from "../hydrator.hydrator.api";

/**
 * @type {Waqi}
 */
export class Waqi extends Hydrator {

    /**
     * @param {Polution} Polution 
     * @param {Object} response 
     */
    hydrate (polution, response) {
        polution.set(
            "aqi",
            response.data.aqi
          ? response.data.aqi
          : "-"
        );
        polution.set(
            "pm",
            response.data.iaqi.pm25
          ? response.data.iaqi.pm25.v
          : "-"
        );
        polution.set(
            "ozone",
            response.data.iaqi.o3
          ? response.data.iaqi.o3.v
          : "-"
        );
        polution.notify();
    }

    /**
     * @param {Polution} city 
     */
    deshydrate (polution) {
        polution.set("aqi",0);
        polution.set("pm",0);
        polution.set("ozone",0);
        polution.notify();
    }
}