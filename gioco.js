alert("Ciao, sono JavaScript e sono pronto a servirti ;)");

var nomeGiocatore=window.prompt("Come ti chiami?");

document.getElementById("titolo").innerHTML="Ciao "+nomeGiocatore;

var sceltaUtente;
function clickCarta (){
    sceltaUtente="CARTA";
    alert(nomeGiocatore+", hai scelto "+sceltaUtente+". La accendiamo? Clicca il pulsante CONFERMA!");
}
function clickForbici (){
    sceltaUtente="FORBICI";
    alert(nomeGiocatore+", hai scelto "+sceltaUtente+". La accendiamo? Clicca il pulsante CONFERMA!");
}
function clickSasso (){
    sceltaUtente="SASSO";
    alert(nomeGiocatore+", hai scelto "+sceltaUtente+". La accendiamo? Clicca il pulsante CONFERMA!");
}

function verdetto (){
    document.getElementById("carta").style.display="none";
    document.getElementById("forbici").style.display="none";
    document.getElementById("sasso").style.display="none";
    document.getElementById("pulsante").style.display="none";
    var sceltaComputer;
    if(sceltaUtente == "CARTA") {
        sceltaComputer = "FORBICI";
    }
    if(sceltaUtente == "FORBICI") {
        sceltaComputer = "SASSO";
    }
    if(sceltaUtente == "SASSO") {
        sceltaComputer = "CARTA";
    }
    document.getElementById("titolo").innerHTML=nomeGiocatore+" HAI PERSO! AHAHAHAHA";
    document.getElementById("info").innerHTML="Il Computer ha scelto "+sceltaComputer+". Tu, miserabile perdente, hai scelto "+sceltaUtente+"!";
}