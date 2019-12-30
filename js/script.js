//Функция, которая заполняет массив элементами.

var mas = [40, -23, 83];
var result = [];
var max = mas.length;

if (mas[0] < mas[max - 1]) {
    for (var i = mas[0]; i <= mas[max - 1]; i++) {
        result.push(i);
    }
} else {
    for (var i = mas[0]; i >= mas[max - 1]; i--) {
        result.push(i);
    }
}

console.log(result);