import{ describe, expect, test } from 'vitest'
import { add, multiply, subtract } from './math.helper'

describe('suamr', () => {

    test('debería sumar dos numeros positivos', () => {
    
        //! 1. Arrange
        const a = 2;
        const b = 2;
    
        //! 2. Act
        const result = add(a, b);
    
        //! 3. Assert
        expect(result).toBe(4);
    
        
    
    })

});

describe('resta', () => {
    
    test('Deberia restar dos numeros', () => {
        
        const a = 3;
        const b = 4;

        const result = subtract(a, b);
        expect(result).toBe(a - b);

    });

});

describe('multiplicación', () => {
    
    test('Debería multiplicar dos numeros', () => {
        
        const a = 3;
        const b = 3;

        const result = multiply(a, b);

        expect(result).toBe(a * b);

    })

});
