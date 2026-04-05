function addAudio(){
    let divAudio = document.getElementById("divAudio");
    let audioElement = document.createElement("audio");
    audioElement.setAttribute("id", "myAudio");
    audioElement.setAttribute("src", "CSC102_Audio.mp3");
    audioElement.setAttribute("controls", "controls");
    divAudio.appendChild(audioElement);
    document.getElementById("AddAudio").hidden = true;
    document.getElementById("PlayAudio").hidden = false;
    document.getElementById("StopAudio").hidden = false;
}
function PlayAudio(){
    let myAudio = document.getElementById("myAudio");
    myAudio.play();
}
function StopAudio(){
    let myAudio = document.getElementById("myAudio");
    myAudio.pause();
}