import { Component } from "./../component.component";
import { MetaComponent } from "../meta-component.component";

/**
 * @type {Location}
 */
export class Location extends MetaComponent {

    /**
     * @constructor
     * @param {City} city
     * @param {Trace} trace
     */
    constructor(
        city,
        trace
    ) {
        super("location", [
            city,
            trace
        ]);
    }

}