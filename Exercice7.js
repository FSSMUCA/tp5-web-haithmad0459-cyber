
function verifierMotDePasse(mdp) {
let longueurOk = mdp.length >= 8;
let contientArobase = mdp.includes("@");
return longueurOk && contientArobase;
}

let motDePasse = prompt("Entrez un mot de passe :");
if (verifierMotDePasse(motDePasse)) {
    alert("Mot de passe valide");
} else {
    alert("Mot de passe non valide");
}