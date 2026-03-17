console.log("Hello, Git!");

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

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));