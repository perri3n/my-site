var title = document.getElementById('myTitle');
var button = document.getElementById('myButton');
var abouttitle = document.getElementById('aboutTitle');
var modal = document.getElementById('myModal');
var myclose = document.getElementById('myClose');
var modalbutton = document.getElementById('myModalButton');
var content = document.getElementById('myContent');
var menuTrigger = document.getElementById('menuTrigger');
var headerMenu = document.getElementById('headerMenu');

menuTrigger.onclick = function() {
    $("#headerMenu").slideToggle(500);
}

$("#headerMenu a").click(function() {
    if (headerMenu.style.display === "block") {
        $("#headerMenu").slideUp(500);
    }});

function opacity1() {
    content.style.opacity = "1";
}

function opacity0() {
    modal.style.display = "none"
}



button.onclick = function() {
    modal.style.display = "block";
    setTimeout(opacity1, 100);
}

myclose.onclick = function() {
    modal.style.opacity = "0";
    setTimeout(opacity0, 1000);
}

modalbutton.onclick = function() {
    alert('Сообщение отправлено!');
}

