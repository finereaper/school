function init() {
    disappear.simple("simple",.5);
    disappear.slow("slow");
    disappear.fast("fast");
    disappear.custom("custom",.1,5000);
    disappear.delayed("delayed",.1,10000,100);
    disappear.hide("hide");
    setTimeout(function() {
    disappear.show("hide");
    },5000)
    
}

window.onload = init;