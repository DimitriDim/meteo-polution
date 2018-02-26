export default (city) => {

    return `
<span class="ui col-12 col-v-1"></span>
<span class="ui col-1 col-v-3 v-center"></span>
<div class="ui col-10 v-center center bigger">
${city.get("climat").get("temperature").get("temperature") ? `
    <span class="ui icon material-icons">
        ${window.parseInt(new window.Date().getTime() / 1000) < city.get("sunset") ? `flare` : `brightness_2`}
    </span>
        <span class="ui bigger"> <span class="ui bigger"><span class="ui bigger"><span class="ui bigger lighter">${window.parseInt(city.get("climat").get("temperature").get("temperature"))}<span class="ui lighter smaller">°</span></span></span></span></span>
    <span class="ui col-12 smaller">${city.get("description")}</span>`
            : ``
        }
</div>
`;

};