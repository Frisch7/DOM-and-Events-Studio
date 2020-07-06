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
    buttonLanding.addEventListener("click",function(){
        window.alert("The shuttle is landing. Landing gear engaged.")
        document.getElementById("flightStatus").innerHTML = "Shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
    });
    buttonMissionAbort.addEventListener("click",function(){
        let answer = window.confirm("Confirm that you want to abort the mission");
        if(answer === true){
            document.getElementById("flightStatus").innerHTML = "Mission Aborted";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = "0";
            
        }
    });
}

window.onload = init;