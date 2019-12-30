var mas = [-40, 23, 232];
var result = [];
var max = mas.length;

if (mas[0] < max) {
    for (var i = mas[0]; i <= mas[max - 1]; i++) {
        result.push(i);
    }
} else {
    for (var i = mas[0]; i >= mas[max - 1]; i--) {
        result.push(i);
    }
}

console.log(result);