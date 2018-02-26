import { Weather as WeatherModelApi } from "./models/apis/weather.model.api";
import { Weather as WeatheHydrator} from "./hydrators/apis/weather.hydrator.api";
import { Waqi as WaqiApi } from "./models/apis/waqi.model.api";
import { Waqi as WaqiHydrator} from "./hydrators/apis/waqi.hydrator.api";
import { City as CityModel } from "./models/city/city.model";
import { Climat as ClimatModel } from "./models/climat/climat.model";
import { Temperature as TemperatureModel } from "./models/temperature/temperature.model";
import { Polution as PolutionModel } from "./models/polution/polution.model";
import { Location } from "./components/location/location.component";
import { City } from "./components/city/city.component";
import { Trace } from "./components/trace/trace.component";
import { Climat } from "./components/climat/climat.component";
import { Temperature } from "./components/temperature/temperature.component";
import { Humidity } from "./components/humidity/humidity.component";
import { Polution } from "./components/polution/polution.component";


 
if(window.cordova) {
  document.addEventListener("deviceready", runapp, false);
} else {
    runapp();
}


function runapp (e) {

        let weatherToken = "40ef35710baae8ad63c4c76f77ae1b25";
        let weatherApi = new WeatherModelApi(weatherToken)
        let weatherHydrator = new WeatheHydrator;
        let waqiToken = "5ee758863c71b3b7e950c6836c0f865ca7161842";
        let  waqiApi = new WaqiApi(waqiToken)
        let  waqiHydrator = new WaqiHydrator;
        let cityModel = new CityModel(
            new ClimatModel(new TemperatureModel),
            new PolutionModel
        );
        new Location(
            new City(cityModel, weatherApi, weatherHydrator),
            new Trace(cityModel, weatherApi, weatherHydrator)
        ).render();
        new Climat(
            new Temperature(cityModel),
            new Humidity(cityModel.get("climat")),
            new Polution(cityModel, waqiApi, waqiHydrator),
            cityModel
        ).render();
    
    }










// function frame(frame) {
//     // componentHandler.downgradeElements(document.querySelector(".mdl-layout")); 
// // componentHandler.upgradeDom();
//     var frame = window.document.getElementsByClassName(frame)[0];
//     var frameable = window.document.getElementsByClassName("frameable");
//     for (var key in frameable) {
//       if (frameable[key] instanceof HTMLElement) {
//         frameable[key].setAttribute(
//           "class",
//           frameable[key].getAttribute("class").replace("active ", "")
//         );
//       }
//     }
//     frame.setAttribute("class","active " + frame.getAttribute("class"));
//   }