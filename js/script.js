var mas = [-40, 23, -23];
var result = [];
var max = mas.length;

if (mas[0] < mas[1]) {
    for (var i = mas[0]; i <= mas[max - 1]; i++) {
        result.push(i);
    }
} else {
    for (var i = mas[0]; i >= mas[max - 1]; i--) {
        result.push(i);
    }
}

console.log(result);