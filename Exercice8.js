
function totalAvecRemise(total,remise){
  totalFinal = total - (total * remise / 100);
    return totalFinal;
}
 let total_HT=Number (prompt("Entrez le total HT :"));
 let remise=Number (prompt("Entrez la remise en % :"));
  alert("le total final est :"+totalAvecRemise(total_HT,remise));