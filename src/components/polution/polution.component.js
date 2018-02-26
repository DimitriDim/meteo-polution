import { Component } from "./../component.component";
import { default as template } from "./polution.component.html";

/**
 * @type {Polution}
 */
export class Polution extends Component {

    /**
     * @constructor
     * @param {City} city
     * @param {Waqi} api
     * @param {Hydrator} hydrator
     */
    constructor(city, api, hydrator) {
        super("polution", template, [
            city.get("polution"),
            api,
            hydrator
        ]);

        city.bind((city) => {
            if (city.get("lat")) {
                return this.byLatLng(city.get("lat"), city.get("lng"));
            }
            this.hydrator.deshydrate(this.model);
        });
    }

    /**
     * @param {Number} lat 
     * @param {Number} lng 
     */
    byLatLng(lat, lng) {
        this.retrieve(this.api.getGeolocationEndPoint(lat, lng), () => {
            this.model.set("aqi", "-");
            window.ui.dialog.alert(
                "City", "<br>Can't get Polution informations", "Retry", () => {
                    this.byLatLng(lat, lng);
                }
            );
            this.render();
        });
    }

}