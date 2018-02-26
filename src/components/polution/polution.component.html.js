export default (polution) => {

    return `
<ul class="ui col-v-4 mdl-list grey-50">
    <div class="ui col-12 center grey-50 mdl-list__item">
        <span class="ui left col-5 smaller mdl-list__item-primary-content">
            Aix Quality Index
        </span>
        <div class="ui col-3 col-sm-2 right">
        
            <span class="ui lighter">
                ${polution.get("aqi")  ? polution.get("aqi") : ``}
            </span>
            <span class="ui smaller icon material-icons"> 
                ${!polution.get("aqi") ? `autorenew` : (polution.get("aqi") !== "-" ? 50 < polution.get("aqi") ? `thumb_down` : `thumb_up` : ``)}
            </span>
        </div>
    </div>
    <br/>
    <br/>
    <div class="ui col-12 center grey-50 mdl-list__item">
    <span class="ui left col-5 smaller mdl-list__item-primary-content">
    Fine Particle
    </span>
        <div class="ui col-3 col-sm-2 col-2 right">
            <span class="ui lighter">
                ${polution.get("pm") ? polution.get("pm") : ""}
            </span>
            <span class="ui smaller icon material-icons">
                ${!polution.get("aqi") ? `autorenew` : (polution.get("aqi") !== "-" ? 20 < polution.get("pm") ? `thumb_down` : `thumb_up` : ``)}
            </span>
        </div>
    </div>
    <br/>
    <br/>
    <div class="ui col-12 center grey-50 mdl-list__item">
    <span class="ui left col-5 col-sm-5 smaller mdl-list__item-primary-content">
    Ozone
    </span>
        <div class="ui col-3 col-sm-2 right">
            <span class="ui lighter">
                ${polution.get("ozone") ? polution.get("ozone") : ""}
            </span>
            <span class="ui smaller icon material-icons">
                ${!polution.get("aqi") ? `autorenew` : (polution.get("aqi") !== "-" ? 100 < polution.get("ozone") ? `thumb_down` : `thumb_up` : ``)}
            </span>
        </div>
    </div>
    <br/>
    <br/>
</ul>
`;

};