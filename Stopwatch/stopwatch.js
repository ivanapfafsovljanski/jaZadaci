//declering setinterval so I could stop it in stop function - has to be global scope
var secundsCounter;
//declaring counter for secunds - global scope
var count = 0;
//vaiable to check if the the counter is running
//declering setInterval var - global scope, so I could latter clearInterval 
var msCounter;
//declaring and seting to 0 counter for centisecunds
var msCount = 0;

var isRunning = false;

//function for starting secunds part of stop vatch
function startStopwatch() {
   
    if (isRunning === false) {
        secundsCounter = setInterval(() =>{
            count++;
            console.log(count);
            document.getElementById("stopwatchSecunds").innerHTML = count;
        }, 1000);

        msCounter=setInterval(()=>{
            msCount++
            document.getElementById("stopwatchMilisecunds").innerHTML = msCount;
            //on every 100 centicecunds the counter starts counting new secund
            if (msCount == 99) {
                resetmsCount();
            }
        },10)
    }
    isRunning = true;
    
}

//function for stoping secunds counting
function stopStopwatch() {
    clearInterval(secundsCounter);
    clearInterval(msCounter);
    isRunning = false;
   
}
//function for reseting secunds
function resetStopwatch() {
    count = 0;
    document.getElementById("stopwatchSecunds").innerHTML = count;
    
}
//function for restarting centisecunds
function resetmsCount(){
    msCount = 0;
    document.getElementById("stopwatchMilisecunds").innerHTML = msCount;
}