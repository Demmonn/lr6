/** ЗАДАЧА 66 - Поменять местами значения двух переменных
 *
 * Поменяйте местами значения переменных "a" и "b".
 * Не используйте для этого какие-либо новые переменные.
 */

let a = 'first'
let b = 'second'

console.log(a, b)
// first second

// Напишите код здесь
b = [a, a = b][0];

console.log(a, b)
// second first
