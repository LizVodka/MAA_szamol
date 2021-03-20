/*segédfüggvények*/

function ID(nev) {
    return document.getElementById(nev);
}

function CLASS(nev) {
    return document.getElementsByClassName(nev);
}

function $(nev) {
    return document.querySelectorAll(nev);
}

/*global*/
var osszeg=0;

function beker(){
    /*var szamolGomb=document.getElementById("szamol");*/
    var szamolGomb=ID("szamol");

    var a=Number(document.getElementById("a").value);
    var b=Number(document.getElementById("b").value);
    osszeg=a+b;
    if(isNaN(osszeg) || document.getElementById("a").value==="" || document.getElementById("b").value==="") {
        //gomb betűszíne legyen halvány és a title tagbe írjuk ki"..."
        ID("szamol").style.color="lightgrey";
        ID("szamol").title="Számokat adj meg!";
    }
    else {
        ID("szamol").style.color="initial";
        szamolGomb.addEventListener("click", szamol, false);
        ID("szamol").title="Kattints!";
    }
    ID("a").addEventListener("input", beker, false);
    ID("b").addEventListener("input", beker, false);
}

function szamol(){
    
    ID("szoveg").innerHTML="Az összeg: <span style='color: red;'>"+osszeg+"</span>";

}

function szamolFormaz() {
    /*document.getElementById("szamol").style.color="red";*/
    ID("szamol").style.color="red";
}

function szamolFormazLevesz() {
    /*document.getElementById("szamol").style.color="initial";*/
    ID("szamol").style.color="initial";
}

function inputFormazas() {
    this.classList.add("beviteliMezo");
}

function inputFormazasLe() {
    this.classList.remove("beviteliMezo");
}

function init(){
    beker();
    /*document.getElementById("uzenet").innerHTML="<span style='color: red;'>Hello világ!</span>";*/
    ID("uzenet").innerHTML="<span style='color: red;'>Hello világ!</span>";

    /*document.getElementById("szamol").addEventListener("click", szamol, false);
    document.getElementById("szamol").addEventListener("mouseover", szamolFormaz, false);
    document.getElementById("szamol").addEventListener("mouseover", szamolFormazLevesz, false);*/
    
    /*szamolGomb.addEventListener("mouseover", szamolFormaz, false);
    szamolGomb.addEventListener("mouseout", szamolFormazLevesz, false);*/
    
    ID("a").addEventListener("focusin", inputFormazas, false);
    ID("a").addEventListener("focusout", inputFormazasLe, false);
    ID("b").addEventListener("focusin", inputFormazas, false);
    ID("b").addEventListener("focusout", inputFormazasLe, false);
}

window.addEventListener("load", init, false);