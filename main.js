//var LOGINID = document.form1.name.value;
//var PASSWORD = document.Login.password.value;
//var x = "eswar";

function valid() {
    var x = document.getElementById("username").value;
    var y = document.getElementById("password").value;
    //alert("Please enter" + x);
    if ((x == "Eswar0054") && (y == "Eswar@0054")) {
        //alert("LoginSuccess");
        window.location.href = 'home.html';
    } else {
        alert("LoginError");
    }
}