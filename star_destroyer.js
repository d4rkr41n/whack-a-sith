var $ = function(id){
    return document.getElementById(id);
};

var sith_kills = 0;
var jedi_kills = 0;

var ticClock = function () {
    $("clock").innerText = parseInt($("clock").innerText) - 1;
    if($("clock").innerText <= 0){
        alert("Your Final Score\nSith Kills: " + sith_kills + "\nJedi Kills: " + jedi_kills);
        window.location.replace('index.html');    }
};

var populateSith = function(){
    var square = Math.floor((Math.random() * 15) + 1);
    $(square).style.backgroundColor = "#ff0000";
    $(square).style.color = "#ff0000";
    $(square).value = 1;
};

var populateJedi = function(){
    var square = Math.floor((Math.random() * 15) + 1);
    $(square).style.backgroundColor = "#0000ff";
    $(square).style.color = "#0000ff";
    $(square).value = 2;
};

var awardPoints = function (id) {
    if($(id).value == 1){
        sith_kills+=1;
        clearSquare(id);
    }else if($(id).value == 2){
        jedi_kills+=1;
        clearSquare(id);
    }
    updateScoreboard();
};

var updateScoreboard = function () {
    $("bd_kills").innerText = jedi_kills;
    $("gd_kills").innerText = sith_kills;
};

var clearSquare = function(square){
    $(square).style.backgroundColor = "#FCFCFC";
    $(square).value = "";
};

window.onload = function () {
    setInterval(populateJedi,1000);
    setInterval(populateSith,250);
    setInterval(ticClock,500)
};