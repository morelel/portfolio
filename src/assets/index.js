/*global $*/
$(document).ready(function(){
    
    var i = 0;
    var colors = ['bg1','bg2',"bg3"];
    console.log(colors.length);
    
    $('.mode-nuit').click(function(){
        $('body').css("background-color","rgb(40, 175, 148)");
        $('#portfolio').css("color","white");
        $('.star-hidden').css("border-color","white");
        $('.star-primary').css("border-color","white");
        $('#contact').css("color","white");
        if (i<colors.length){
           setInterval (function(){
                $('body').removeClass('bg1','bg2','bg3').addClass('bg'+(i++));
           }, 1000); 
        }
        else {
            stopInterval();
        }
    });
    
    function stopInterval(){
        clearInterval();
    }
    
    $('.mode-jour').click(function(){
        $('body').css("background-color","white");
        $('#portfolio').css("color","#333");
        $('.star-hidden').css("border-color","#333");
        $('.star-primary').css("border-color","#333");
        $('#contact').css("color","#333");
    });
});

/*
var i = 0 ;
        setInterval (function(){
            $('body').removeClass('bg1','bg2','bg3').addClass('bg'+(i++%4 + 1));
        }, 1000);
 
            $('#portfolio').css("color","white");
            $('.star-hidden').css("border-color","white");
            $('.star-primary').css("border-color","white");
            $('#contact').css("color","white");
*/
/*
var i =0;
    
    $('.mode-nuit').click(function(){
        var colors = ['bg1','bg2',"bg3"];
        console.log(colors.length);
        setInterval (function(){
           if (i<colors.length){
            document.body.style.backgroundColor = colors[1];
            i++;
            console.log(colors[i]);
            } 
            else {
            stopInterval();
            } 
        }, 1000);
        
    });
    
    function stopInterval(){
        clearInterval();
    }
*/
