import { Component } from "./../component.component";
import { default as template } from "./trace.component.html";

/**
 * @type {Trace}
 */
export class Trace extends Component {

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
        super("trace", template,[
            city,
            api,
            hydrator
        ]);
    }

    /**
     * @param {String} name 
     */
    byName(name) {
        this.retrieve(this.api.getNameEndPoint(name), () => {
            this.model.set("name", "...");
            this.model.notify();
            window.ui.dialog.alert(
                "Selected location",
                "<br>Can't get selected location informations"
            ).onconfirm();
        });
    }

    /** 
     *@returns {HTMLElement}
     */
    render() {
        let input = super.render().getElementsByTagName("input")[0];
        window.componentHandler.downgradeElements(input.parentNode);
        window.componentHandler.upgradeDom();
        input.onkeypress = (e) => {
            if (13 == e.keyCode) {
                this.byName(input.value);
            }
        };
        return input.parentNode;
    }

}