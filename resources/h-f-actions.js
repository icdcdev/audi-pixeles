/**
 * HEADER - ACTIONS
 */
function cerrarHeader() {
    resetOptions(false);
    resetLineOption();
}
function activeFondoOscuro() {
    // FONDO OSCURO
    var darkBgr = document.getElementById("layerM");
    darkBgr.classList.contains('active') ? darkBgr.classList.remove('active') : darkBgr.classList.add('active');
}
function RemoveOptionActive(opt_Link, opt_Module, isSubmenuClick) {
    opt_Link.classList.remove('active');
    opt_Module.classList.remove('active');
    resetOptions(isSubmenuClick);
    resetLineOption();
}
function AddOptionActive(opt_Link, opt_Module, option) {
    resetOptions(false);
    openMenuClass();
    opt_Link.classList.add('active');
    opt_Module.classList.add('active');
    activeFondoOscuro();
    addLineOption(option);

    var body = document.body;
    body.classList.add('h-active');
}
function lineAddStyles(styLeft, styOpa, styWidth) {
    var bLineIt = document.getElementById("bLineItem");
    bLineIt.style.left = styLeft;
    bLineIt.style.opacity = styOpa;
    bLineIt.style.width = styWidth;
}
function resetLineOption() {
    lineAddStyles("0px", "0", "0px");
}
function addLineOption(option) {
    var bLineIt = document.getElementById("bLineItem");
    if (option === 2) {
        lineAddStyles("367px", "1", "90px");
    } else if (option === 3) {
        lineAddStyles("481px", "1", "145px");
    } else if (option === 4) {
        lineAddStyles("651px", "1", "150px");
    } else if (option === 5) {
        lineAddStyles("825px", "1", "71px");
    }
}
function openSubmenuHeader(optionMenu, isSubmenuClick) {
    // Module 3
    var module3 = document.getElementById("h-module-3");//module3
    module3.classList.contains('sub-active') ? module3.classList.remove('sub-active') : module3.classList.add('sub-active');

    if (optionMenu === 2) {
        var optionM2_link = document.getElementById("option_2-link");
        var optionM2_module = document.getElementById("option_2-module");

        optionM2_link.classList.contains('active') && optionM2_module.classList.contains('active') ? RemoveOptionActive(optionM2_link, optionM2_module, isSubmenuClick) : AddOptionActive(optionM2_link, optionM2_module, 2);
    } else if (optionMenu === 3) {
        var optionM3_link = document.getElementById("option_3-link");
        var optionM3_module = document.getElementById("option_3-module");

        optionM3_link.classList.contains('active') && optionM3_module.classList.contains('active') ? RemoveOptionActive(optionM3_link, optionM3_module, isSubmenuClick) : AddOptionActive(optionM3_link, optionM3_module, 3);
    } else if (optionMenu === 4) {
        var optionM4_link = document.getElementById("option_4-link");
        var optionM4_module = document.getElementById("option_4-module");

        optionM4_link.classList.contains('active') && optionM4_module.classList.contains('active') ? RemoveOptionActive(optionM4_link, optionM4_module, isSubmenuClick) : AddOptionActive(optionM4_link, optionM4_module, 4);
    } else if (optionMenu === 5) {
        var optionM5_link = document.getElementById("option_5-link");
        var optionM5_module = document.getElementById("option_5-module");

        optionM5_link.classList.contains('active') && optionM5_module.classList.contains('active') ? RemoveOptionActive(optionM5_link, optionM5_module, isSubmenuClick) : AddOptionActive(optionM5_link, optionM5_module, 5);
    }
}
function openMenuMobile() {
    var module3 = document.getElementById("h-module-3");//module3
    module3.classList.contains('sub-active') && module3.classList.remove('sub-active');

    resetOptions(true);
    openMenuClass();

    var body = document.body;
    body.classList.contains('h-active') ? body.classList.remove('h-active') : body.classList.add('h-active');
}

function openMenuClass() {
    // DESPLIEGA MENU EN MOVIL
    var menuMbl1 = document.getElementById("h-module-1");//module1
    var menuMbl2 = document.getElementById("h-module-2-icon1");//module2 - icon 1
    var menuMbl3 = document.getElementById("h-module-2-icon2");//module2 - icon 2
    var menuMbl4 = document.getElementById("h-module-2-icon3");//module2 - icon 3
    var menuMbl5 = document.getElementById("h-module-2-icon4");//module2 - icon 4
    var menuMbl6 = document.getElementById("h-module-3");//module3
    var menuMbl7 = document.getElementById("h-module-3-nav");//module3 - nav

    menuMbl1.classList.contains('active') ? menuMbl1.classList.remove('active') : menuMbl1.classList.add('active');
    menuMbl2.classList.contains('active') ? menuMbl2.classList.remove('active') : menuMbl2.classList.add('active');
    menuMbl3.classList.contains('active') ? menuMbl3.classList.remove('active') : menuMbl3.classList.add('active');
    menuMbl4.classList.contains('active') ? menuMbl4.classList.remove('active') : menuMbl4.classList.add('active');
    menuMbl5.classList.contains('active') ? menuMbl5.classList.remove('active') : menuMbl5.classList.add('active');
    menuMbl6.classList.contains('active') ? menuMbl6.classList.remove('active') : menuMbl6.classList.add('active');
    menuMbl7.classList.contains('active') ? menuMbl7.classList.remove('active') : menuMbl7.classList.add('active');
}

function resetOptions(isSubmenuClick) {
    // FONDO OSCURO
    var darkBgr = document.getElementById("layerM");
    darkBgr.classList.contains('active') && darkBgr.classList.remove('active');

    var optionM2_link = document.getElementById("option_2-link");
    var optionM2_module = document.getElementById("option_2-module");
    var optionM3_link = document.getElementById("option_3-link");
    var optionM3_module = document.getElementById("option_3-module");
    var optionM4_link = document.getElementById("option_4-link");
    var optionM4_module = document.getElementById("option_4-module");
    var optionM5_link = document.getElementById("option_5-link");
    var optionM5_module = document.getElementById("option_5-module");

    optionM2_link.classList.contains('active') && optionM2_link.classList.remove('active');
    optionM2_module.classList.contains('active') && optionM2_module.classList.remove('active');
    optionM3_link.classList.contains('active') && optionM3_link.classList.remove('active');
    optionM3_module.classList.contains('active') && optionM3_module.classList.remove('active');
    optionM4_link.classList.contains('active') && optionM4_link.classList.remove('active');
    optionM4_module.classList.contains('active') && optionM4_module.classList.remove('active');
    optionM5_link.classList.contains('active') && optionM5_link.classList.remove('active');
    optionM5_module.classList.contains('active') && optionM5_module.classList.remove('active');

    if (!isSubmenuClick) {
        var body = document.body;
        body.classList.contains('h-active') && body.classList.remove('h-active');

        var menuMbl1 = document.getElementById("h-module-1");//module1
        var menuMbl2 = document.getElementById("h-module-2-icon1");//module2 - icon 1
        var menuMbl3 = document.getElementById("h-module-2-icon2");//module2 - icon 2
        var menuMbl4 = document.getElementById("h-module-2-icon3");//module2 - icon 3
        var menuMbl5 = document.getElementById("h-module-2-icon4");//module2 - icon 4
        var menuMbl6 = document.getElementById("h-module-3");//module3
        var menuMbl7 = document.getElementById("h-module-3-nav");//module3 - nav

        menuMbl1.classList.contains('active') && menuMbl1.classList.remove('active');
        menuMbl2.classList.contains('active') && menuMbl2.classList.remove('active');
        menuMbl3.classList.contains('active') && menuMbl3.classList.remove('active');
        menuMbl4.classList.contains('active') && menuMbl4.classList.remove('active');
        menuMbl5.classList.contains('active') && menuMbl5.classList.remove('active');
        menuMbl6.classList.contains('active') && menuMbl6.classList.remove('active');
        menuMbl7.classList.contains('active') && menuMbl7.classList.remove('active');

        var module3 = document.getElementById("h-module-3");//module3
        module3.classList.contains('sub-active') && module3.classList.remove('sub-active');
    }
}






/**
 * FOOTER - ACTIONS
 */

function goToTop() {
    window.scrollTo(0, 0)
}
function openSubmenuFooter(linkRediretUrl) {
    if (window.innerWidth > 768) {
        window.location.href = linkRediretUrl;
    } else {
        //alert("Hola: " + window.innerWidth);
        event.preventDefault();
        if (event.currentTarget.parentNode.classList.contains('active')) {
            event.currentTarget.parentNode.classList.remove('active');
        } else {
            event.currentTarget.parentNode.classList.add('active');
        }
    }
}