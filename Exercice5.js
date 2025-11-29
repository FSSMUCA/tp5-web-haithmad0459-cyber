let n = Number(prompt("Entrez un nombre :"));
let table = "";
for (let i = 0; i <= 10; i++) {
    table =table + n + " x " + i + " = " + (n * i) + "\n";
}
alert(table);
