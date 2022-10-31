/** ЗАДАЧА 44 - Шаблонные строки
 *
 * 1. Создайте функцию "templateLiteral" с одним параметром "num"
 *
 * 2. Функция должна возвращать многострочную строку.
 *
 * 3. Ниже приведены примеры вызовов функции.
 */
function templateLiteral(num){
    console.log(`число ${num}.`)
    if(num >= 10){
        console.log(`Это число больше или равно 10.`) 
    } else {console.log(`Это число меньше 10.`)}
    return `Квадратный корень этого числа - ${num * num} `
}
// ТЕСТ 1
const myNumber = 9
console.log(templateLiteral(myNumber))
/* 
Число 9.
Это число меньше 10.
Квадратный корень этого числа - 3.
*/

// ТЕСТ 2
const myAnotherNumber = 25
console.log(templateLiteral(myAnotherNumber))
/* 
Число 25.
Это число больше или равно 10.
Квадратный корень этого числа - 5.
*/
