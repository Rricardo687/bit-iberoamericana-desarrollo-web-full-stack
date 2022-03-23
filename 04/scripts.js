let edad;
let flag = false;

do {

edad = prompt("ingrese su edad");
edad = parseInt(edad);

if (isNaN(edad)) {
    alert("por favor ingrese su edad");

} else {
    flag = true;

}
console.log("aqui...");

} while (!flag);
