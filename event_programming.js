let intervalID = 0;
function Start() {
    let memeImage = document.getElementById("memeImage");
    intervalID = setInterval(function(){
        let topCord = getRandomNumber();
        let leftCord = getRandomNumber();
        memeImage.style.left = leftCord + "px";
        memeImage.style.top = topCord + "px";
    },1000);
    document.getElementById("stopButton").disabled = false;
    document.getElementById("startButton").disabled = true;
}
function End() {
    clearInterval(intervalID);
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}
function getRandomNumber(){
    return Math.floor(Math.random() * 800);
}