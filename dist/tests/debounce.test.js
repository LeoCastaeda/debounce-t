"use strict";
var debounce = require('../debounce').debounce;
jest.useFakeTimers();
describe('debounce', function () {
    it('debe retrasar la llamada de la función', function () {
        var func = jest.fn();
        var debouncedFunc = debounce(func, 1000);
        debouncedFunc();
        expect(func).not.toHaveBeenCalled();
        jest.runAllTimers();
        expect(func).toHaveBeenCalledTimes(1);
    });
});
