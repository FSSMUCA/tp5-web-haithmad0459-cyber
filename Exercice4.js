// Demandez à l’utilisateur deux nombres via prompt()
let min = Number(prompt("Entrez le nombre minimal : "));
let max = Number(prompt("Entrez le nombre maximal : "));
for (let i = min + 1; i < max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        alert("Five&Three"); 
    } else if (i % 3 === 0) {
        alert("Three");      
    } else if (i % 5 === 0) {
        alert("Five");       
    } else {
        alert("ni Five ni Three");            
    }
}