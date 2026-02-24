function validate() {
    let firstName = document.getElementById("txtFirstName").value;
    console.log("firstName="+firstName);
    let lastName = document.getElementById("txtLastName").value;
    console.log("lastName="+lastName);
    let ZIPcode = document.getElementById("ZIPcode").value;
    console.log("ZIPcode="+ZIPcode);
    let fullName = firstName + "" + lastName;
    let message = "";
    if (fullName.length == 1 || fullName.length > 20){
        message = "Please enter a name that is less than 20 characters.";
    } else if (ZIPcode.length != 5){
        message = "Please enter a proper zip code";
    } else {
        message = "You got it correct!";
    }
    console.log("message=" + message);
}