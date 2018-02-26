import { MetaComponent } from "./../meta-component.component";

/**
 * @type {Climat}
 */
export class Climat extends MetaComponent {

    /**
     * @constructor
     * @param {Temperature} temperature 
     * @param {Humidity} humidity 
     * @param {Polution} polution 
     */
    constructor(
        temperature,
        humidity,
        polution) {
        super("climat", [
            temperature,
            humidity,
            polution
        ]);

        /**
         * @type{Array}
         */
        this.classes = {
            sunset: "sunset",
            sunrise: "sunrise",
            day: "day",
            night: "night"
        }
        temperature.model.bind(this.ambiance.bind(this));
    }

    /**
     * @param {City} city
     * @returns {HTMLElement}
     */
    ambiance(city) {
        let element = window.document.getElementsByTagName(this.selector)[0];
        for (let key in this.classes) {
            element.className = element.className.replace(" " + this.classes[key], "");
        }
        if (!city.get("sunrise")) {
            return;
        }
        this.update(element, city);
    }

    /**
     * @param {City} city
     * @param {HTMLElement} element
     */
    update(element, city) {
        let offset = 1800;
        let time = window.parseInt(new Date().getTime() / 1000, 10);
        element.className += " "
            + (time > city.get(this.classes.sunrise) - offset
                && time < city.get(this.classes.sunrise) + offset
                ? this.classes.sunrise
                : (time > city.get(this.classes.sunrise) + offset
                    && time < city.get(this.classes.sunset) - offset
                    ? this.classes.day
                    : (time > city.get(this.classes.sunset) - offset
                        && time < city.get(this.classes.sunset) + offset
                        ? this.classes.sunset
                        : this.classes.night)));
    }

}