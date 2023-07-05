$(document).ready(function () {
  /** Menu Flotante **/
  var menuFlotante = document.createElement("div");
  menuFlotante.className = "cotainer_float_buttons";
  menuFlotante.style =
    "position: fixed; top: 150px; display: flex; flex-direction: column; align-items: flex-end; right: 27px; overflow: hidden; z-index: 99;";
  menuFlotante.innerHTML = `
  <div class="float_buttons">
  <style type="text/css">
    .cotainer_float_buttons {
      height: 305px;
    }
    @media only screen and (min-width: 768px) {
      .cotainer_float_buttons {
        height: 405px;
      }
    }
    .float_buttons {
      display: none;
      flex-direction: column;
      align-items: flex-end;
      right: 20px;
      overflow: hidden;
      z-index: 99;
    }
    .fbutton {
      margin-top: auto;
      border: none;
    }
    .float_buttons .fbutton,
    .fbutton {
      transition: width 0.4s 0.1s;
      width: 38px !important;
      background: #000000 !important;
      cursor: pointer !important;
      position: relative;
      height: 38px !important;
      border-radius: 40px !important;
      margin-bottom: 15px !important;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white !important;
      text-decoration: none !important;
    }
    .float_buttons .fbutton.first-fbutton {
      margin-top: 40px;
    }
    @media only screen and (min-width: 768px) {
      .float_buttons .fbutton.first-fbutton {
        margin-top: 100px;
      }
    }
    @media only screen and (min-width: 768px) {
      .float_buttons .fbutton,
      .fbutton {
        width: 46px !important;
        height: 46px !important;
      }
    }
    .float_buttons .fbutton.m-d-none {
      /*@media all and (orientation:portrait) {
              display: flex;
              }
              @media all and (orientation:landscape) {
              display: none;
              }*/
      display: none;
    }
    @media only screen and (min-width: 768px) {
      .float_buttons .fbutton.m-d-none {
        display: flex;
      }
    }
    .float_buttons .fbutton.m-dM-none {
      display: flex;
    }
    @media all and (orientation: portrait) {
      .float_buttons .fbutton.m-dM-none--1 {
        display: flex;
      }
    }
    @media all and (orientation: landscape) {
      .float_buttons .fbutton.m-dM-none--1 {
        display: flex;
      }
    }
    @media only screen and (min-width: 768px) {
      .float_buttons .fbutton.m-dM-none--1 {
        display: none;
      }
    }
    @media all and (orientation: portrait) {
      .float_buttons .fbutton.m-dM-none--2 {
        display: flex;
      }
    }
    @media all and (orientation: landscape) {
      .float_buttons .fbutton.m-dM-none--2 {
        display: none;
      }
    }
    @media only screen and (min-width: 768px) {
      .float_buttons .fbutton.m-dM-none--2 {
        display: none;
      }
    }
    .float_buttons .fbutton .fbutton--span {
      width: 200px;
      font-weight: bold;
      font-family: AudiType;
      font-size: 14px;
      color: #ffffff;
      line-height: 38px;
      opacity: 0;
      transition: opacity 0.4s 0.1s ease;
      position: absolute;
      left: 48px;
    }
    .float_buttons .fbutton .fbutton--svg {
      display: block;
      max-width: 100%;
      max-height: 100%;
      position: absolute;
      left: 9px;
    }
    @media only screen and (min-width: 768px) {
      .float_buttons .fbutton .fbutton--svg {
        left: 8.5px;
      }
    }
    .float_buttons .fbutton .fbutton--svg svg,
    .fbutton .fbutton--svg svg {
      fill: #ffffff;
      width: 21px;
    }
    @media only screen and (min-width: 768px) {
      .float_buttons .fbutton .fbutton--svg svg,
      .fbutton .fbutton--svg svg {
        width: 29px;
      }
    }
    .float_buttons .fbutton:hover {
      width: 242px !important;
    }
    .float_buttons .fbutton:hover .fbutton--span {
      opacity: 1;
    }
    .float_buttons .fbutton.active {
      width: 242px !important;
    }
    .float_buttons .fbutton.active .fbutton--span {
      opacity: 1;
    }

    .animate_svg {
      width: 21px;
      height: 21px;
    }
    @media only screen and (min-width: 768px) {
      .animate_svg {
        width: 29px;
        height: 29px;
      }
    }

    .line{
      /* transform="translate(5.468px, 17.549px)" */
      transform: translate(5.468px, 17.549px);
    }
    .animate_svg:hover .line1 {
      transform: translate(5.468px, 10px);
    }

    .animate_svg.active:hover svg {
      transition: all 0.5s;
      transform: rotate(90deg);
    }

    .animate_svg.active .line1 {
      animation: line1-active 0.3s forwards;
    }

    @keyframes line1-active {
      0% {
        transform: translate(5.468px, 10px);
      }
      50% {
        transform: translate(5.468px, 33px);
      }
      100% {
        transform: rotate(45deg) translate(20px, -1px);
      }
    }

    .animate_svg.active .line2 {
      opacity: 0;
    }

    .animate_svg:hover .line3 {
      transform: translate(5.468px, 24px);
    }

    .animate_svg.active .line3 {
      animation: line3-active 0.3s forwards;
    }

    @keyframes line3-active {
      0% {
        transform: translate(5.468px, 24px);
      }
      50% {
        transform: translate(5.468px, 0px);
      }
      100% {
        transform: rotate(-45deg) translate(-30px, 16px);
      }
    }

    .line {
      transition: transform 0.3s, opacity 0.3s;
    }
  </style>

  <a
    class="fbutton first-fbutton m-dM-none--1"
    onClick="function addBF(btnItem,event){if(btnItem.href===''){event.preventDefault();}else{window.open('https://www.appsaudi.com.mx/formsSalesforce/audinuevo.aspx?utm_source=audi&utm_medium=referral&utm_campaign=click_menu_flotante','_blank')}btnItem.classList.add('active');btnItem.setAttribute('href','https://www.appsaudi.com.mx/formsSalesforce/audinuevo.aspx?utm_source=audi&utm_medium=referral&utm_campaign=click_menu_flotante');return false;} addBF(this,event);return false;"
    target="_blank"
  >
    <span class="fbutton--span">Quiero un Audi nuevo</span>
    <span class="fbutton--svg">
      <svg viewBox="0 0 48 48">
        <path
          d="M2.5,23 L2.5,37 C2.5,37.8284271 3.17157288,38.5 4,38.5 L9,38.5 C9.82842712,38.5 10.5,37.8284271 10.5,37 L10.5,35.5 L10.5,35.5 L37.5,35.5 L37.5,37 C37.5,37.8284271 38.1715729,38.5 39,38.5 L44,38.5 C44.8284271,38.5 45.5,37.8284271 45.5,37 L45.5,23 L45.5,23 L41,18.5 C40.0666656,16.6666667 39.2333323,15.1666667 38.5,14 C37.7666677,12.8333333 36.7666677,11.5 35.5,10 C31.7608696,9.66666667 27.9347826,9.5 24.0217391,9.5 C20.1086957,9.5 16.2681159,9.66666667 12.5,10 C11.2333336,11.5 10.2333336,12.8333333 9.5,14 C8.76666641,15.1666667 7.93333308,16.6666667 7,18.5 L2.5,23 Z M15,27 L17,24.5 L31,24.5 L33,27 C31.6666667,30.6666667 30.6666667,32.5 30,32.5 C29,32.5 19,32.5 18,32.5 C17.3333333,32.5 16.3333333,30.6666667 15,27 Z M6.75,18.5 L24,18.5 L41.25,18.5 M43.5,23.5749239 C43.5,24.5459384 43.4166667,25.2053587 43.25,25.5531847 C43,26.0749239 42.5,26.5749239 42,26.5749239 L40,26.5749239 C39.5,26.5749239 35.75,25.5749239 35.25,25.0749239 C34.9166667,24.7415905 34.6666667,24.4082572 34.5,24.0749239 C36.2683726,23.841489 37.7683726,23.6748224 39,23.5749239 C40.2316274,23.4750254 41.7316274,23.4750254 43.5,23.5749239 Z M4.5,23.5749239 C6.26837257,23.4750254 7.76837257,23.4750254 9,23.5749239 C10.2316274,23.6748224 11.7316274,23.841489 13.5,24.0749239 C13.3333333,24.4082572 13.0833333,24.7415905 12.75,25.0749239 C12.25,25.5749239 8.5,26.5749239 8,26.5749239 C7.5,26.5749239 6.5,26.5749239 6,26.5749239 C5.5,26.5749239 5,26.0749239 4.75,25.5531847 C4.58333333,25.2053587 4.5,24.5459384 4.5,23.5749239 Z"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </span>
  </a>
  <a
    class="fbutton m-dM-none--1"
    onClick="function addBF(btnItem,event){if(btnItem.href===''){event.preventDefault();}else{location.href='https://www.audi.com.mx/mx/web/es/experiencia/audi-promociones.html?csref=dsp:icdc:Bc:menu-flotante:c:audi:audi.com.mx:mt~o:id~promociones'}btnItem.classList.add('active');btnItem.setAttribute('href','https://www.audi.com.mx/mx/web/es/experiencia/audi-promociones.html?csref=dsp:icdc:Bc:menu-flotante:c:audi:audi.com.mx:mt~o:id~promociones');return false;} addBF(this,event);return false;"
  >
    <span class="fbutton--svg">
      <svg viewBox="0 0 48 48">
        <path
          d="M12.5,18.5 L28.5,34.5 L12.5,18.5 Z M18.5,12.5 L34.5,28.5 L18.5,12.5 Z M26.5,45.5 L45.5,26.5 L21.5,2.5 L2.5,2.5 L2.5,21.5 L26.5,45.5 Z M9,11.5 C10.3807119,11.5 11.5,10.3807119 11.5,9 C11.5,7.61928813 10.3807119,6.5 9,6.5 C7.61928813,6.5 6.5,7.61928813 6.5,9 C6.5,10.3807119 7.61928813,11.5 9,11.5 Z"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </span>
    <span class="fbutton--span">Promociones</span>
  </a>
  <a
    class="fbutton m-dM-none--2"
    onClick="function addBF(btnItem,event){if(btnItem.href===''){event.preventDefault();}else{location.href='https://www.audi.com.mx/mx/web/es/servicios-al-cliente/postventa.html?csref=dsp:icdc:Bc:menu-flotante:c:audi:audi.com.mx:mt~o:id~postventa'}btnItem.classList.add('active');btnItem.setAttribute('href','https://www.audi.com.mx/mx/web/es/servicios-al-cliente/postventa.html?csref=dsp:icdc:Bc:menu-flotante:c:audi:audi.com.mx:mt~o:id~postventa');return false;} addBF(this,event);return false;"
  >
    <span class="fbutton--svg">
      <svg viewBox="0 0 48 48">
        <path
          d="M39.5,29 L39.5,26.5 L30.5,26.5 L30.5,29 L31.5,31 L31.5,36.5 L30.5,38.5 L30.5,43.5 C30.5,44.6 31.4,45.5 32.5,45.5 L37.5,45.5 C38.6,45.5 39.5,44.6 39.5,43.5 L39.5,38.5 L38.5,36.5 L38.5,31 L39.5,29 Z M36.4,26.4 L36.5,14.5 L39.5,11.5 L39.5,7 L37,2.5 L33,2.5 L30.5,7 L30.5,11.5 L33.5,14.5 L33.5,26.4 M12.5,42.5 L12.5,17.5 L7.5,12.5 L7.5,6.5 L11.5,2.5 L12.5,3.5 L12.5,7.5 L13.5,8.5 L18.5,8.5 L19.5,7.5 L19.5,3.5 L20.5,2.5 L24.5,6.5 L24.5,12.5 L19.5,17.5 L19.5,42.5 C19.5,44.2 18.2,45.5 16.5,45.5 L15.5,45.5 C13.8,45.5 12.5,44.2 12.5,42.5 Z"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </span>
    <span class="fbutton--span">Audi Postventa</span>
  </a>
  <a
    class="fbutton m-dM-none--2"
    onClick="function addBF(btnItem,event){if(btnItem.href===''){event.preventDefault();}else{location.href='https://www.audi.com.mx/mx/web/es/certified-plus/certified.html?csref=dsp:icdc:Bc:menu-flotante:c:audi:audi.com.mx:mt~o:id~certifiedPlus'}btnItem.classList.add('active');btnItem.setAttribute('href','https://www.audi.com.mx/mx/web/es/certified-plus/certified.html?csref=dsp:icdc:Bc:menu-flotante:c:audi:audi.com.mx:mt~o:id~certifiedPlus');return false;} addBF(this,event);return false;"
  >
    <span class="fbutton--svg">
      <svg viewBox="0 0 48 48">
        <path
          d="M31,36.5 L37.5,36.5 L37.5,38 C37.5,38.8284271 38.1715729,39.5 39,39.5 L44,39.5 C44.8284271,39.5 45.5,38.8284271 45.5,38 L45.5,24 L41,19.5 C40.0666656,17.6666667 39.2333323,16.1666667 38.5,15 C37.7666677,13.8333333 36.7666677,12.5 35.5,11 C32.5788574,10.778973 30.4900244,10.5540618 29,10.5 M2.5,25 L2.5,38 C2.5,38.8284271 3.17157288,39.5 4,39.5 L9,39.5 C9.82842712,39.5 10.5,38.8284271 10.5,38 L10.5,36.5 L24,36.5 M22,33.5 C20.0387231,33.5 18.3756149,33.5 18,33.5 C17.4324916,33.5 16.550607,32.1570426 15.5,29.5 M24,25.5 L31,25.5 L33,28 C31.6666667,31.6666667 30.6666667,33.5 30,33.5 C29.8514669,33.5 29.4866654,33.5 29,33.5 M28,19.5 L41.25,19.5 M22,10.5 C19.8290365,10.5302806 16.7403348,10.7057765 12.5,11 C11.2333336,12.5 10.2333336,13.8333333 9.5,15 C8.76666641,16.1666667 7.93333308,17.6666667 7,19.5 L21,19.5 M43.5,24.5749239 C43.5,25.5459384 43.4166667,26.2053587 43.25,26.5531847 C43,27.0749239 42.5,27.5749239 42,27.5749239 L40,27.5749239 C39.5,27.5749239 35.75,26.5749239 35.25,26.0749239 C34.9166667,25.7415905 34.6666667,25.4082572 34.5,25.0749239 C36.2683726,24.841489 37.7683726,24.6748224 39,24.5749239 C40.2316274,24.4750254 41.7316274,24.4750254 43.5,24.5749239 Z M8,27.5749239 C7.5,27.5749239 6.5,27.5749239 6,27.5749239 C5.5,27.5749239 5,27.0749239 4.75,26.5531847 C4.68562168,26.41883 4.63367706,26.237984 4.59416615,26.0106467 M32.2,44.2 L20,24.8 L32.2,44.2 Z M25.5,14.4 C25.5,21.7 20.2,26.5 13.6,26.5 C7,26.4 1.6,21.1 1.5,14.4 C1.6,7.8 7,2.5 13.6,2.5 C20.2,2.5 25.5,7.8 25.5,14.4 C25.5,14.4 25.5,14.4 25.5,14.4 Z"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </span>
    <span class="fbutton--span">Audi certified:<i>plus</i></span>
  </a>

  <a
    class="fbutton first-fbutton m-d-none"
    href="https://www.appsaudi.com.mx/formsSalesforce/audinuevo.aspx?utm_source=audi&utm_medium=referral&utm_campaign=click_menu_flotante"
    target="_blank"
  >
    <span class="fbutton--span">Quiero un Audi nuevo</span>
    <span class="fbutton--svg">
      <svg viewBox="0 0 48 48">
        <path
          d="M2.5,23 L2.5,37 C2.5,37.8284271 3.17157288,38.5 4,38.5 L9,38.5 C9.82842712,38.5 10.5,37.8284271 10.5,37 L10.5,35.5 L10.5,35.5 L37.5,35.5 L37.5,37 C37.5,37.8284271 38.1715729,38.5 39,38.5 L44,38.5 C44.8284271,38.5 45.5,37.8284271 45.5,37 L45.5,23 L45.5,23 L41,18.5 C40.0666656,16.6666667 39.2333323,15.1666667 38.5,14 C37.7666677,12.8333333 36.7666677,11.5 35.5,10 C31.7608696,9.66666667 27.9347826,9.5 24.0217391,9.5 C20.1086957,9.5 16.2681159,9.66666667 12.5,10 C11.2333336,11.5 10.2333336,12.8333333 9.5,14 C8.76666641,15.1666667 7.93333308,16.6666667 7,18.5 L2.5,23 Z M15,27 L17,24.5 L31,24.5 L33,27 C31.6666667,30.6666667 30.6666667,32.5 30,32.5 C29,32.5 19,32.5 18,32.5 C17.3333333,32.5 16.3333333,30.6666667 15,27 Z M6.75,18.5 L24,18.5 L41.25,18.5 M43.5,23.5749239 C43.5,24.5459384 43.4166667,25.2053587 43.25,25.5531847 C43,26.0749239 42.5,26.5749239 42,26.5749239 L40,26.5749239 C39.5,26.5749239 35.75,25.5749239 35.25,25.0749239 C34.9166667,24.7415905 34.6666667,24.4082572 34.5,24.0749239 C36.2683726,23.841489 37.7683726,23.6748224 39,23.5749239 C40.2316274,23.4750254 41.7316274,23.4750254 43.5,23.5749239 Z M4.5,23.5749239 C6.26837257,23.4750254 7.76837257,23.4750254 9,23.5749239 C10.2316274,23.6748224 11.7316274,23.841489 13.5,24.0749239 C13.3333333,24.4082572 13.0833333,24.7415905 12.75,25.0749239 C12.25,25.5749239 8.5,26.5749239 8,26.5749239 C7.5,26.5749239 6.5,26.5749239 6,26.5749239 C5.5,26.5749239 5,26.0749239 4.75,25.5531847 C4.58333333,25.2053587 4.5,24.5459384 4.5,23.5749239 Z"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </span>
  </a>
  <a
    class="fbutton m-d-none"
    href="https://www.audi.com.mx/mx/web/es/experiencia/audi-promociones.html?csref=dsp:icdc:Bc:menu-flotante:c:audi:audi.com.mx:mt~o:id~promociones"
  >
    <span class="fbutton--svg">
      <svg viewBox="0 0 48 48">
        <path
          d="M12.5,18.5 L28.5,34.5 L12.5,18.5 Z M18.5,12.5 L34.5,28.5 L18.5,12.5 Z M26.5,45.5 L45.5,26.5 L21.5,2.5 L2.5,2.5 L2.5,21.5 L26.5,45.5 Z M9,11.5 C10.3807119,11.5 11.5,10.3807119 11.5,9 C11.5,7.61928813 10.3807119,6.5 9,6.5 C7.61928813,6.5 6.5,7.61928813 6.5,9 C6.5,10.3807119 7.61928813,11.5 9,11.5 Z"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </span>
    <span class="fbutton--span">Promociones</span>
  </a>
  <a
    class="fbutton m-d-none"
    href="https://www.audi.com.mx/mx/web/es/servicios-al-cliente/postventa.html?csref=dsp:icdc:Bc:menu-flotante:c:audi:audi.com.mx:mt~o:id~postventa"
  >
    <span class="fbutton--svg">
      <svg viewBox="0 0 48 48">
        <path
          d="M39.5,29 L39.5,26.5 L30.5,26.5 L30.5,29 L31.5,31 L31.5,36.5 L30.5,38.5 L30.5,43.5 C30.5,44.6 31.4,45.5 32.5,45.5 L37.5,45.5 C38.6,45.5 39.5,44.6 39.5,43.5 L39.5,38.5 L38.5,36.5 L38.5,31 L39.5,29 Z M36.4,26.4 L36.5,14.5 L39.5,11.5 L39.5,7 L37,2.5 L33,2.5 L30.5,7 L30.5,11.5 L33.5,14.5 L33.5,26.4 M12.5,42.5 L12.5,17.5 L7.5,12.5 L7.5,6.5 L11.5,2.5 L12.5,3.5 L12.5,7.5 L13.5,8.5 L18.5,8.5 L19.5,7.5 L19.5,3.5 L20.5,2.5 L24.5,6.5 L24.5,12.5 L19.5,17.5 L19.5,42.5 C19.5,44.2 18.2,45.5 16.5,45.5 L15.5,45.5 C13.8,45.5 12.5,44.2 12.5,42.5 Z"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </span>
    <span class="fbutton--span">Audi Postventa</span>
  </a>
  <a
    class="fbutton m-d-none"
    href="https://www.audi.com.mx/mx/web/es/certified-plus/certified.html?csref=dsp:icdc:Bc:menu-flotante:c:audi:audi.com.mx:mt~o:id~certifiedPlus"
  >
    <span class="fbutton--svg">
      <svg viewBox="0 0 48 48">
        <path
          d="M31,36.5 L37.5,36.5 L37.5,38 C37.5,38.8284271 38.1715729,39.5 39,39.5 L44,39.5 C44.8284271,39.5 45.5,38.8284271 45.5,38 L45.5,24 L41,19.5 C40.0666656,17.6666667 39.2333323,16.1666667 38.5,15 C37.7666677,13.8333333 36.7666677,12.5 35.5,11 C32.5788574,10.778973 30.4900244,10.5540618 29,10.5 M2.5,25 L2.5,38 C2.5,38.8284271 3.17157288,39.5 4,39.5 L9,39.5 C9.82842712,39.5 10.5,38.8284271 10.5,38 L10.5,36.5 L24,36.5 M22,33.5 C20.0387231,33.5 18.3756149,33.5 18,33.5 C17.4324916,33.5 16.550607,32.1570426 15.5,29.5 M24,25.5 L31,25.5 L33,28 C31.6666667,31.6666667 30.6666667,33.5 30,33.5 C29.8514669,33.5 29.4866654,33.5 29,33.5 M28,19.5 L41.25,19.5 M22,10.5 C19.8290365,10.5302806 16.7403348,10.7057765 12.5,11 C11.2333336,12.5 10.2333336,13.8333333 9.5,15 C8.76666641,16.1666667 7.93333308,17.6666667 7,19.5 L21,19.5 M43.5,24.5749239 C43.5,25.5459384 43.4166667,26.2053587 43.25,26.5531847 C43,27.0749239 42.5,27.5749239 42,27.5749239 L40,27.5749239 C39.5,27.5749239 35.75,26.5749239 35.25,26.0749239 C34.9166667,25.7415905 34.6666667,25.4082572 34.5,25.0749239 C36.2683726,24.841489 37.7683726,24.6748224 39,24.5749239 C40.2316274,24.4750254 41.7316274,24.4750254 43.5,24.5749239 Z M8,27.5749239 C7.5,27.5749239 6.5,27.5749239 6,27.5749239 C5.5,27.5749239 5,27.0749239 4.75,26.5531847 C4.68562168,26.41883 4.63367706,26.237984 4.59416615,26.0106467 M32.2,44.2 L20,24.8 L32.2,44.2 Z M25.5,14.4 C25.5,21.7 20.2,26.5 13.6,26.5 C7,26.4 1.6,21.1 1.5,14.4 C1.6,7.8 7,2.5 13.6,2.5 C20.2,2.5 25.5,7.8 25.5,14.4 C25.5,14.4 25.5,14.4 25.5,14.4 Z"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </span>
    <span class="fbutton--span">Audi certified:<i>plus</i></span>
  </a>
</div>
<button id="toggleButton" class="fbutton">
  <span class="fbutton--svg">
    <div class="animate_svg">
      <svg viewBox="0 0 70 70">
        <path
          class="line line1"
          d="M0,2.685H59.064V0H0Z"
        ></path>
        <path
          class="line line2"
          d="M0,18.793H59.064V16.108H0ZM0"
        ></path>
        <path
          class="line line3"
          d="M0,34.9H59.064V32.217H0ZM0"
        ></path>
      </svg>
    </div>
  </span>
</button>`;

  $("body").append(menuFlotante);

  var button = document.getElementById("toggleButton");
  var list = document.querySelector(".float_buttons");
  var noShowUrls = 'https://www.audi.com.mx/mx/web/es/certified-plus';
  var url = window.location.href;
  var subcadena2 = url.substring(0, noShowUrls.length);
  
  list.style.display = "none";
  if (subcadena2 === noShowUrls) button.style.display = "none";

  button.addEventListener("click", function () {
    var menuIcon = document.querySelector(".animate_svg");
    menuIcon.classList.toggle("active");

    if (list.style.display === "none") {
      list.style.display = "flex";
    } else {
      list.style.display = "none";
    }
  });
});
