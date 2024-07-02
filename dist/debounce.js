"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
function debounce(cb, delay) {
    if (delay === void 0) { delay = 1000; }
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            cb.apply(void 0, args);
        }, delay);
    };
}
exports.debounce = debounce;
