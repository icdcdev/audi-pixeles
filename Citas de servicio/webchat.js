$(document).ready(function () {
    // Linea 251 (esta en exampleScript) usar uglify.js para minify/beautify el script
    // === COPIAR A PARTIR DE AQUI ===
var pWebChat = document.createElement("div");
pWebChat.id = "pixel-web-chat";
pWebChat.innerHTML = `
<style type="text/css" id="fbuttons">
  .d-none{
    display: none !important;
  }
  .citas-servicio {
    position: fixed;
    bottom: 0px;
    flex-direction: column;
    align-items: flex-end;
    overflow: hidden;
    z-index: 200;
    width: 94%;
    left: 50%;
    transform: translate(-50%);
  }
  @media only screen and (min-width: 768px) {
    .citas-servicio {
      display: flex;
      right: 24px;
      width: auto;
      transform: none;
      left: auto;
    }
  }
  .citas-servicio--btnW {
    background-color: #000000;
    width: 64px;
    height: 64px;
    transition: width 0.4s 0.1s;
    cursor: pointer;
    border-radius: 45px;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 3px 6px #00000029;
    border-style: solid;
    border-color: #ffffff;
    border-width: 3px;
    margin-bottom: 40px;
    margin-right: 5px;
    float: right;
  }
  .citas-servicio--btnW.active {
    display: flex;
  }
  .citas-servicio--btnW svg {
    width: 26.3px;
    height: 26.3px;
  }
  @media only screen and (min-width: 768px) {
    .citas-servicio--btnW svg {
      width: 36.3px;
      height: 36.3px;
    }
  }
  @media only screen and (min-width: 768px) {
    .citas-servicio--btnW {
      width: 84px;
      height: 84px;
      margin-right: 0px;
    }
  }
  .citas-servicio--menu {
    display: none;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: opacity 600ms, visibility 600ms;
    transition: opacity 600ms, visibility 600ms;
    width: auto;
    margin-bottom: 5px;
    border-radius: 10px 10px 3px 3px;
    overflow: hidden;
    background: #F5F5F5 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
    margin-left: 10px;
    margin-right: 10px;
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .citas-servicio--menu.active {
    display: grid;
    visibility: visible;
    opacity: 1;
    animation: fade 1s;
  }
  @media only screen and (min-width: 768px) {
    .citas-servicio--menu {
      width: 432px;
    }
  }
  .citas-servicio--menu__header {
    background-color: #000000;
    padding-left: 21px;
    padding-top: 20px;
    padding-bottom: 17px;
    cursor: pointer;
    display: flex;
  }
  @media only screen and (min-width: 768px) {
    .citas-servicio--menu__header {
      padding-top: 30px;
      padding-bottom: 27px;
      padding-left: 33px;
    }
  }
  .citas-servicio--menu__header span {
    color: #ffffff;
    font-size: 17px;
    font-weight: bold;
    font-family: "Audi Type Extended", sans-serif;
    font-stretch: 130%;
    line-height: 26px;
  }
  .citas-servicio--menu__header .barra-icon {
    background-color: #ffffff;
    width: 21px;
    height: 4px;
    margin-top: 8px;
    position: absolute;
    right: 28px;
  }
  @media only screen and (min-width: 768px) {
    .citas-servicio--menu__header .barra-icon {
      right: 48px;
    }
  }
  .citas-servicio--menu__content {
    padding: 20px;
    background-color: #F5F5F5;
    color: #000000;
    font-size: 16px;
    font-weight: normal;
    font-family: Audi Type Screen, sans-serif;
    font-stretch: 105%;
    line-height: 25px;
  }
  @media only screen and (min-width: 768px) {
    .citas-servicio--menu__content {
      padding: 31px;
    }
  }
  .citas-servicio--menu__content--btn {
    font-weight: 200;
    font-stretch: 130%;
    font-size: 16px;
    font-family: "Audi Type Extended", sans-serif;
    background-color: #000000;
    color: #ffffff;
    width: 255px;
    height: 66.45px;
    border-radius: 35px;
    text-decoration: none !important;
    margin-bottom: 8.27px;
    margin-left: auto;
    margin-right: auto;
    position: static;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .citas-servicio--menu__content--btn:first-of-type {
    margin-top: 16.91px;
  }
  @media only screen and (min-width: 768px) {
    .citas-servicio--menu__content--btn:first-of-type {
      margin-top: 28.91px;
    }
  }
  .citas-servicio--menu__content--btn:hover {
    color: #ffffff !important;
  }
  .citas-servicio--menu__content--btn:focus {
    color: #ffffff !important;
  }
  @media only screen and (min-width: 768px) {
    .citas-servicio--menu__content--btn {
      width: 309px;
    }
  }
  .citas-servicio--menu__content--btn svg {
    margin-left: 20px;
  }
  .citas-servicio--menu__content--btn span {
    margin-left: 20px;
  }
</style>
<div class="citas-servicio">

  <div class="citas-servicio--btnW active" onclick="displayContent();">
    <svg xmlns="http://www.w3.org/2000/svg" width="36.397" height="36.571" viewBox="0 0 36.397 36.571">
      <path id="bxl-whatsapp" d="M34.094,8.315A18.127,18.127,0,0,0,5.57,30.182L3,39.571l9.607-2.521a18.13,18.13,0,0,0,8.66,2.206h.008A18.128,18.128,0,0,0,34.094,8.315M21.275,36.2h-.006A15.031,15.031,0,0,1,13.6,34.1l-.549-.327-5.7,1.5,1.52-5.557-.357-.569A15.062,15.062,0,1,1,21.275,36.2m8.262-11.282c-.454-.228-2.679-1.322-3.095-1.474s-.715-.226-1.017.226-1.171,1.472-1.435,1.774-.529.339-.981.113a12.369,12.369,0,0,1-3.642-2.247,13.64,13.64,0,0,1-2.519-3.137c-.264-.454-.028-.7.2-.925.2-.2.452-.529.678-.793a3.1,3.1,0,0,0,.452-.755.827.827,0,0,0-.038-.793c-.113-.228-1.019-2.457-1.4-3.363-.365-.878-.739-.761-1.017-.773-.262-.012-.565-.016-.866-.016a1.668,1.668,0,0,0-1.209.565,5.076,5.076,0,0,0-1.585,3.777,8.819,8.819,0,0,0,1.849,4.685c.226.3,3.194,4.875,7.736,6.837a26.781,26.781,0,0,0,2.582.955,6.221,6.221,0,0,0,2.852.18c.87-.129,2.679-1.094,3.056-2.152a3.789,3.789,0,0,0,.264-2.154c-.113-.19-.418-.3-.868-.531" transform="translate(-3 -3)" fill="#fff" fill-rule="evenodd"/>
    </svg>
  </div>
  <div class="citas-servicio--menu ">
    <div class="citas-servicio--menu__header" onclick="displayIcon();">
      <span>Audi Web Chat</span>
      <div class="barra-icon"></div>
    </div>
    <div class="citas-servicio--menu__content">
      <span>
        ¿Deseas contactar con un asesor, recibir una cotización, recibir información de vehículos seminuevos o prefieres realizar una cita de servicio?
      </span>
      <a id="btnWCVentas" class="citas-servicio--menu__content--btn btnCS1" onclick="sendMessageLink();" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="36.921" height="31.455" viewBox="0 0 36.921 31.455">
          <path id="Trazado_4" data-name="Trazado 4" d="M20.8,25.208H10.652m12.483-2.455h0L32.289,20s4.132-.929,4.132,1.363c0,1.943-1.852,2.7-3.127,3.281C28.726,26.732,21.8,30,21.8,30a21.055,21.055,0,0,1-7.162,1.454H.5V23.646c3.822,0,2.782.356,6.114-1.362a15.568,15.568,0,0,1,6.814-1.762H20.8a2.343,2.343,0,0,1,0,4.685M27.05,18.18a8.59,8.59,0,1,0-8.59-8.59A8.59,8.59,0,0,0,27.05,18.18Z" transform="translate(0 -0.5)" fill="none" stroke="#fff" stroke-width="2" fill-rule="evenodd"/>
        </svg>
        <span>Ventas</span>
      </a>
      <a id="btnWCSeminuevos" class="citas-servicio--menu__content--btn btnCS2" onclick="sendMessageLink();" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="37.004" height="30.693" viewBox="0 0 37.004 30.693">
          <path id="used-car-search-small" d="M6.558,17.768a20.783,20.783,0,0,0-2.692.654,5.138,5.138,0,0,0-3.208,2.57A9.648,9.648,0,0,0,.5,23.562v.286A1.749,1.749,0,0,0,2.066,25.49l2.347.032a3.5,3.5,0,0,0,3.489,3.5h.032a3.527,3.527,0,0,0,3.521-3.534h0l6.121.014m6.38.015,1.584,0a3.5,3.5,0,0,0,3.489,3.5h.064a3.5,3.5,0,0,0,3.489-3.5l2.368-.408a1.684,1.684,0,0,0,1.544-1.827l-.313-4.138a2.376,2.376,0,0,0-1.8-2.056c-.605-.155-1.055-.283-1.661-.385-1.707-.286-5.122-2.57-7.4-3.427a4.645,4.645,0,0,0-.452-.142m-5.624-.426a15.18,15.18,0,0,0-4.736.568,10.888,10.888,0,0,0-2.292,1.653M23.818,33.5l-6.26-14.921ZM22.41,11.353a7.541,7.541,0,0,1-7.2,7.853h-.469a7.853,7.853,0,0,1,0-15.707,7.73,7.73,0,0,1,7.668,7.853Z" transform="translate(0.001 -3)" fill="none" stroke="#fff" stroke-width="2" fill-rule="evenodd"/>
        </svg>
        <span>Seminuevos</span>
      </a>
      <a id="btnWCServicio" class="citas-servicio--menu__content--btn btnCS3" onclick="sendMessageLink();" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="31.763" height="32.958" viewBox="0 0 31.763 32.958">
          <g id="calendar-events-small" transform="translate(0 0.5)">
            <path id="Trazado_6" data-name="Trazado 6" d="M7.642,26.9v4.168a1.313,1.313,0,0,0,1.389,1.389H29.874a1.313,1.313,0,0,0,1.389-1.389V8.142M.695,3.974V25.511A1.392,1.392,0,0,0,2.084,26.9H18.758l6.947-6.947V3.974m0,15.979H18.758V26.9M0,.5H26.4" transform="translate(0 -0.5)" fill="none" stroke="#fff" stroke-width="2" fill-rule="evenodd"/>
            <path id="Trazado_7" data-name="Trazado 7" d="M4,6.095,6.524,5.4h.721v8.059H9.409v1.112H4V13.459H6.164V6.651L4,7.206V6.095Zm6.852,8.059V13.042a16.6,16.6,0,0,0,2.765.556c1.683,0,2.4-.695,2.4-1.667,0-1.667-3.246-1.945-4.928-1.945l.24-4.585h5.409V6.512H12.294l-.12,2.5c2.284.139,4.928.695,4.928,2.918,0,1.528-1.082,2.779-3.606,2.779a8.258,8.258,0,0,1-2.645-.556Z" transform="translate(2.558 1.408)" fill="#fff"/>
          </g>
        </svg>
        <span>Cita de Servicio</span>
      </a>
      <a id="btnRefacciones" class="citas-servicio--menu__content--btn btnCS4" onclick="sendMessageLink();" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="31.763" height="32.958" viewBox="0 0 36.899 44.246">
            <path id="inspection-small" d="M34.562.5,36.4,6.01v5.51l-1.837,1.837V26.215H36.4V39.072a3.684,3.684,0,0,1-3.674,3.674H30.888a3.684,3.684,0,0,1-3.674-3.674h0V26.215h1.837V13.357l-1.837-1.837V6.01L29.052.5ZM7.01.5V6.01L8.847,7.847h5.51L16.194,6.01V.5h1.837L21.7,4.174v7.347l-5.51,5.51V38.154c0,2.02-1.837,4.592-4.041,4.592h-1.1c-2.2,0-4.041-2.388-4.041-4.592V17.031L1.5,11.521V4.174L5.174.5Z" transform="translate(-0.5 0.5)" fill="rgba(255,255,255,0)" stroke="#fff" stroke-width="2" fill-rule="evenodd"/>
        </svg>
        <span>Refacciones</span>
      </a>
    </div>
  </div>
</div>`;

$("body").append(pWebChat);

const exampleScript = getScriptContent(`
<script>
    function getDataContact(){return[{site:"www.audicenteracapulco.com.mx",number1:"527441813805",number2:"",number3:"527441415631",number4:"",greeting:"Hola%20%2AAudi%20Acapulco%2A%2C"},{site:"www.audicenteraguascalientes.com.mx",number1:"",number2:"",number3:"524494185095",number4:"",greeting:"Hola%20%2AAudi%20Aguascalientes%2A%2C"},{site:"www.audicenter-angelopolis.com.mx",number1:"522222158095",number2:"522222934558",number3:"522222939628",number4:"",greeting:"Hola%20%2AAudi%20Angel%C3%B3polis%2A%2C"},{site:"www.audicentercancun.com.mx",number1:"529982607451",number2:"529982607451",number3:"529982912614",number4:"",greeting:"Hola%20%2AAudi%20Canc%C3%BAn%2A%2C"},{site:"www.audicentercelaya.com.mx",number1:"524611593235",number2:"",number3:"524611593235",number4:"",greeting:"Hola%20%2AAudi%20Celaya%2A%2C"},{site:"www.audicenterchihuahua.com.mx",number1:"526141499482",number2:"526142351871",number3:"526143206899",number4:"",greeting:"Hola%20%2AAudi%20Chihuahua%2A%2C"},{site:"www.audicentercoapa.com.mx",number1:"525641863696",number2:"525571307033",number3:"525579017545",number4:"525579017545",greeting:"Hola%20%2AAudi%20Coapa%2A%2C"},{site:"www.audicentercuernavaca.com.mx",number1:"527773288774",number2:"527773288774",number3:"527772255426",number4:"",greeting:"Hola%20%2AAudi%20Cuernavaca%2A%2C"},{site:"www.audicenterculiacan.com.mx",number1:"526671917061",number2:"526671917061",number3:"526671917061",number4:"",greeting:"Hola%20%2AAudi%20Culiac%C3%A1n%2A%2C"},{site:"www.audicenteresmeralda.com.mx",number1:"525585494512",number2:"525585494512",number3:"525585494512",number4:"",greeting:"Hola%20%2AAudi%20Esmeralda%2A%2C"},{site:"www.audicentergalerias.com.mx",number1:"523316992030",number2:"523316992030",number3:"523339543420",number4:"",greeting:"Hola%20%2AAudi%20Galer%C3%ADas%2A%2C"},{site:"www.audicenterinsurgentes.com.mx",number1:"525641863700",number2:"527225322127",number3:"525578651513",number4:"525578651510",greeting:"Hola%20%2AAudi%20Insurgentes%2A%2C"},{site:"www.audicenterinterlomas.com.mx",number1:"525563592285",number2:"525618190310",number3:"525510404124",number4:"",greeting:"Hola%20%2AAudi%20Interlomas%2A%2C"},{site:"www.audicenterirapuato.com.mx",number1:"524626354541",number2:"",number3:"524626354541",number4:"",greeting:"Hola%20%2AAudi%20Irapuato%2A%2C"},{site:"www.audicenterlaguna.com.mx",number1:"528712234221",number2:"528712234221",number3:"528712234221",number4:"",greeting:"Hola%20%2AAudi%20Laguna%2A%2C"},{site:"www.audicenterleon.com.mx",number1:"524777810930",number2:"524771617237",number3:"524771223535",number4:"",greeting:"Hola%20%2AAudi%20Le%C3%B3n%2A%2C"},{site:"www.audicenterlopezmateos.com.mx",number1:"523322619708",number2:"523322619708",number3:"523321061648",number4:"",greeting:"Hola%20%2AAudi%20L%C3%B3pez%20Mateos%2A%2C"},{site:"www.audicenterloscabos.com.mx",number1:"526242403145",number2:"526242403145",number3:"526242403145",number4:"",greeting:"Hola%20%2AAudi%20Los%20Cabos%2A%2C"},{site:"www.audicenter-masaryk.com.mx",number1:"525641863713",number2:"525580442120",number3:"525541877189",number4:"",greeting:"Hola%20%2AAudi%20Masaryk%2A%2C"},{site:"www.audicentermerida.com.mx",number1:"529996118811",number2:"529996118811",number3:"529996118811",number4:"",greeting:"Hola%20%2AAudi%20M%C3%A9rida%2A%2C"},{site:"www.audicentermexicali.com.mx",number1:"526643287346",number2:"526643287346",number3:"526862244383",number4:"",greeting:"Hola%20%2AAudi%20Mexicali%2A%2C"},{site:"www.audicentermorelia.com.mx",number1:"524436922107",number2:"524432730694",number3:"524435049627",number4:"",greeting:"Hola%20%2AAudi%20Morelia%2A%2C"},{site:"www.audicenterpatria.com.mx",number1:"523322634230",number2:"523312948075",number3:"523311471574",number4:"",greeting:"Hola%20%2AAudi%20Patria%2A%2C"},{site:"www.audicenterpedregal.com.mx",number1:"525641863708",number2:"525541877047",number3:"525545248446",number4:"525541877060",greeting:"Hola%20%2AAudi%20Pedregal%2A%2C"},{site:"www.audicentersantafe.com.mx",number1:"525580320237",number2:"525580320237",number3:"525580320237",number4:"",greeting:"Hola%20%2AAudi%20Santa%20F%C3%A9%2A%2C"},{site:"www.audicentersatelite.mx",number1:"525543320865",number2:"525585999108",number3:"525586033313",number4:"",greeting:"Hola%20%2AAudi%20Sat%C3%A9lite%2A%2C"},{site:"www.audicenterserdan.com.mx",number1:"522211462221",number2:"522215228451",number3:"522211124844",number4:"",greeting:"Hola%20%2AAudi%20Serd%C3%A1n%2A%2C"},{site:"www.audicentersonora.com.mx",number1:"526623495092",number2:"526623495092",number3:"526623495092",number4:"",greeting:"Hola%20%2AAudi%20Sonora%2A%2C"},{site:"www.audicentertijuana.com.mx",number1:"528711075081",number2:"528711075081",number3:"528711075081",number4:"",greeting:"Hola%20%2AAudi%20Tijuana%2A%2C"},{site:"www.audicentertoluca.com.mx",number1:"527122000196",number2:"527122000196",number3:"527291020031",number4:"",greeting:"Hola%20%2AAudi%20Toluca%2A%2C"},{site:"www.audicentertuxtla.com.mx",number1:"529616174730",number2:"529616174730",number3:"529613607771",number4:"",greeting:"Hola%20%2AAudi%20Tuxtla%2A%2C"},{site:"www.audicentervallejo.com.mx",number1:"525513112998",number2:"525612811746",number3:"525539871906",number4:"",greeting:"Hola%20%2AAudi%20Vallejo%2A%2C"},{site:"www.audicenterveracruz.com.mx",number1:"522291196963",number2:"522294363168",number3:"522299827931",number4:"",greeting:"Hola%20%2AAudi%20Veracruz%2A%2C"},{site:"www.audicentermonterrey.com.mx",number1:"528119882289",number2:"528119882088",number3:"528119882251",number4:"",greeting:"Hola%20%2AAudi%20Monterrey%2A%2C"},{site:"www.audicentercalzadadelvalle.com.mx",number1:"528111068062",number2:"528123542323",number3:"528117628293",number4:"",greeting:"Hola%20%2AAudi%20Calzada%20Del%20Valle%2A%2C"},{site:"www.audicentersanpedro.com.mx",number1:"528117789385",number2:"528123542323",number3:"528117619439",number4:"",greeting:"Hola%20%2AAudi%20San%20Pedro%2A%2C"},{site:"www.audicentercumbres.com.mx",number1:"528118008258",number2:"528123542323",number3:"528116606723",number4:"",greeting:"Hola%20%2AAudi%20Cumbres%2A%2C"}].find(e=>e.site===window.location.hostname)}function displayContent(){$(".citas-servicio--btnW").removeClass("active"),$(".citas-servicio--menu").addClass("active")}function displayIcon(){$(".citas-servicio--menu").removeClass("active"),$(".citas-servicio--btnW").addClass("active")}function sendMessageLink(){displayIcon()}function checkList(){let e=getDataContact();null==e?$(".citas-servicio").addClass("d-none"):($(".citas-servicio").addClass("d-show"),""===e.number1?$(".btnCS1").addClass("d-none"):$("#btnWCVentas").attr("href","https://wa.me/"+e.number1+"?text="+e.greeting+"%20estoy%20interesado%20en%20un%20vehículo"),""===e.number2?$(".btnCS2").addClass("d-none"):$("#btnWCSeminuevos").attr("href","https://wa.me/"+e.number2+"?text="+e.greeting+"%20estoy%20interesado%20en%20un%20vehículo%20seminuevo"),""===e.number3?$(".btnCS3").addClass("d-none"):$("#btnWCServicio").attr("href","https://wa.me/"+e.number3+"?text="+e.greeting+"%20estoy%20interesado%20en%20agendar%20una%20cita%20de%20servicio"),""===e.number4?$(".btnCS4").addClass("d-none"):$("#btnRefacciones").attr("href","https://wa.me/"+e.number4+"?text="+e.greeting+"%20estoy%20interesado%20en%20refacciones"))}checkList();
<\/script>
`),
    s = document.createElement("script"),
    t = document.createTextNode(exampleScript);

s.appendChild(t);

document.getElementsByTagName("head")[0].appendChild(s);

function getScriptContent(htmlStr) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlStr;
    return tempDiv.innerText;
}
// === COPIAR HASTA AQUI ===
});
