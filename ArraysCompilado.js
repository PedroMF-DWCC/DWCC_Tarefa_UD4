var paises = ["Argentina", "Brasil", "Canadá", "Dinamarca", "Egipto", "Francia", "Grecia", "España", "India", "Japón"];
var string = "";
//##### UD04 Exercicio 1 #####
document.write("<h3>1. O n\u00FAmero de elementos do array \"pa\u00EDses\" \u00E9: ".concat(paises.length, "</h3>"));
//##### UD04 Exercicio 2 #####
document.write("<h3>2. Mostrar elementos do array \"países\":</h3>");
for (var i = 0; i < 10; i++) {
    i === 9 ? string += "".concat(paises[i], ".") : string += "".concat(paises[i], ", ");
}
document.write("<h5>".concat(string, "</h5>"));
//##### UD04 Exercicio 3 #####
document.write("<h3>3. Mostrar elementos do array \"países\" en sentido inversos:</h3>");
string = "";
for (var i = 9; i >= 0; i--) {
    i === 0 ? string += "".concat(paises[i], ".") : string += "".concat(paises[i], ", ");
}
document.write("<h5>".concat(string, "</h5>"));
//##### UD04 Exercicio 4 #####
document.write("<h3>4. Engadimos o país \"EEUU\" o inicio do array:</h3>");
string = "";
paises.unshift("EEUU");
paises.forEach(function (el, i) {
    if (i === paises.length - 1) {
        string += "".concat(paises[i], ".");
    }
    else {
        string += "".concat(paises[i], ", ");
    }
});
document.write("<h5>".concat(string, "</h5>"));
//##### UD04 Exercicio 5 #####
document.write("<h3>5. Engadimos o país \"Nigeria\" o final do array:</h3>");
string = "";
paises.push("Nigeria");
paises.forEach(function (el, i) {
    if (i == paises.length - 1) {
        string += "".concat(paises[i], ".");
    }
    else {
        string += "".concat(paises[i], ", ");
    }
});
document.write("<h5>".concat(string, "</h5>"));
//##### UD04 Exercicio 6 #####
document.write("<h3>6. Eliminamos o \u00FAltimo pa\u00EDs do array: ".concat(paises.pop(), ".</h3>"));
//##### UD04 Exercicio 7 #####
document.write("<h3>7. Eliminamos o primeiro pa\u00EDs do array: ".concat(paises.shift(), ".</h3>"));
//##### UD04 Exercicio 8 #####
string = "";
document.write("<h3>8. Mostramos o estado actual do array antes das consultas sobre os elementos do array:</h3>");
paises.forEach(function (el, i) {
    if (i === paises.length - 1) {
        string += "".concat(paises[i], ".");
    }
    else {
        string += "".concat(paises[i], ", ");
    }
});
document.write("<h5>".concat(string, "</h5>"));
var numUsuario = parseInt(prompt("Introduce un número para ver que país se atopa en esa posición do array:"));
if (numUsuario >= 0 && numUsuario <= 9) {
    document.write("<h3>Na posici\u00F3n ".concat(numUsuario, " est\u00E1 o pa\u00EDs ").concat(paises[numUsuario], "</h3>"));
}
//##### UD04 Exercicio 9 #####
var paisUsuario = prompt("Introduce o país do que queiras conocer a posición:") || '';
paisUsuario = paisUsuario.toLowerCase();
var expLowCase = /^[a-záéíóúüñ]+$/;
if (expLowCase.test(paisUsuario)) {
    var paisesLowCase_1 = [];
    paises.forEach(function (el) {
        paisesLowCase_1.push(el.toLowerCase());
    });
    if (expLowCase.test(paisUsuario) && paisesLowCase_1.indexOf(paisUsuario) !== -1) {
        document.write("<h3>9. O pa\u00EDs ".concat(paisUsuario, " at\u00F3pase na posici\u00F3n: ").concat(paisesLowCase_1.indexOf(paisUsuario), "</h3>"));
    }
    else {
        document.write("<h3>9. O pa\u00EDs ".concat(paisUsuario, " non se atopa no array</h3>"));
    }
}
else {
    document.write("<h3>9. O nome do pa\u00EDs introducido non \u00E9 valido (".concat(paisUsuario, ")"));
}
//##### UD04 Exercicio 10 #####
string = "";
var inicioRangoUsuario = parseInt(prompt("Indica o primeiro elemento do rango a mostrar (0-9):"));
var finalRangoUsuario = parseInt(prompt("Indica o último elemento do rango a mostrar (0-9):"));
var nuevoArray = [];
if (inicioRangoUsuario >= 0 && inicioRangoUsuario <= 9 && finalRangoUsuario >= 0 && finalRangoUsuario <= 9 && inicioRangoUsuario <= finalRangoUsuario) {
    finalRangoUsuario++;
    nuevoArray = paises.slice(inicioRangoUsuario, finalRangoUsuario);
    document.write("<h3>10. ".concat(nuevoArray.length > 1 ? "Os países" : "O país", " entre o rango introducido ").concat(nuevoArray.length > 1 ? "son" : "é", ":</h3>"));
    nuevoArray.forEach(function (el, i) {
        if (i === nuevoArray.length - 1) {
            string += "".concat(nuevoArray[i], ".");
        }
        else {
            string += "".concat(nuevoArray[i], ", ");
        }
    });
    document.write("<h5>".concat(string, "</h5>"));
}
else {
    document.write("<h3>10. Rangos introducidos non admitidos</h3>");
}
