const addStringNumbers = require('./index');

describe('String calculator', () => {

    test('should handle no input passed', () => {
        expect(addStringNumbers()).toBe(0);
    });

    test('should handle single delimiter change', () => {
        expect(addStringNumbers('//;\n1;2')).toStrictEqual(3);
    });
})
