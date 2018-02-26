export default (climat) => {

    return `
<span class="ui col-1 col-v-2 v-center"></span>
<div class="ui col-10 v-center center">
<p class="ui col-4">
    <span class="light icon material-icons"> 	bubble_chart</span>
    <br>
    <span>${climat.get("humidity") ? `${climat.get("humidity")}%` : ``}</span>
</p>
<p class="ui col-4">
    <span class="light icon material-icons">toys</span>
    <br>
    <span>${climat.get("wind") ? `${climat.get("wind")}m/s` : ``}</span>
</p>
<p class="ui col-4">
    <span class="light icon material-icons">import_export</span>
    <br>
    <span>${climat.get("temperature").get("min") || climat.get("temperature").get("max") ? `${climat.get("temperature").get("max") - climat.get("temperature").get("min")}°` : ``}</span>
</p>
</div>
`;

};