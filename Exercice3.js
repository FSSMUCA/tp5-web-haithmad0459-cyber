let number=prompt("entrer un entier");
if (number<0){
    alert("nombre negatif");
}else if(number>=0 && number<=10){
    alert("petit");
}
else if(11<=number && number<=50){
    alert("moyen");
}
else if(51<=number && number<=100){
    alert("grand");
}else{
    alert("tres grand");
}
