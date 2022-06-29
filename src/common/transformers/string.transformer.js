"use strict";
exports.__esModule = true;
exports.TransformTrimString = void 0;
var class_transformer_1 = require("class-transformer");
/**
 * Transform string with trim
 */
var TransformTrimString = function () {
    return (0, class_transformer_1.Transform)(function (_a) {
        var value = _a.value;
        return (typeof value === 'string' ? value.trim() : value);
    });
};
exports.TransformTrimString = TransformTrimString;
