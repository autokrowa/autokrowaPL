
var x = 0;
var y = 0;

function LoadLocal() {
	document.forms.frm1.nazwisko.value = 									
    localStorage.getItem("nazwisko") ,
    document.forms.frm1.email.value = 
    localStorage.getItem ("email");
    document.forms.frm1.imie.value = 
    localStorage.getItem("imie");
}

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

/*function BuildAPIString()
{
    var x = document.forms.frm1.xlocals.value;
    var y = document.forms.frm1.ylocals.value;
    var APIstring = "https://maps.googleapis.com/maps/api/geocode/json?latlng="
    APIstring += x + "," + y + "&key=AIzaSyARyrwc_N6jNmZhudE0NO3cHBisIgJLwL4"
    return APIstring;  
}*/

/*function GetMeStreetYo(){
    fetch(BuildAPIString()).then(function(response){
        var obj = response;
        setStreet(obj);
    });
}*/

function GMAAdress(){
    var geocoder = new google.maps.Geocoder;
    var latlng = {lat: parseFloat(document.forms.frm1.xlocals.value), lng: parseFloat(document.forms.frm1.ylocals.value)};
        geocoder.geocode({'location': latlng}, function(results, status) {
            if(status === "OK"){
                if(results[0]){
            console.log(results[0].formatted_address);
            document.forms.frm1.number.value = parseInt(results[0].address_components[0].long_name);
            document.forms.frm1.ulica.value = (results[0].address_components[1].long_name);
            }
        }
        });
}


/*function setStreet(json){
    console.log(json);
    document.forms.frm1.number.value = json.results[0].long_name;
    document.forms.frm1.ulica.value = json.results[1].long_name;
}*/

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)        
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    var x = document.getElementById("xlocals");
    var y = document.getElementById("ylocals");
    x.value = position.coords.latitude;
    y.value = position.coords.longitude;
    //GetMeStreetYo();
    GMAAdress();
}

/*function LoadXML(url){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {

        }    
    }
    xhttp.open("GET", url, true);
    xhttp.send();
    var rxml = xhttp.response;
    console.log(rxml);
    var foo = JSON.parse(rxml);
    return rxml;
    //now we can parse xml into text or use xml further
}*/