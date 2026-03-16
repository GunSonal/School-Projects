function palinCheck(event){
    event.preventDefault();
    let wordToTest = document.getElementById("palinTXT").value;
    console.log("wordToTest=" + wordToTest);
    let bPalin = isPalin(wordToTest);
    let divMessage = document.getElementById("divMessage");
    if(bPalin){
        divMessage.textContent = "The phrase is a palindrome";
    } else {
        divMessage.textContent = "The phrase is not a palindrome";
    }
}
function isPalin(strToTest){
    strToTest=strToTest.toLowerCase();
    strToTest = strToTest.replace(/\s/g, "");
    console.log("strToTest="+strToTest);
    let strReverse = strToTest;
    strReverse=strReverse.split("").reverse().join("");
    console.log("strReverse="+strReverse);
    if (strReverse == strToTest){
        return true;
    } else {
        return false;
    }
}