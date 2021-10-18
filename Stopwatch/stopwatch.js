//declering setinterval so I could stop it in stop function - has to be global scope
var secundsCounter;
//declaring counter for secunds - global scope
var count = 0;

//declering setInterval var - global scope, so I could latter clearInterval 
var msCounter;
//declaring and seting to 0 counter for centisecunds
var msCount = 0;

//var for minutes setInterval
var minutesCounter;
// declaring and seting to 0 cunter for minutes
var min = 0;

//vaiable to check if the the counter is running
var isRunning = false;

//function for starting stop watch
function startStopwatch() {
//chacking if the watch is alrady running
    if (isRunning === false) {
        //setting interval
        secundsCounter = setInterval(() => {
            count++;
            console.log(count);
            // if the value of count is one digit number to add 0 before
            if (count < 10) {
                document.getElementById("stopwatchSecunds").innerHTML = "0" + count;
            } else {
                document.getElementById("stopwatchSecunds").innerHTML = count;
            }
            if (count == 60) {
               
                resetCount();
               min++;
               document.getElementById("stopwatchMinutes").innerHTML = min + " : "
            }
        }, 1000);

        msCounter = setInterval(() => {
            msCount++
            // if the value of msCount is one digit number to add 0 before
            if (msCount < 10) {
                document.getElementById("stopwatchMilisecunds").innerHTML = "0" + msCount;
            } else {
                document.getElementById("stopwatchMilisecunds").innerHTML = msCount;
            }
            //on every 100 centicecunds the counter starts counting new secund
            if (msCount == 99) {
                resetmsCount();
            }
        }, 10)
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
function resetCount() {
    count = 0;
    document.getElementById("stopwatchSecunds").innerHTML = "0" + count;
}
//function for restarting centisecunds
function resetmsCount() {
    msCount = 0;
    document.getElementById("stopwatchMilisecunds").innerHTML = "0" + msCount;
}
//function for reseting minutes
function resetMin(){
    min = 0;
    document.getElementById("stopwatchMinutes").innerHTML = "";
}
//function to reset stopwatch
function resetStopwatch() {
    resetCount();
    resetmsCount();
    resetMin();
}