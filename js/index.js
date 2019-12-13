var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
/*var value = slider.value;
output.innerHTML = value;

slider.oninput = function () {
    output.innerHTML = this.value;
}*/

function changeClass() {

    var element = document.getElementById("toChange");
    var element2 = document.getElementById("toChange2");
    var element3 = document.getElementById("toChange3");

    if (slider.value < 15) {
        element.style.opacity = "10.5";
        element2.style.opacity = "0.5";
        element3.style.opacity = "0.5";
    }
    else if (slider.value >= 15 && slider.value < 29) {
        element2.style.opacity = "10.5";
        element.style.opacity = "0.5";
        element3.style.opacity = "0.5";
    }
    else {
        element3.style.opacity = "10.5";
        element.style.opacity = "0.5";
        element2.style.opacity = "0.5";
    }
}



var nom = document.getElementById("nom");
var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");
var error3 = document.getElementsByClassName("error3");
var mdp = document.getElementById("mdp");

function ajouterProduit() {
    console.log("ok")
    //Message d'erreur
    if (nom.value == '') {
        error1.innerHTML = "<span>Veuillez entrez votre nom!</span>";
        error2.innerHTML = "";
    } else if (mdp.value == '') {
        error2.innerHTML = "<span>Veuillez entrez votre mot de passe !</span>";
        error1.innerHTML = "";
    } else if (nom.value == '' && mdp.value == '') {
        error3.innerHTML = "<span>Veuillez remplir tous les champs !</span>";
        error1.innerHTML = "";
        error2.innerHTML = "";
    }
    else {
        error1.innerHTML = "";
        error2.innerHTML = "";
        error3.innerHTML = "";
    }
}