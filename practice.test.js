import {
    capitalise,
    reverseString,
    calculator,
    caesarCipher,
    analizeArray,
  } from './practice';
  
  describe('return a string with first character capitalised', () => {
    test('first character capitalised', () => {
      expect(capitalise('strong')).toBe('Strong');
    });
  });
  
  describe('takes a string and returns it reversed', () => {
    test('take only string', () => {
      expect(reverseString(['hello'])).toBe('Not a string');
    });
    test('take only string', () => {
      expect(reverseString(123)).toBe('Not a string');
    });
    test('take punctuation', () => {
      expect(reverseString('hi, there')).toBe('ih, ereht'); //Test failed
    });
    test('keep same case', () => {
      expect(reverseString('Hello')).toBe('olleH');
    });
  });
  
  describe('calculate number', () => {
    test('all arguments need to be numbers', () => {
      expect(calculator.add('1', 2)).toBe('Arguments contain non-number');
    });
    test('add number', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });
    test('all arguments need to be numbers', () => {
      expect(calculator.substract('1', 2)).toBe('Arguments contain non-number');
    });
    test('substract number', () => {
      expect(calculator.substract(1, 2)).toBe(-1);
    });
    test('all arguments need to be numbers', () => {
      expect(calculator.divide('1', 2)).toBe('Arguments contain non-number');
    });
    test('divide number', () => {
      expect(calculator.divide(6, 2)).toBe(3);
    });
    test('divide number', () => {
      expect(calculator.multiply('1', 2)).toBe('Arguments contain non-number');
    });
    test('multiply number', () => {
      expect(calculator.multiply(2, 2)).toBe(4);
    });
  });
  
  describe('takes a string and returns it with each character "shifed"', () => {
    test('shifted one step', () => {
      expect(caesarCipher('abc')).toBe('bcd');
    });
    test('wrap from z to a', () => {
      expect(caesarCipher('xyz')).toBe('yza');
    });
    test('keeping the same case', () => {
      expect(caesarCipher('AnnE')).toBe('BooF');
    });
    test('punctuation', () => {
      expect(caesarCipher('a,b')).toBe('b,c');
    });
  });
  
  describe('takes an array of numbers and returns an object with average, min, max and length', () => {
    test('Not an array', () => {
      expect(analizeArray(123)).toBe('Not an array');
    });
    test('Not an array', () => {
      expect(analizeArray('123')).toBe('Not an array');
    });
    test('Array contains non-number', () => {
      expect(analizeArray([1, 2, '3'])).toBe('Not an array');
    });
    test('Normal array', () => {
      expect(analizeArray([1, 2, 3, 4, 5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5,
      });
    });
  });
  