
import { describe, it, expect } from 'vitest';
import { fibonacci } from './utils/fiboJavier.js';

describe('Pruebas de Fibonacci', () => {

    it('La posición 3 debe devolver 2', () => {
        expect(fibonacci(3)).toBe(2);
    });

    it('La posición 5 debe devolver 5', () => {
        expect(fibonacci(5)).toBe(5);
    });

    it('La posición 7 debe devolver 13', () => {
        expect(fibonacci(7)).toBe(13);
    });

});
