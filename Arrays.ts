let paises: string[] = ["Argentina", "Brasil", "Canadá", "Dinamarca", "Egipto", "Francia", "Grecia", "España", "India", "Japón"];
let string: string = "";

//##### UD04 Exercicio 1 #####
document.write(`<h3>1. O número de elementos do array \"países\" é: ${paises.length}</h3>`);

//##### UD04 Exercicio 2 #####
document.write("<h3>2. Mostrar elementos do array \"países\":</h3>");

for (let i = 0; i < 10; i++) {
    i === 9 ? string += `${paises[i]}.` : string += `${paises[i]}, `;
}
document.write(`<h5>${string}</h5>`);

//##### UD04 Exercicio 3 #####
document.write("<h3>3. Mostrar elementos do array \"países\" en sentido inversos:</h3>");
string = "";

for (let i = 9; i >= 0; i--) {
    i === 0 ? string += `${paises[i]}.` : string += `${paises[i]}, `;
}
document.write(`<h5>${string}</h5>`);

//##### UD04 Exercicio 4 #####
document.write("<h3>4. Engadimos o país \"EEUU\" o inicio do array:</h3>");
string = "";

paises.unshift("EEUU");

paises.forEach((el, i) => {
    if (i === paises.length - 1) {
        string += `${paises[i]}.`;
    } else {
        string += `${paises[i]}, `;
    }
});
document.write(`<h5>${string}</h5>`);

//##### UD04 Exercicio 5 #####
document.write("<h3>5. Engadimos o país \"Nigeria\" o final do array:</h3>");
string = "";

paises.push("Nigeria");

paises.forEach((el, i) => {
    if (i == paises.length - 1) {
        string += `${paises[i]}.`;
    } else {
        string += `${paises[i]}, `;
    }
});
document.write(`<h5>${string}</h5>`);

//##### UD04 Exercicio 6 #####
document.write(`<h3>6. Eliminamos o último país do array: ${paises.pop()}.</h3>`);

//##### UD04 Exercicio 7 #####
document.write(`<h3>7. Eliminamos o primeiro país do array: ${paises.shift()}.</h3>`);

//##### UD04 Exercicio 8 #####
string = "";

document.write("<h3>8. Mostramos o estado actual do array antes das consultas sobre os elementos do array:</h3>");
paises.forEach((el, i) => {
    if (i === paises.length - 1) {
        string += `${paises[i]}.`;
    } else {
        string += `${paises[i]}, `;
    }
});
document.write(`<h5>${string}</h5>`);

const numUsuario: number = parseInt(prompt("Introduce un número para ver que país se atopa en esa posición do array:")!);

if (numUsuario >= 0 && numUsuario <= 9) {
    document.write(`<h3>Na posición ${numUsuario} está o país ${paises[numUsuario]}</h3>`);
}

//##### UD04 Exercicio 9 #####
let paisUsuario: string = prompt("Introduce o país do que queiras conocer a posición:") || '';
paisUsuario = paisUsuario.toLowerCase();

const expLowCase: RegExp = /^[a-záéíóúüñ]+$/;

if (expLowCase.test(paisUsuario!)) {
    let paisesLowCase: string[] = [];
    paises.forEach(el => {
        paisesLowCase.push(el.toLowerCase());
    });

    if (expLowCase.test(paisUsuario) && paisesLowCase.indexOf(paisUsuario!) !== -1) {
        document.write(`<h3>9. O país ${paisUsuario} atópase na posición: ${paisesLowCase.indexOf(paisUsuario)}</h3>`);
    } else {
        document.write(`<h3>9. O país ${paisUsuario} non se atopa no array</h3>`);
    }
} else {
    document.write(`<h3>9. O nome do país introducido non é valido (${paisUsuario})`);
}

//##### UD04 Exercicio 10 #####
string = "";

let inicioRangoUsuario: number = parseInt(prompt("Indica o primeiro elemento do rango a mostrar (0-9):")!);
let finalRangoUsuario: number = parseInt(prompt("Indica o último elemento do rango a mostrar (0-9):")!);
let nuevoArray: string[] = [];

if (inicioRangoUsuario >= 0 && inicioRangoUsuario <= 9 && finalRangoUsuario >= 0 && finalRangoUsuario <= 9 && inicioRangoUsuario <= finalRangoUsuario) {
    finalRangoUsuario++;
    nuevoArray = paises.slice(inicioRangoUsuario, finalRangoUsuario);

    document.write(`<h3>10. ${nuevoArray.length > 1 ? "Os países" : "O país"} entre o rango introducido ${nuevoArray.length > 1 ? "son" : "é"}:</h3>`);

    nuevoArray.forEach((el, i) => {
        if (i === nuevoArray.length - 1) {
            string += `${nuevoArray[i]}.`;
        } else {
            string += `${nuevoArray[i]}, `;
        }
    });
    document.write(`<h5>${string}</h5>`);
} else {
    document.write(`<h3>10. Rangos introducidos non admitidos</h3>`);
}
