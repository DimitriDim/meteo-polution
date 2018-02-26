import { Component } from "./../component.component";
import { default as template } from "./humidity.component.html";

/**
 * @type {Humidity}
 */
export class Humidity extends Component {

    /**
     * @constructor
     * @param {Climat} climat
     */
    constructor (climat) {
        super("humidity", template, [
            climat
        ]);
    }

}