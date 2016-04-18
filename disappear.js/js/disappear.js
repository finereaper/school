var disappear = {
    
    // object simple with fuction that be called to chang the opacity of a element.
    simple: function (id,value) {
      var  element = document.getElementById(id);
        element.style.opacity =  value; 
    },
    
    // object slow with fuction that be called to make a element disappear slow.
    slow: function (id) {
        var set = setInterval(function() {
        var element = document.getElementById(id);
        var opacity = window.getComputedStyle(element).opacity;
        element.style.opacity = opacity - .1;
            if(opacity == 0) {
                clearInterval(set);
                console.log(opacity);
            }
        },500);
    },
    
    // object fast with fuction that be called to make a element disappear fast.
    fast: function (id) {
        var set = setInterval(function() {
        var element = document.getElementById(id);
        var opacity = window.getComputedStyle(element).opacity;
        element.style.opacity = opacity - .1;
            if(opacity == 0) {
                clearInterval(set);
                console.log(opacity);
            }
        },100);
    },
    
    
    //object delayed with a function for when you want the div to disappear after couple seconds or minutes
    //First parameter is for the id of the div, second for the value that you want to subtract,third for the time you want to wait before the div disappears, fourth        how fast it will happen.
    delayed: function (id,value,timeout,interval) {
        setTimeout(function() {  
            var set = setInterval(function() {
            var element = document.getElementById(id);
            var opacity = window.getComputedStyle(element).opacity;
            element.style.opacity = opacity - value;
                if(opacity == 0) {
                    clearInterval(set);
                    console.log(opacity);
                }
            },interval);
        },timeout);
    },
    
    //ojbect custom with a function that you can give multiple parameters
    // such as how much you want to retract of the opacity and how much the interval is
    custom: function (id,value,interval) {
        setInterval(function() { 
            var set = setInterval(function() {
            var element = document.getElementById(id);
            var opacity = window.getComputedStyle(element).opacity;
            element.style.opacity = opacity - .1;
                if(opacity == 0) {
                    clearInterval(set);
                    console.log(opacity);
                }
            },100);
        },interval);
    },
    
}






