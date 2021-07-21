// Ввод пользователя:

// Метод window.confirm()

const shouldRenew = confirm('Хотиите продлить подписку?');
console.log(shouldRenew); // Возвращает значение true или false 



// Самый минимальный ввод
// Метод window.prompt()

let quantity = prompt('Введите количество товара');
quantity = Number(quantity);
console.log(quantity);
console.log(typeof quantity);

const arr = [
    { id: 1, name: 'Bars' },
    { id: 2, name: 'KOT' },
    { id: 3, name: 'COBAKA' },
]
// const data = {
//     1: 'Bars',
//     2: 'KOT',
//     3: 'COBAKA'
// }
