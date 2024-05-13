$(document).ready(function(){
    if(localStorage.getItem('consentModeSettings') === null){
        gtag('consent', 'default', {
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
        });
    } else {
        gtag('consent', 'default', JSON.parse(localStorage.getItem('consentModeSettings')));
    }

    var consentModePixel = document.createElement("div");
    consentModePixel.className = 'consent-mode';
    consentModePixel.style = 'position: fixed; bottom: 0px; left: 0px; z-index: 199;';
    
    consentModePixel.innerHTML = `
    <style type="text/css">
    .consent-mode__container {
        display: none;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .consent-mode__container.active {
    display: block;
    }
    .consent-mode__modal {
    background-color: #ffffff;
    background: #FFFFFF;
    color: #000000;
    height: calc(95vh - 72px);
    width: calc(95vw - 72px);
    overflow-y: scroll;
    -ms-overflow-style: none;
    /* Internet Explorer 10+ */
    scrollbar-width: none;
    /* Firefox */
    z-index: 201;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 6px;
    padding: 32px 29px 28px 29px;
    font-size: 16px;
    font-family: AudiType, sans-serif;
    font-stretch: 105%;
    line-height: 20px;
    }
    .consent-mode__modal::-webkit-scrollbar {
    display: none;
    /* Safari and Chrome */
    }
    @media only screen and (min-width: 768px) {
    .consent-mode__modal {
        width: 80vw;
        height: 80vh;
        padding: 42px 69px 38px 69px;
    }
    }
    .consent-mode__modal .legal__close {
    text-align: end;
    margin-right: -15px;
    }
    .consent-mode__modal .legal__close button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 5px 20px;
    }
    .consent-mode__modal .legal__close button:hover svg {
    opacity: 0.6;
    }
    .consent-mode__modal .legal__close button svg {
    -webkit-transition: width 0.4s 0.1s;
    transition: width 0.4s 0.1s;
    }
    .consent-mode__overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 200;
    background: rgba(0, 0, 0, 0.4);
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    opacity: 0;
    -webkit-transition: opacity 0.4s, -webkit-transform 0s;
    transition: opacity 0.4s, -webkit-transform 0s;
    transition: transform 0s, opacity 0.4s;
    transition: transform 0s, opacity 0.4s, -webkit-transform 0s;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000;
    perspective: 1000;
    will-change: transform, opacity;
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
    }
    .consent-mode__close {
    position: fixed;
    right: 15px;
    top: 15px;
    display: none;
    }
    .consent-mode__close.active {
    display: block;
    }
    .consent-mode__close button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 5px 20px;
    }
    .consent-mode__close button svg {
    -webkit-transition: width 0.4s 0.1s;
    transition: width 0.4s 0.1s;
    }
    .consent-mode__title_logo {
    display: block;
    margin: auto;
    text-align: center;
    margin-bottom: 10px;
    }
    @media only screen and (min-width: 768px) {
    .consent-mode__title_logo {
        margin-bottom: 14px;
    }
    }
    .consent-mode__title_span {
    display: block;
    margin: auto;
    text-align: center;
    margin-bottom: 35px;
    font-size: 16px;
    font-family: AudiType, sans-serif;
    font-stretch: 105%;
    line-height: 20px;
    font-weight: bold;
    }
    @media only screen and (min-width: 768px) {
    .consent-mode__title_span {
        margin-bottom: 51px;
    }
    }
    .consent-mode__title_description {
    margin-bottom: 45px;
    font-size: 16px;
    font-family: AudiType, sans-serif;
    font-stretch: 105%;
    line-height: 20px;
    }
    @media only screen and (min-width: 768px) {
    .consent-mode__title_description {
        margin-bottom: 65px;
    }
    }
    .consent-mode__content .consent-mode__content_ensToggleRow {
    margin-bottom: 20px;
    opacity: 1 !important;
    padding-top: 15px;
    text-align: left;
    }
    .consent-mode__content .consent-mode__content_ensToggleRow .consent-mode__content_ens-toggle-row-item .consent-mode__content_ensToggleLabel {
    font-size: 16px;
    font-family: AudiType, sans-serif;
    font-stretch: 105%;
    line-height: 20px;
    font-weight: bold;
    border: none;
    padding: 0;
    margin: 0;
    font-weight: bold;
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    cursor: default;
    margin-bottom: 18px;
    }
    .consent-mode__content .consent-mode__content_ensToggleRow .consent-mode__content_ens-toggle-row-item .consent-mode__content_card {
    border: 0;
    font: inherit;
    font-size: 100%;
    padding: 0;
    vertical-align: baseline;
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
    float: right;
    height: 20px;
    margin: 5px;
    overflow: visible;
    outline: none !important;
    position: relative;
    text-align: center;
    width: 50px;
    cursor: pointer;
    margin-top: 7px;
    }
    .consent-mode__content .consent-mode__content_ensToggleRow .consent-mode__content_ens-toggle-row-item .consent-mode__content_card .consent-mode__content_ensCheckbox {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
    display: none;
    }
    .consent-mode__content .consent-mode__content_ensToggleRow .consent-mode__content_ens-toggle-row-item .consent-mode__content_card .consent-mode__content_switch {
    background: #939393;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    background-color: #bbb;
    border-radius: 10px;
    display: block;
    height: 15px;
    margin-left: -1px;
    position: absolute;
    top: 0;
    width: 50px;
    }
    .consent-mode__content .consent-mode__content_ensToggleRow .consent-mode__content_ens-toggle-row-item .consent-mode__content_card .consent-mode__content_toggle {
    background: white;
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
    background-color: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 1px 1px 7px #808080;
            box-shadow: 1px 1px 7px #808080;
    display: block;
    height: 25px;
    position: absolute;
    top: -5px;
    left: -2px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    width: 25px;
    }
    .consent-mode__content .consent-mode__content_ensToggleRow .consent-mode__content_ens-toggle-row-item .consent-mode__content_card input[type=checkbox]:checked ~ .consent-mode__content_switch {
    background: #000 !important;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    }
    .consent-mode__content .consent-mode__content_ensToggleRow .consent-mode__content_ens-toggle-row-item .consent-mode__content_card input[type=checkbox]:checked ~ .consent-mode__content_toggle {
    left: 25px;
    }
    .consent-mode__content summary {
    cursor: pointer;
    margin-bottom: 5px;
    }
    .consent-mode__content_details {
    margin-top: 18px;
    }
    .consent-mode__content_details_c1 {
    margin-bottom: 20px;
    }
    @media only screen and (min-width: 768px) {
    .consent-mode__content_details_c1 {
        margin-bottom: 35px;
    }
    }
    .consent-mode__content_details_submenu {
    margin-left: 35px;
    margin-top: 27px;
    margin-bottom: 30px;
    color: #808080;
    }
    @media only screen and (min-width: 768px) {
    .consent-mode__content_details_submenu {
        margin-top: 47px;
        margin-bottom: 65px;
    }
    }
    .consent-mode__content_details_d2 {
    font-size: 12px;
    font-family: AudiType, sans-serif;
    font-stretch: 105%;
    line-height: 15px;
    }
    .consent-mode__content_details_d2 p {
    margin-left: 16px;
    }
    .consent-mode__content hr {
    border-color: #ddd;
    border-style: solid;
    border-width: 1px 0 0 0;
    }
    .consent-mode__submit {
    margin-top: 50px;
    display: block;
    text-align: center;
    }
    @media only screen and (min-width: 768px) {
    .consent-mode__submit {
        text-align: end;
        margin-top: 85px;
    }
    }
    .consent-mode__submit_button {
    position: relative;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    background-color: transparent;
    border: 1px solid rgb(26, 26, 26);
    border-radius: 0px;
    outline-offset: 2px;
    -webkit-transition-timing-function: cubic-bezier(0.75, 0.02, 0.5, 1);
            transition-timing-function: cubic-bezier(0.75, 0.02, 0.5, 1);
    -webkit-transition-duration: 250ms;
            transition-duration: 250ms;
    -webkit-transition-property: color, background-color, border-color;
    transition-property: color, background-color, border-color;
    -webkit-appearance: none;
        -moz-appearance: none;
            appearance: none;
    font-size: 14px;
    font-family: AudiType, sans-serif;
    font-stretch: 105%;
    line-height: 24px;
    -webkit-font-smoothing: antialiased;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
        justify-content: center;
    min-width: 9em;
    padding-block: 0.9em;
    padding-inline: 2.5em;
    color: rgb(255, 255, 255);
    border-color: rgb(255, 255, 255);
    -webkit-user-select: initial;
        -moz-user-select: initial;
        -ms-user-select: initial;
            user-select: initial;
    margin-bottom: 22px;
    background: #000000;
    cursor: pointer;
    width: 206px;
    }
    .consent-mode__submit_button:hover {
    color: rgb(217, 217, 217);
    border-color: rgb(217, 217, 217);
    }
    @media only screen and (min-width: 768px) {
    .consent-mode__submit_button {
        margin-left: 34px;
    }
    }
</style>
<div class="consent-mode__container active">
    <div class="consent-mode__overlay" onclick="closeConsentModeOverlay();"></div>
    <div class="consent-mode__modal">
        <div class="consent-mode__close">
        <button onclick="closeConsentMode();">
            <svg xmlns="http://www.w3.org/2000/svg" width="13.975" height="13.973" viewBox="0 0 13.975 13.973"><path id="x" d="M18.521,6.344l-5.241,5.24L8.04,6.344,6.293,8.091l5.24,5.24-5.24,5.24L8.04,20.317l5.24-5.24,5.241,5.24,1.747-1.747-5.24-5.24,5.24-5.24Z" transform="translate(-6.293 -6.344)" fill="#000"/></svg>
        </button>
        </div>
        <div class="consent-mode__title">
        <div class="consent-mode__title_logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="69" height="24" viewBox="0 0 65.172 22.845"><defs><style>.cls-consent {fill: #000000;}</style></defs><g id="cf1fb765e00684515d1fc1d6487baae4" transform="translate(0 -11.548)"><path id="Trazado_1125" class="cls-consent" d="M28.393,159.644c4.735-3.219,9.437-3.225,14.152-.02,4.7-3.205,9.4-3.2,14.158.02a11.272,11.272,0,0,1,9.091-2.2,10.976,10.976,0,0,1,6.9,4.17A11.406,11.406,0,0,1,56.7,177.64c-4.722,3.219-9.423,3.239-14.158.027-4.688,3.205-9.4,3.212-14.145-.02a11.413,11.413,0,1,1,0-18Zm30.172,16.067a8.759,8.759,0,1,0,.007-14.125,11.5,11.5,0,0,1-.007,14.125ZM26.524,161.586a8.756,8.756,0,1,0,.007,14.118,11.444,11.444,0,0,1-2.427-7.043A11.3,11.3,0,0,1,26.524,161.586Zm3.8.007a11.466,11.466,0,0,1-.007,14.118,8.658,8.658,0,0,0,10.315-.02,11.343,11.343,0,0,1-2.434-7.043,11.219,11.219,0,0,1,2.441-7.063A8.657,8.657,0,0,0,30.328,161.592ZM44.44,175.7a8.66,8.66,0,0,0,10.281.033c-3.219-4.728-3.232-9.443,0-14.178a8.648,8.648,0,0,0-10.275.04A11.422,11.422,0,0,1,44.44,175.7Zm-1.9-1.9a8.555,8.555,0,0,0,0-10.275A8.616,8.616,0,0,0,42.538,173.8Zm14.112-10.3a8.657,8.657,0,0,0,.013,10.295A8.6,8.6,0,0,0,56.65,163.494ZM28.433,173.809a8.65,8.65,0,0,0-.007-10.308A8.628,8.628,0,0,0,28.433,173.809Z" transform="translate(-9.963 -145.677)"></path></g></svg>
        </div>
        <div class="consent-mode__title_span">
            <span><b>Configuración para compartir datos y cookies</b></span>
        </div>
        <div class="consent-mode__title_description">
            <p>
                Volkswagen de México S.A. de C.V., marca Audi y nuestros socios, usamos cookies y tecnologías similares, tanto propias como de terceros, para ayudarte a tener una mejor experiencia en nuestro sitio web y analizar el tráfico. Esto también nos permite ofrecerte contenido adaptado a tus intereses, incluyendo publicidad personalizada. Al usar nuestro sitio, se pueden establecer conexiones entre tu navegador y servidores de terceros, y tus datos personales pueden ser transmitidos. Tu consentimiento es importante para nosotros, necesitamos tu permiso para usar estas cookies. Puedes dar tu consentimiento al hacer clic en ‘Aceptar todo’ o si prefieres, puedes configurar tus preferencias individualmente por cada tipo de cookie y guardar tu configuración. En caso de no realizar ninguna selección, solo utilizaremos las cookies necesarias. No estás legalmente obligado a dar tu consentimiento, pero si decides no hacerlo, algunos de nuestros servicios podrían no estar disponibles. Puedes gestionar tus preferencias de cookies en cualquier momento y revocar tu consentimiento con efecto inmediato. Encuentra más detalles en nuestra política de cookies y aviso de privacidad.
            </p>
        </div>
        </div>
        
        <div class="consent-mode__content">
        <div class="consent-mode__content_ensToggleRow">
            <div class="consent-mode__content_ens-toggle-row-item">
            <span class="consent-mode__content_ensToggleLabel">Estadística cookies</span>
            <label class="consent-mode__content_card" for="FunctionalSlideStadistics">
                <input class="consent-mode__content_ensCheckbox" id="FunctionalSlideStadistics" type="checkbox" name="FunctionalSlideStadistics">
                <span class="consent-mode__content_switch"></span>
                <span class="consent-mode__content_toggle"></span>
            </label>
            </div>
            <p>
            Las cookies de estadísticas permiten a los administradores de páginas web comprender mejor la interacción de los visitantes al recopilar información de manera anónima.
            </p>
            <div class="consent-mode__content_details">
            <details class="consent-mode__content_details_d1">
                <summary class="consent-mode__content_details_s1">
                Detalles
                </summary>
                <div class="consent-mode__content_details_submenu">
                <div class="consent-mode__content_details_c1">
                    <p>
                    Analytics_storage
                    </p>

                    <details  class="consent-mode__content_details_d2">
                    <summary  class="consent-mode__content_details_s2">
                        Detalles
                    </summary>
                    <p>
                        Habilita el almacenamiento de información para analíticas, como la duración de las visitas (mediante cookies).
                    </p>
                    </details>
                </div>
                </div>
            </details>
            </div>
        </div>

        <hr/>
        
        <div class="consent-mode__content_ensToggleRow">
            <div class="consent-mode__content_ens-toggle-row-item">
            <span class="consent-mode__content_ensToggleLabel">Marketing cookies</span>
            <label class="consent-mode__content_card" for="FunctionalSlideMarketing">
                <input class="consent-mode__content_ensCheckbox" id="FunctionalSlideMarketing" type="checkbox" name="FunctionalSlideMarketing">
                <span class="consent-mode__content_switch"></span>
                <span class="consent-mode__content_toggle"></span>
            </label>
            </div>
            <p>
            Las cookies de marketing se utilizan para mostrar anuncios relevantes y atractivos a los usuarios, siendo valiosas tanto para editores como para anunciantes.
            </p>
            <div class="consent-mode__content_details">
            <details class="consent-mode__content_details_d1">
                <summary class="consent-mode__content_details_s1">
                Detalles
                </summary>
                
                <div class="consent-mode__content_details_submenu">
                <div class="consent-mode__content_details_c1">
                    <p>
                    ad_personalization
                    </p>

                    <details  class="consent-mode__content_details_d2">
                    <summary  class="consent-mode__content_details_s2">
                        Detalles
                    </summary>
                    <p>
                        Define el consentimiento sobre la publicidad personalizada.
                    </p>
                    </details>
                </div>

                <div class="consent-mode__content_details_c1">
                    <p>
                    ad_storage
                    </p>

                    <details  class="consent-mode__content_details_d2">
                    <summary  class="consent-mode__content_details_s2">
                        Detalles
                    </summary>
                    <p>
                        Habilita el almacenamiento de información para fines publicitarios (mediante cookies).
                    </p>
                    </details>
                </div>

                <div class="consent-mode__content_details_c1">
                    <p>
                    ad_user_data
                    </p>

                    <details  class="consent-mode__content_details_d2">
                    <summary  class="consent-mode__content_details_s2">
                        Detalles
                    </summary>
                    <p>
                        Define el consentimiento sobre el envío a Google de datos de usuario relacionados con la publicidad.
                    </p>
                    </details>
                </div>
                </div>
            </details>
            </div>
        </div>

        <hr/>

        <div>
            <div class="consent-mode__submit">
            <button class="consent-mode__submit_button" onclick="allConsentDenied();">No, gracias</button>
            <button class="consent-mode__submit_button" onclick="selectConsentUpdate();">Aceptar selección</button>
            <button class="consent-mode__submit_button" onclick="allConsentGranted();">Aceptar todas</button>
            </div>
        </div>

        </div>

    </div>
    </div>`.replace('consent-mode__container active', localStorage.getItem('consentModeSettings') === null ? 'consent-mode__container active' : 'consent-mode__container');

    $("body").append(consentModePixel);

    const exampleScriptConsentMode = getScriptConsentModeContent(`
    <script>
    function displayConsentMode(){$(".consent-mode__container").addClass("active"),$(".consent-mode__close").addClass("active")}function closeConsentMode(){$(".consent-mode__container").removeClass("active")}function closeConsentModeOverlay(){null!==localStorage.getItem("consentModeSettings")&&$(".consent-mode__container").removeClass("active")}function setConsentSettings(e){gtag("consent","update",e),localStorage.setItem("consentModeSettings",JSON.stringify(e))}function allConsentDenied(){setConsentSettings({ad_user_data:"denied",ad_personalization:"denied",ad_storage:"denied",analytics_storage:"denied"}),closeConsentMode()}function allConsentGranted(){setConsentSettings({ad_user_data:"granted",ad_personalization:"granted",ad_storage:"granted",analytics_storage:"granted"}),closeConsentMode()}function selectConsentUpdate(){let e=$("#FunctionalSlideStadistics").is(":checked"),n=$("#FunctionalSlideMarketing").is(":checked");e&&n?allConsentGranted():e&&!n?setConsentSettings({ad_user_data:"denied",ad_personalization:"denied",ad_storage:"denied",analytics_storage:"granted"}):!e&&n?setConsentSettings({ad_user_data:"granted",ad_personalization:"granted",ad_storage:"granted",analytics_storage:"denied"}):allConsentDenied(),closeConsentMode()}
    <\/script>
    `),
    s_ConsentMode = document.createElement("script"),
    t_ConsentMode = document.createTextNode(exampleScriptConsentMode);

    s_ConsentMode.appendChild(t_ConsentMode);

    document.getElementsByTagName("head")[0].appendChild(s_ConsentMode);

    function getScriptConsentModeContent(htmlStr) {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlStr;
        return tempDiv.innerText;
    }
});  