import { Hydrator } from "../hydrator.hydrator.api";

/**
 * @type {Weather}
 */
export class Weather extends Hydrator {

    /**
     * @param {City} city 
     * @param {Object} response 
     */
    hydrate (city, response) {
        city.set("name",response.name);
        city.set("description",response.weather[0].main);
        city.set("sunrise",response.sys.sunrise);
        city.set("sunset",response.sys.sunset);
        city.set("lat",response.coord.lat);
        city.set("lng",response.coord.lon);
        city.get("climat").set("humidity",response.main.humidity);
        city.get("climat").set("wind",response.wind.speed);
        city.get("climat").get("temperature").set("temperature",response.main.temp);
        city.get("climat").get("temperature").set("min",response.main.temp_min);
        city.get("climat").get("temperature").set("max",response.main.temp_max);
        city.notify();
    }

    /**
     * @param {City} city 
     */
    deshydrate (city) {
        city.set("name","");
        city.set("description","");
        city.set("sunrise",0);
        city.set("sunset",0);
        city.set("lat",0);
        city.set("lng",0);
        city.get("climat").set("humidity",0);
        city.get("climat").set("wind",0);
        city.get("climat").get("temperature").set("temperature",0);
        city.get("climat").get("temperature").set("min",0);
        city.get("climat").get("temperature").set("max",0);
        city.notify();
    }

}