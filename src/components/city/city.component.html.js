export default (city) => {
    
    return `
${!city.get("name") ? `<div id="p2" class="ui col-12 mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>` : ``}
${city.get("name") && "-" !== city.get("name") ? `<span class="ui smaller icon material-icons">room</span> ${city.get("name")}` : ``}
`;

};