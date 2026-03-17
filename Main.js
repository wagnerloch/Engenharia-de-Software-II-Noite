console.log("Hello, World!");

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("World"));

function add(a, b) {
    return a + b;
}

console.log(add(5, 3));

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));