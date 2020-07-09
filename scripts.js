// Write your JavaScript code here.
// Remember to pay attention to page loading!
let buttonTakeOff = null;
let buttonLanding = null;
let buttonMissionAbort = null;
let buttonUp = null;
let buttonDown = null;
let buttonLeft = null;
let buttonRight = null;
let positionX = 0;
let positionY = 0;

function init () {
    buttonTakeOff = document.getElementById("takeoff");
    buttonLanding = document.getElementById("landing");
    buttonMissionAbort = document.getElementById("missionAbort");
    buttonUp = document.getElementById("up");
    buttonDown = document.getElementById("down");
    buttonLeft = document.getElementById("left");
    buttonRight = document.getElementById("right");
    let rocket = document.getElementById("rocket");

    

    buttonTakeOff.addEventListener("click", function(){
        let answer = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(answer === true){
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = "10000";
            
        }
    });
    buttonLanding.addEventListener("click",function(){
        window.alert("The shuttle is landing. Landing gear engaged.")
        document.getElementById("flightStatus").innerHTML = "Shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
        rocket.style.transform = `translate(0px, 0px)`
    });
    buttonMissionAbort.addEventListener("click",function(){
        let answer = window.confirm("Confirm that you want to abort the mission");
        if(answer === true){
            document.getElementById("flightStatus").innerHTML = "Mission Aborted";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = "0";
            
        }
    });
    buttonUp.addEventListener("click",function(){
        document.getElementById("spaceShuttleHeight").innerHTML = (Number(document.getElementById("spaceShuttleHeight").innerHTML) + 10000).toString();
        moveRocket(0, -10);
        
    
    });
    buttonDown.addEventListener("click",function(){
        moveRocket(0, 10);
        let height = Number(spaceShuttleHeight.innerHTML);
        if (height > 0) {
            spaceShuttleHeight.innerHTML = (Number(spaceShuttleHeight.innerHTML) - 10000).toString();
        }
    });
    buttonLeft.addEventListener("click",function(){
        moveRocket(-10, 0);
    });
    buttonRight.addEventListener("click",function(){
        moveRocket(10, 0);
    });

    function moveRocket(moveX, moveY){
        positionX += moveX;
        positionY += moveY;
        rocket.style.transform = `translate(${positionX}px, ${positionY}px)`;  
    }
}

window.onload = init;