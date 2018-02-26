import { Component } from "./../component.component";
import { default as template } from "./City.component.html";

/**
 * @type {City}
 */
export class City extends Component {

    /**
     * @constructor
     * @param {City} city
     * @param {Api} api
     * @param {Hydrator} hydrator
     */
    constructor(
        city,
        api,
        hydrator
    ) {
        super("city", template, [
            city,
            api,
            hydrator
        ]);
        this.getCurrentPosition();
    }

    /**
     * @returns {undefined}
     */
    getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(
            (e) => {
                this.byLatLng(e.coords.latitude, e.coords.longitude);
            },
            (e) => {
                this.model.set("name", "-");
                this.render();
                window.ui.dialog.alert(
                    "Geolocate",
                    "<br>Can't determine your position"
                ).onconfirm("geolocate", () => {
                    this.hydrator.deshydrate(this.model);
                    this.getCurrentPosition();
                });
            }
        );
    }

    /**
     * @param {Number} lat 
     * @param {Number} lng 
     */
    byLatLng(lat, lng) {
        this.retrieve(this.api.getGeolocationEndPoint(lat, lng), () => {
            this.model.set("name", "-");
            this.render();
            window.ui.dialog.alert(
                "City",
                "<br>Can't get City informations",
            ).onconfirm("refresh", () => {
                this.hydrator.deshydrate(this.model);
                this.byLatLng(lat, lng)
            });
        });
    }

    /** 
     *@returns {HTMLElement}
     */
    render() {
        if ("..." === this.model.get("name")) {
            this.getCurrentPosition();
            this.model.set("name", "");
        }
        let element = super.render();
        window.componentHandler.downgradeElements(element);
        window.componentHandler.upgradeDom();
        return element;
    }

}