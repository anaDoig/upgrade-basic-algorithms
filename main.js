// 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
let myFavoriteHero = 'Hulk';

// 1.2 Crea una variable llamada x, asigna el valor 50 a ella.
let x = 50;

// 1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10.
let h = 5,
    y = 10;

// 1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
let z = h + y;

// 1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
// const character = {name: 'Jack Sparrow', age: 10}
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;

// 1.2 Declara 3 variables con los nombres y valores siguientes 
// 	firstName = 'Jon'; 
// 	lastName = 'Snow'; 
// 	age = 24; 
// Muestralos por consola de esta forma: 
// 	'Soy Jon Snow, tengo 24 años y me gustan los lobos.'
const firstName = 'Jon',
    lastName = 'Snow',
    age = 24;
console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`);

// 1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
// ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
const toy1Price = toy1.price;
const toy2Price = toy2.price;
console.log(toy1Price + toy2Price);


// 1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
// y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
// basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log(car1.finalPrice, car2.finalPrice);

// 1.1 Multiplica 10 por 5 y muestra el resultado mediante alert.
const multiply = alert(10 * 5);

// 1.2 Divide 10 por 2 y muestra el resultado en un alert.
const divide = alert(10 / 2);

// 1.3 Muestra mediante un alert el resto de dividir 15 por 9.
const module = alert(15 % 9);

// 1.4 Usa el correcto operador de asignación que resultará en x = 15, 
// teniendo dos variables y = 10 y z = 5.
let x2 = y + z;

// 1.5 Usa el correcto operador de asignación que resultará en x = 50,
// teniendo dos variables y = 10 y z = 5.
let x3 = y * 5;

// 1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
for (let i = 0; i < avengers.length; i++) {
    console.log(i);
    if (i = 'HULK') {
        console.log(i);
    }
}

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers2.splice(0, 1, 'IRONMAN');

// 1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
const avengers3 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const avengersLenght = alert(avengers3.length);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push('Morty', 'Summer');
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters.slice(-1)[0]);

// // 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.pop();
console.log(rickAndMortyCharacters2[0], rickAndMortyCharacters.slice(-1)[0]);

// // 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters3.splice(1,1);
console.log(rickAndMortyCharacters3);

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
// if(number1 === 10){
//     console.log('number1 es estrictamente igual a 10')
// }

if (number2 / number1 === 2) {
    console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
    console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
    console.log("number3 es distinto number1");
}

if (number3 * 5 == number1) {
    console.log("number3 por 5 es igual a number1");
}

if ((number3 * 5 == number1) && (number1 * 2 == number2)) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if ((number2 / 2 == number1) || (number1 / 5 == number3)) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}
