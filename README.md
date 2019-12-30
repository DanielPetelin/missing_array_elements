<h1>New function</h1>
<h2>Код</h2>
<h3>HTML</h3>
```<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Function_array</title>
</head>
<body>
    <script src="./js/script.js"></script>
</body>
</html>
```
<h3>JavaScript</h3>
```var mas = [40, -23, 83];
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
```
