function integral(n) {
    n = Math.abs(n);
    return n * (n + 1) / 2;
}

function sumInterval(start, end) {
    if (-start === end) {
        return 0;
    }

    if (start < 0 && end < 0) {
        return integral(end + 1) - integral(start);
    }

    if (start < 0 && end === 0) {
        return -integral(start);
    }

    if (start < 0 && end > 0) {
        return integral(end) - integral(start);
    }

    if (start === 0 && end > 0) {
        return integral(end);
    }

    if (start > 0 && end > 0) {
        return integral(end) - integral(start - 1);
    }
}

console.log(sumInterval(-4, -4), '-->', -4);
console.log(sumInterval(-4, -3), '-->', -7);
console.log(sumInterval(-4, -2), '-->', -9);
console.log(sumInterval(-4, -1), '-->', -10);
console.log(sumInterval(-4, 0), '-->', -10);
console.log(sumInterval(-3, 0), '-->', -6);
console.log(sumInterval(-3, 1), '-->', -5);
console.log(sumInterval(-3, 3), '-->', 0);
console.log(sumInterval(-1, 3), '-->', 5);
console.log(sumInterval(-1, 4), '-->', 9);
console.log(sumInterval(-2, 3), '-->', 3);
console.log(sumInterval(-4, 3), '-->', -4);
console.log(sumInterval(0, 0), '-->', 0);
console.log(sumInterval(0, 2), '-->', 3);
console.log(sumInterval(0, 3), '-->', 6);
console.log(sumInterval(0, 4), '-->', 10);
console.log(sumInterval(1, 4), '-->', 10);
console.log(sumInterval(2, 4), '-->', 9);
console.log(sumInterval(3, 4), '-->', 7);