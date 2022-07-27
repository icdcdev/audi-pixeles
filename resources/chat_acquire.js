((function(){
    var load=function(){
        var script="https://s.acquire.io/a-d5b89/init.js?full";
        var x=document.createElement('script');
        x.src=script;x.async=true;
        var sx=document.getElementsByTagName('script')[0];
        sx.parentNode.insertBefore(x, sx);
    };

    if(document.readyState === "complete")

        load();

    else if (window.addEventListener) 

        window.addEventListener('load',load,false);

    else if (window.attachEvent) {

        window.attachEvent("onload", load);

    }

})());