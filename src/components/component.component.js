import { Model } from "../models/model.model";
import { Api } from "../models/apis/api.model.api";
import { Hydrator } from "../hydrators/hydrator.hydrator.api";

/**
 * @type {Component}
 */
export class Component {

    /**
     * @constructor
     * @param {String} selector 
     * @param {Function} template 
     * @param {Array} args 
     */
    constructor(selector, template, args) {

        args = args || [];

        if (selector) {

            /**
             * @type {String}
             */
            this.selector = selector;

            /**
             * @type {Function}
             */
            this.template = template

            window.document.createElement(selector);
        }

        for (let i = 0, l = args.length; i < l; i++) {
            if (args[i] instanceof Api) {

                /**
                 * @type {Api}
                 */
                this.api = args[i];

            } else if (args[i] instanceof Model) {

                /**
                 * @type {Model}
                 */
                this.model = args[i];

                this.model.bind(this.render.bind(this))
            } else if (args[i] instanceof Hydrator) {

                /**
                 * @type {Hydrator}
                 */
                this.hydrator = args[i];

            }
        }

    }

    /**
     * @param {Arary} data
     * @returns {HTMLElement}
     */
    render(data) {
        let element = window.document.getElementsByTagName(this.selector)[0];
        if (this.template) {
            data = "object" === typeof data && (data instanceof Array) ? data : [];
            if (this.model) {
                data.unshift(this.model);
            }
            element.innerHTML = this.template(...data);
        }
        return element;
    }

    /**
     * @param {String} endpoint 
     * @param {Function} error 
     */
    retrieve(endpoint, error) {
        this.hydrator.deshydrate(this.model);
        let xhr = new XMLHttpRequest;
        xhr.open("GET", endpoint);
        xhr.onload = xhr.onerror = xhr.onabort = (e) => {
            if (200 == xhr.status) {
                return this.hydrator.hydrate(
                    this.model,
                    window.JSON.parse(xhr.response)
                );
            }
            this.hydrator.deshydrate(this.model);
            return error(xhr);
        };
        xhr.send();
    }

}