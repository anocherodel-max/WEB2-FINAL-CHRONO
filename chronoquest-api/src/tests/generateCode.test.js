const generateClassCode = require('../utils/generateCode');

describe('Unit Test: generateClassCode', () => {
    test('should generate a string of exactly 6 characters', () => {
        const code = generateClassCode();
        expect(code).toHaveLength(6);
    });

    test('should only contain alphanumeric characters', () => {
        const code = generateClassCode();
        expect(code).toMatch(/^[A-Z0-9]+$/);
    });
});