//declaration des variables<br>
let x = "150";
let y = 150;
let z = true;
alert(
  "type de x: " + typeof(x) + 
  ", type de y: " + typeof(y) + 
  ", type de z: " + typeof(z)
);
x=150;
alert("type de x apres modification: " + typeof(x));
alert("En JavaScript, les variables sont dynamiquement typées, ce qui signifie que le type d’une variable peut changer à tout moment pendant l’exécution du programme")