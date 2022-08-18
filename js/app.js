var secondsPointer = document.getElementById('seconds').style;
var minutesPointer = document.getElementById('minutes').style;
var hoursPointer = document.getElementById('hours').style;

var clockColor = document.getElementById('watch').style;
var pointersColors = document.getElementsByClassName('pointer');


function getHours(){
    var today = new Date();
    var hours = today.getHours();

    if (hours == 0){
            hoursPointer.transition = "transform 0s cubic-bezier(0.4, 2.08, 0.6, 0.27)";
    }else {
            hoursPointer.transition = "transform 0.2s cubic-bezier(0.4, 2.08, 0.6, 0.27)";
    }

    hours = ((hours / 12) * 360) + 90;
    document.getElementById("hours").style.transform = "rotateZ("+ hours + "deg)";


}



function getMinutes(){
    var today = new Date();
    var minutes = today.getMinutes();

        if (minutes == 0){
                minutesPointer.transition = "transform 0s cubic-bezier(0.4, 2.08, 0.6, 0.27)";
        }else {
                minutesPointer.transition = "transform 0.2s cubic-bezier(0.4, 2.08, 0.6, 0.27)";
        }

    minutes = ((minutes / 60) * 360) + 90;
    document.getElementById("minutes").style.transform = "rotateZ("+ minutes + "deg)";

    //zmiana kolorów 

    clockColor.border = "solid " + '#' + Math.random().toString(16).slice(2, 8).toUpperCase() + " 32px";
    document.getElementsByTagName('body')[0].style.background = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();

    for(var i = 0; i < pointersColors.length; i++){
        pointersColors[i].style.background = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
    }


}



function getSeconds(){
    var today = new Date();
    var seconds = today.getSeconds();
        
        if (seconds == 0){
                secondsPointer.transition = "transform 0s cubic-bezier(0.4, 2.08, 0.6, 0.27)";
        }else {
                secondsPointer.transition = "transform 0.2s cubic-bezier(0.4, 2.08, 0.6, 0.27)";
        }
        seconds = ((seconds / 60) * 360) + 90;
        document.getElementById("seconds").style.transform = "rotateZ("+ seconds + "deg)";


        getMinutes();
        getHours()

}


setInterval(getSeconds, 1000);