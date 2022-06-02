/**
 * @param {object} button 
 * @returns {boolean} Return true si tu peux mettre un pion, sinon retourne false
 */
function estValide(button) {
    return button.innerHTML.length == 0;
}

function setSymbol(btn, symbole) {
    btn.innerHTML = symbole;
}

function rechercherVainqueur(pions, joueurs, tour) {
    if (
        pions[0].innerHTML == joueurs[tour] &&
        pions[1].innerHTML == joueurs[tour] &&
        pions[2].innerHTML == joueurs[tour]
    ) {
        pions[0].style.backgroundColor = "#9ACD32";
        pions[1].style.backgroundColor = "#9ACD32";
        pions[2].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
        pions[3].innerHTML == joueurs[tour] &&
        pions[4].innerHTML == joueurs[tour] &&
        pions[5].innerHTML == joueurs[tour]
    ) {
        pions[3].style.backgroundColor = "#9ACD32";
        pions[4].style.backgroundColor = "#9ACD32";
        pions[5].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
        pions[6].innerHTML == joueurs[tour] &&
        pions[7].innerHTML == joueurs[tour] &&
        pions[8].innerHTML == joueurs[tour]
    ) {
        pions[6].style.backgroundColor = "#9ACD32";
        pions[7].style.backgroundColor = "#9ACD32";
        pions[8].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
        pions[0].innerHTML == joueurs[tour] &&
        pions[3].innerHTML == joueurs[tour] &&
        pions[6].innerHTML == joueurs[tour]
    ) {
        pions[0].style.backgroundColor = "#9ACD32";
        pions[3].style.backgroundColor = "#9ACD32";
        pions[6].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
        pions[1].innerHTML == joueurs[tour] &&
        pions[4].innerHTML == joueurs[tour] &&
        pions[7].innerHTML == joueurs[tour]
    ) {
        pions[1].style.backgroundColor = "#9ACD32";
        pions[4].style.backgroundColor = "#9ACD32";
        pions[7].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
        pions[2].innerHTML == joueurs[tour] &&
        pions[5].innerHTML == joueurs[tour] &&
        pions[8].innerHTML == joueurs[tour]
    ) {
        pions[2].style.backgroundColor = "#9ACD32";
        pions[5].style.backgroundColor = "#9ACD32";
        pions[8].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
        pions[0].innerHTML == joueurs[tour] &&
        pions[4].innerHTML == joueurs[tour] &&
        pions[8].innerHTML == joueurs[tour]
    ) {
        pions[0].style.backgroundColor = "#9ACD32";
        pions[4].style.backgroundColor = "#9ACD32";
        pions[8].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
        pions[2].innerHTML == joueurs[tour] &&
        pions[4].innerHTML == joueurs[tour] &&
        pions[6].innerHTML == joueurs[tour]
    ) {
        pions[2].style.backgroundColor = "#9ACD32";
        pions[4].style.backgroundColor = "#9ACD32";
        pions[6].style.backgroundColor = "#9ACD32";
        return true;
    }
}

/**
 * 
 * @param {array} pions 
 * @returns {boolean} retourne true si match nul, sinon retourne false
 */
function matchNul(pions) {
    for (var i = 0, len = pions.length; i < len; i++) {
        if (pions[i].innerHTML.length == 0) return false;
    }
}

var Afficheur = function (element) {
    var affichage = element;

    function setText(message) {
        affichage.innerHTML = message;
    }

    return { sendMessage: setText };
};

function main() {
    var pions = document.querySelectorAll("#Jeu button");
    var joueurs = ["X", "O"];
    var tour = 0;
    var jeuEstFini = false;
    var afficheur = new Afficheur(document.querySelector("#StatutJeu"));
    afficheur.sendMessage(
        "Le jeu peut commencer ! <br /> Joueur " +
        joueurs[tour] +
        " c'est votre tour."
    );
    for (var i = 0, len = pions.length; i < len; i++) {
        pions[i].addEventListener("click", function () {
            // TIPS:
            // estValide(this) -> cette fonction permet de savoir si je peux placer un pion

            setSymbol(this, joueurs[tour]);
            jeuEstFini = rechercherVainqueur(pions, joueurs, tour);

            if (jeuEstFini) {
                afficheur.sendMessage(
                    "Le joueur " +
                    joueurs[tour] +
                    ' a gagné ! <br /> <a href="morpion.html">Rejouer</a>'
                );
                return;
            }

            if (matchNul(pions)) {
                afficheur.sendMessage(
                    'Match Nul ! <br/> <a href="morpion.html">Rejouer</a>'
                );
                return;
            }

            tour++;
            tour = tour % 2;
            afficheur.sendMessage("Joueur " + joueurs[tour] + " c'est à vous !");
        });
    }
}

main();
