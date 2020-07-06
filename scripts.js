// Write your JavaScript code here.
// Remember to pay attention to page loading!
let buttonTakeOff = null;
let buttonLanding = null;
let buttonMissionAbort = null;
let buttonUp = null;
let buttonDown = null;
let buttonLeft = null;
let buttonRight = null;

function init () {
    buttonTakeOff = document.getElementById("takeoff");
    buttonLanding = document.getElementById("landing");
    buttonMissionAbort = document.getElementById("missionAbort");
    buttonUp = document.getElementById("up");
    buttonDown = document.getElementById("down");
    buttonLeft = document.getElementById("left");
    buttonRight = document.getElementById("right");

    buttonTakeOff.addEventListener("click", function(){
        let answer = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(answer === true){
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = "10,000";
            
        }
    });
    
}

window.onload = init;