"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var debounce_1 = require("./debounce");
var commander_1 = require("commander");
var program = new commander_1.Command();
function mockFunction() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log.apply(console, __spreadArray(['Función llamada con argumentos:'], args, false));
}
var debouncedFunction = (0, debounce_1.debounce)(mockFunction, 2000);
program
    .version('1.0.0')
    .description('CLI para comprobar la funcionalidad de debounce')
    .option('-a, --args <args...>', 'Argumentos para pasar a la función debounced', function (val) { return val.split(','); }, [])
    .action(function (options) {
    debouncedFunction.apply(void 0, options.args);
    console.log('Llamada a la función debounced realizada. Espera 2 segundos para ver el resultado.');
});
program.parse(process.argv);
