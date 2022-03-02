function fibonacci(n) {
    if (n <= 2) {
        return (n - 1);
    }
    return fibonacci(n - 2) + fibonacci(n - 1);
}
var n = 5;
var sum = 0;
function f() {
    for (var i = 1; i <= n; i++) {
        console.log(" " + fibonacci(i));
        sum += fibonacci(i);
    }
    console.log(sum);
}
f();
