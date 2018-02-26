import { Component } from "./../component.component";
import { default as template } from "./temperature.component.html";

/**
 * @type {Temperature}
 */
export class Temperature extends Component {

    /**
     * @constructor
     * @param {City} city
     */
    constructor (city) {
        super("temperature", template, [
            city
        ]);
    }

}