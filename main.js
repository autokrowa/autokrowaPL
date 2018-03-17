/*function SubmitForm() {
    document.getElementById("frm1").SubmitForm();
}*/

function SaveLocal() {
    localStorage.setItem(
        "email",
        document.forms.frm1.email.value
    );
    
    localStorage.setItem(
        "imie",
        document.forms.frm1.imie.value
    );

    localStorage.setItem(
        "nazwisko",
        document.forms.frm1.nazwisko.value
    );
}

var x = document.getElementById("locals");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

function LoadLocal() {
	document.forms.frm1.nazwisko.value = 									
    localStorage.getItem("nazwisko") ,
    document.forms.frm1.email.value = 
    localStorage.getItem ("email");
    document.forms.frm1.imie.value = 
    localStorage.getItem("imie");
}
function LoadXML(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
            //load xml or show statusText
        }    
    }
    xhttp.open("GET", "url", true);
    xhttp.send();
    var rxml = xhttp.responseXML;
    //now we can parse xml into text or use xml further
}