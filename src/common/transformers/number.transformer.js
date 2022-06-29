"use strict";
exports.__esModule = true;
exports.TransformToNumber = void 0;
var class_transformer_1 = require("class-transformer");
/**
 * Transform input to number. default is 0.
 */
var TransformToNumber = function () { return (0, class_transformer_1.Transform)(function (v) { return (isNaN(+v) ? 0 : +v); }); };
exports.TransformToNumber = TransformToNumber;
