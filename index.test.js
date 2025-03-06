const addStringNumbers = require('./index');

describe('String calculator', () => {

    test('should handle no input passed', () => {
        expect(addStringNumbers()).toBe(0);
    });
})
