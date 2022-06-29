"use strict";
/*
|--------------------------------------------------------------------------
| References
|--------------------------------------------------------------------------
| https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
| https://stackoverflow.com/questions/44154009/get-array-of-string-literal-type-values
|
*/
exports.__esModule = true;
exports.tuple = void 0;
var tuple = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
};
exports.tuple = tuple;
