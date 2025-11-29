
let sommepairs=0;
let sommeimpairs=0;
let i;
for(i=1;i<=50;i++){
    if(i%2==0){
        sommepairs=sommepairs+i;
    }else if(i%2!=0){
        sommeimpairs=sommeimpairs+i;
    }
}
console.log("la somme des nombres pairs entre 1 et 50 est :"+sommepairs);
console.log("la somme des nombres impairs entre 1 et 50 est :"+sommeimpairs);
