const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var str = 123;

        var isString = isRealString(str);
        expect(isString).toBe(false);

    });

    it('should reject string with only spaces', () => {
        var str = '    ';

        var isString = isRealString(str);
        expect(isString).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var str = 'Arun  ';

        var isString = isRealString(str);
        expect(isString).toBe(true);
    })
})