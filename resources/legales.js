$(document).ready(function(){
    var legalesPixel = document.createElement("div");
    legalesPixel.className = 'legales';
    legalesPixel.style = 'position: fixed;bottom: 0px;left: 0px;z-index: 99;';
    
    legalesPixel.innerHTML = `
    <style type="text/css">
    .legales__icon {
        width: 84.24px;
        height: 88.37px;
        display: none;
    }
    .legales__icon.active {
        display: block;
    }
    .legales__icon button {
        background-color: transparent;
        border: none;
        height: 100%;
        width: 100%;
        position: relative;
        background: linear-gradient(45deg, #000000 50%, transparent 50%);
        cursor: pointer;
        transition: width 0.4s 0.1s;
    }
    .legales__icon button:hover {
        background: linear-gradient(45deg, #333333 50%, transparent 50%);
    }
    .legales__icon button svg {
        position: absolute;
        bottom: 12px;
        left: 12px;
    }
    .legales__info {
        display: none;
    }
    .legales__info.active {
        display: block;
    }
    .legales__info--box {
        background: #000000;
        color: #ffffff;
        height: calc( 95vh - 72px );
        width: 80vw;
        overflow-y: scroll;
        -ms-overflow-style: none;
        /* Internet Explorer 10+ */
        scrollbar-width: none;
        /* Firefox */
        z-index: 101;
        position: relative;
    }
    .legales__info--box::-webkit-scrollbar {
        display: none;
        /* Safari and Chrome */
    }
    @media only screen and (min-width: 768px) {
        .legales__info--box {
        width: 530px;
        }
    }
    .legales__info--box--in {
        width: auto;
        height: auto;
        padding: 25px;
    }
    .legales__info--box--in .legal__close {
        text-align: end;
        margin-right: -15px;
    }
    .legales__info--box--in .legal__close button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 5px 20px;
    }
    .legales__info--box--in .legal__close button:hover svg {
        opacity: 0.6;
    }
    .legales__info--box--in .legal__close button svg {
        transition: width 0.4s 0.1s;
    }
    .legales__info--box--in .legal_description {
        margin-top: 30px;
        margin-bottom: 27px;
    }
    .legales__info--box--in hr {
        margin-bottom: 30px;
    }
    .legales__info .legal-overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
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
        transform: translateZ(0);
        opacity: 1;
    }

    .legal_button_p {
        position: relative;
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        background-color: transparent;
        border: 1px solid #1a1a1a;
        border-radius: 0px;
        outline-offset: 2px;
        transition-timing-function: cubic-bezier(0.75, 0.02, 0.5, 1);
        transition-duration: 250ms;
        transition-property: color, background-color, border-color;
        appearance: none;
        font-size: 14px;
        font-family: AudiType, sans-serif;
        font-stretch: 105%;
        line-height: 24px;
        -webkit-font-smoothing: antialiased;
        -webkit-box-pack: center;
        justify-content: center;
        min-width: 9em;
        padding-block: 0.9em;
        padding-inline: 2.5em;
        color: white;
        border-color: white;
        user-select: initial;
        margin-bottom: 22px;
    }
    .legal_button_p:hover {
        color: #d9d9d9;
        border-color: #d9d9d9;
    }

    .legal-p {
        font-weight: 400;
        font-style: normal;
        text-decoration: none;
        font-size: 12px;
        font-family: AudiType, sans-serif;
        font-stretch: 105%;
        line-height: 20px;
        -webkit-font-smoothing: antialiased;
    }
    .legal-p.sub {
        margin-top: 15px;
        margin-bottom: 25px;
    }

    .legal-title {
        font-weight: 400;
        font-style: normal;
        text-decoration: none;
        font-size: 16px;
        font-family: AudiType, sans-serif;
        font-stretch: 130%;
        line-height: 24px;
        -webkit-font-smoothing: antialiased;
    }
    </style>
    <div class="legales__icon active">
    <button onclick="displayContent();">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25" viewBox="0 0 32 32"><defs><clipPath id="clip-pathEng"><rect id="Rectángulo_2185" data-name="Rectángulo 2185" width="32" height="32" fill="#fff"/></clipPath></defs><g id="Grupo_8089" data-name="Grupo 8089" transform="translate(4.642 2.254)"><g id="Grupo_8094" data-name="Grupo 8094" transform="translate(-4.642 -2.254)" clip-path="url(#clip-pathEng)"><path id="Trazado_11873" data-name="Trazado 11873" d="M32,19.234V12.766H27.288a11.587,11.587,0,0,0-.986-2.443l3.352-3.352L25.029,2.346,21.677,5.7a13.242,13.242,0,0,0-2.443-.982V0H12.766V4.627a11.432,11.432,0,0,0-2.442.987L6.971,2.262,2.346,6.887,5.7,10.24a13.259,13.259,0,0,0-.982,2.442H0V19.15H4.627a11.482,11.482,0,0,0,.987,2.443L2.262,24.945,6.887,29.57l3.353-3.353a13.212,13.212,0,0,0,2.442.982V32H19.15V27.288a11.476,11.476,0,0,0,2.443-.986l3.352,3.352,4.625-4.625-3.353-3.352a13.242,13.242,0,0,0,.982-2.443Zm-5.531-.522a12.3,12.3,0,0,1-1.137,2.841l-.151.275,3.2,3.2-3.438,3.438-3.2-3.2-.275.15a10.817,10.817,0,0,1-2.833,1.135l-.326.076V31.16H13.522V26.548l-.318-.079a12.276,12.276,0,0,1-2.84-1.137l-.276-.151-3.2,3.2L3.449,24.945l3.2-3.2-.15-.275a10.763,10.763,0,0,1-1.136-2.834l-.076-.325H.84V13.522H5.368l.079-.318a12.288,12.288,0,0,1,1.137-2.841l.15-.275-3.2-3.2L6.971,3.449l3.2,3.2.275-.15A10.793,10.793,0,0,1,13.28,5.364l.326-.076V.84h4.787V5.368l.318.079a12.311,12.311,0,0,1,2.841,1.137l.275.15,3.2-3.2,3.438,3.438-3.2,3.2.15.275a10.788,10.788,0,0,1,1.135,2.833l.076.326H31.16v4.787H26.548ZM15.958,10.079a5.879,5.879,0,1,0,5.879,5.879,5.886,5.886,0,0,0-5.879-5.879m0,10.919A5.039,5.039,0,1,1,21,15.958,5.044,5.044,0,0,1,15.958,21" transform="translate(0 0)" fill="#fff"/></g></g></svg>
    </button>
    </div>
    <div class="legales__info ">
    <div class="legal-overlay" onclick="displayIcon();"></div>
    <div class="legales__info--box">
        <div class="legales__info--box--in">
        <div class="legal__close">
            <button onclick="displayIcon();">
            <svg xmlns="http://www.w3.org/2000/svg" width="13.975" height="13.973" viewBox="0 0 13.975 13.973"><path id="x" d="M18.521,6.344l-5.241,5.24L8.04,6.344,6.293,8.091l5.24,5.24-5.24,5.24L8.04,20.317l5.24-5.24,5.241,5.24,1.747-1.747-5.24-5.24,5.24-5.24Z" transform="translate(-6.293 -6.344)" fill="#fff"/></svg>
            </button>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="69" height="24" viewBox="0 0 65.172 22.845"><defs><style>.cls-1 {fill: #ffffff;}</style></defs><g id="cf1fb765e00684515d1fc1d6487baae4" transform="translate(0 -11.548)"><path id="Trazado_1125" class="cls-1" d="M28.393,159.644c4.735-3.219,9.437-3.225,14.152-.02,4.7-3.205,9.4-3.2,14.158.02a11.272,11.272,0,0,1,9.091-2.2,10.976,10.976,0,0,1,6.9,4.17A11.406,11.406,0,0,1,56.7,177.64c-4.722,3.219-9.423,3.239-14.158.027-4.688,3.205-9.4,3.212-14.145-.02a11.413,11.413,0,1,1,0-18Zm30.172,16.067a8.759,8.759,0,1,0,.007-14.125,11.5,11.5,0,0,1-.007,14.125ZM26.524,161.586a8.756,8.756,0,1,0,.007,14.118,11.444,11.444,0,0,1-2.427-7.043A11.3,11.3,0,0,1,26.524,161.586Zm3.8.007a11.466,11.466,0,0,1-.007,14.118,8.658,8.658,0,0,0,10.315-.02,11.343,11.343,0,0,1-2.434-7.043,11.219,11.219,0,0,1,2.441-7.063A8.657,8.657,0,0,0,30.328,161.592ZM44.44,175.7a8.66,8.66,0,0,0,10.281.033c-3.219-4.728-3.232-9.443,0-14.178a8.648,8.648,0,0,0-10.275.04A11.422,11.422,0,0,1,44.44,175.7Zm-1.9-1.9a8.555,8.555,0,0,0,0-10.275A8.616,8.616,0,0,0,42.538,173.8Zm14.112-10.3a8.657,8.657,0,0,0,.013,10.295A8.6,8.6,0,0,0,56.65,163.494ZM28.433,173.809a8.65,8.65,0,0,0-.007-10.308A8.628,8.628,0,0,0,28.433,173.809Z" transform="translate(-9.963 -145.677)"></path></g></svg>
        </div>
        <p class="legal_description legal-p">
            La marca Audi de México informa a los medios de comunicación, clientes, socios estratégicos y sociedad en general que el único canal oficial es el sitio web: www.audi.com.mx
            <br/>
            Audi de México te brinda la línea de atención telefónica 800 849 23 83, mediante la cual tendrás la oportunidad de recibir una respuesta a tus preguntas y dudas relacionadas con la marca.
            <br/>
            Audi reitera dicha información, debido a que se han detectado sitios de internet apócrifos que anuncian la venta de autos de la Marca.
            <br/>
            Audi hace un llamado a la sociedad a no caer en engaños o intentos de fraude que se publican en páginas ajenas a los sitios oficiales de la Marca en nuestro país.
        </p>
        <hr/>
        <div>
            <span class="legal-title">Cookies</span>
        </div>
        <p class="legal-p sub">
            El uso de cookies es necesario para la correcta funcionalidad de la página. Si se deshabilitan, es posible que nuestro sitio web no funcione de forma optima en tu dispositivo).
        </p>
        <div>
            <a class="legal_button_p" href="https://www.audi.com.mx/mx/web/es/tools/navigation/layer/cookies.html">Conoce más</a>
        </div>
        <hr/>
        <div>
            <span class="legal-title">Términos y condiciones</span>
        </div>
        <p class="legal-p sub">
            Al entrar y utilizar nuestra página, estas aceptando los términos y condiciones.
        </p>
        <div>
            <a class="legal_button_p" href="https://www.audi.com.mx/mx/web/es/tools/navigation/layer/imprint.html">Conoce más</a>
        </div>
        </div>
        </div>
    </div>`;

    $("body").append(legalesPixel);

    const exampleScriptLegales = getScriptLegalesContent(`
    <script>
    function displayContent(){$(".legales__icon").removeClass("active");$(".legales__info").addClass("active");}function displayIcon(){$(".legales__info").removeClass('active');$(".legales__icon").addClass("active");} 
    <\/script>
    `),
    s_Legales = document.createElement("script"),
    t_Legales = document.createTextNode(exampleScriptLegales);

    s_Legales.appendChild(t_Legales);

    document.getElementsByTagName("head")[0].appendChild(s_Legales);

    function getScriptLegalesContent(htmlStr) {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlStr;
        return tempDiv.innerText;
    }
});  