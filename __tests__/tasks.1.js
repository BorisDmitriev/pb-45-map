const rewire = require("rewire");

describe('1. Camelize', () => {
    it("`camelize` function should accept a string and return camelized version", () => {
        const solution = rewire("../index.js");
        const camelize = solution.__get__("camelize");
        expect(camelize("background-color")).toBe("backgroundColor");
    });
});

describe('2. User Object', () => {
    it("`usersMapped` function should return a new user object with `id`,and `fullName`", () => {
        const solution = rewire("../index.js");
        const usersMapped = solution.__get__("usersMapped");
        expect(usersMapped).toEqual(expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(Number),
                fullName: expect.any(String)
            })]));
    });
});
