var mas = [40, -16];
var result = [];

if (mas[0] < mas[1]) {
    for (var i = mas[0]; i <= mas[1]; i++) {
        result.push(i);
    }
} else {
    for (var i = mas[0]; i >= mas[1]; i--) {
        result.push(i);
    }
}

console.log(result);