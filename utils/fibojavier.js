
export function fibonacci(pos) {
    const numeros = [0, 1];

    for (let i = 2; i <= pos; i++) {
        numeros[i] = numeros[i - 1] + numeros[i - 2];
    }

    return numeros[pos];
}
