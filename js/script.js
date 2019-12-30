var mas = [40, 916];
var result = [];
var max = mas.length;

if (mas[0] < mas[1]) {
    for (var i = mas[0]; i <= mas[mas.length - 1]; i++) {
        result.push(i);
    }
} else {
    for (var i = mas[0]; i >= mas[mas.length - 1]; i--) {
        result.push(i);
    }
}

console.log(result);