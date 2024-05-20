const mathOperations = require('./calculadora');

test('sumar 2 + 4 debería devolver 6', () => {
    // ordenar y actuar
    var result = mathOperations.sum(2, 4);
    // afirmar
    expect(result).toBe(6);
});

test('restar 3 a 10 debería devolver 7', () => {
    // ordenar y actuar
    var result = mathOperations.subtract(10, 3);
    // afirmar
    expect(result).toBe(7);
});

test('multiplicar 3 y 9 debería devolver 27', () => {
    // ordenar y actuar
    var result = mathOperations.product(3, 9);
    // afirmar
    expect(result).toBe(27);
});
