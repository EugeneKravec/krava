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