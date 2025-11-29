
function factorielle(n){
    if(n<0){
        return "la factorielle n'est pas definie pour les nombres negatifs";
    }
    if(n==0){
        return 1;
    }else{
        return n*factorielle(n-1);
    }
}
let fact = Number(prompt("entrer un nombre pour calculer sa factorielle :"));
alert("la factorielle de "+fact+" est :"+factorielle(fact));