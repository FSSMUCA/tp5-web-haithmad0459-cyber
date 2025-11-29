
function sommeIterative(n){
    let i;
    let somme=0;
    for(i=1;i<=n;i++){
        somme=somme+i;
    }
    return somme;
}
function sommeRecursive(n){
    if(n==0){
        return 0;
    }else{
        return n+sommeRecursive(n-1);
    }
}
let nombre=Number(prompt("entrez un nombre pour calculer la somme des entiers de 1 a n :"));
alert("la somme des entiers de 1 a "+nombre+" par iteration est :"+sommeIterative(nombre));
alert("la somme des entiers de 1 a "+nombre+" par recursion est :"+sommeRecursive(nombre));
