
// function isAdult(age){
//     let res 
//     if (age>=0) {
//         res = true
//     }
//     else {
//         res = false
//     }
// }

// console.log(test)

// let quantity = prompt('Введите количество товара');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// const apartment = {
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Пиши код ниже этой строки
//   for (const key in apartment){
//       console.log(apartment[key])
//   }
// let age;
// age = 14;
// console.log(age); // 14

// const message = 'JavaScript is awesome!';
// /*
//  * В круглых скобках указываем имя переменной,
//  * значение которой необходимо вывести в консоль
//  */
// console.log(message); // JavaScript is awesome!

// const name = 'Mango';
// /*
//  * Можно сначала указать какую-то произвольную строку,
//  * к примеру описывающую переменную или дополняющую ее, после чего
//  * поставить запятую и указать имя переменной
//  */
// console.log('My name is: ', name); // My name is: Mango

// /*
//  * alert выводит модальное окно, текст которого соотсветствует значению
//  * переменной (или литерала) которую мы укажем в скобках.
//  */
// alert(message);

// const foo = { id: 1, verified: true, color: 'green' };
// const bar = { id: 2, verified: false, color: 'red' };
// // console.table({foo, bar})
// console.group(foo,bar)

// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);

// const hotelName = prompt('Please enter desired hotel name:');
// console.log(hotelName);

// const valueA = '5';
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // 'number'
// console.log(Number.parseInt('qw12eqwe'));

// // Сделать их целыми, умножив на 10, сложить, а результат разделить на 10
// const sum = (0.1 * 10 + 0.2 * 10) / 10

// console.log(sum === 0.3);

// function checkStorage(available, ordered) {
//     let message;
//     // Пиши код ниже этой строки
//       if (ordered > available) {
//           message = 'На складе недостаточно товаров!'
//       } 
//         else {
//           message = 'Заказ оформлен, с вами свяжется менеджер'.
//       };
//   console.log(message);
//     // Пиши код выше этой строки
//     return message;
//   };
//   checkStorage(200, 20);
//   checkStorage(100, 130);

// let cost = 0;
// const subscription = 'pro';
// console.log(cost);

// if (subscription === 'pro') {
//   cost = 100;
// }

// console.log(cost); // 100


// let counter = 0;

// while (counter < 10) {
//   console.log('counter: ', counter);
//   counter += 1;
// }
// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = '';

// // do {
// //   password = prompt('Введите пароль длиннее 4-х символов', '');
// // } while (password.length < 5);

// // console.log('Ввели пароль: ', password);

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }


// const max = 10;
// let sum = 0;

// for (let i = 5; i <= max; i += 3) {
//     sum += i;
// }
// console.log(sum);

// const clients = ['Mango', 'Ajax', 'Poly'];
// console.table(clients);

// for (let i = 0; i < clients.length; i += 1) {
//   console.table('Logging clients: ', clients[i]);
// }

// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`label-${i}`);
// }

// console.table(numbers); // ['label-0', 'label-1', 'label-2']

// const clients = [3, 4, 7];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log(clients.join(" "))

// function calculateEngravingPrice(message, pricePerWord) {
//     // Пиши код ниже этой строки
//   let total = message.split('').length * pricePerWord;
//   console.log(total)
//     return total


//     // Пиши код выше этой строки
//   };
//   calculateEngravingPrice('JavaScript у меня в крови', 10)

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
//   ];

//   function getProductPrice(productName) {
//     // Пиши код ниже этой строки

//      if (productName === products.name) {
//         return products.price;
//     }
//     return null;
// }

// getProductPrice('Радар')

// const playList = {
// name: 'dkjfsh',
// rating: 5,
// tracks: ['nhtr-1', 'nhtr-2', 'nhtr-3'],
// trackCount: 3,

// };
// console.log(playList.name)

// const min = function (...args) {

//     return Math.min(...args);
// }
// min(45, 76, 935, 9, 89);
// console.log(min(45, 76, 935, 9, 89));

// const val = Number(prompt("Введите число"))

// switch (val) {
//     case 10:
//         alert('Верно');
//         break;
//     default: alert('Неверно');
// }

// const str = prompt('Opa', 'Abcde')

// str[0].toLowerCase() === 'a' ? alert('да') : alert('нет')

const rtu = '2a3f8';

function calcSum(str) {
    let sum = 0;
    for (let i = 0; i <= str.length - 1; i += 1) {
        if (isNaN(Number(str[i]))) {
            continue
        }
        sum += Number(str[i])
    }
    return sum;

}

console.log(calcSum(rtu));
