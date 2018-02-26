import { Component } from "./component.component";

/**
 * @type {MetaComponent}
 */
export class MetaComponent extends Component {

    /**
     * @constructor
     * @param {String} selector 
     * @param {Component} component 
     */
    constructor (selector, component) {
        super(selector);

        /**
         * @type {Array}
         */
        this.component = component;

    }

    /**
     * @returns {HTMLElement}
     */
    render () {
        let element = super.render();
        for (
            let i = 0, l = this.component.length;
            i < l;
            this.component[i].render(), i++
        );
        return element;
    }

}