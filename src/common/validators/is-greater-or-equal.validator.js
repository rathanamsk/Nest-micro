"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.IsGreaterOrEqual = void 0;
var class_validator_1 = require("class-validator");
var IsGreaterOrEqualConstraint = /** @class */ (function () {
    function IsGreaterOrEqualConstraint() {
    }
    IsGreaterOrEqualConstraint.prototype.validate = function (propertyValue, args) {
        return propertyValue >= args.object[args.constraints[0]];
    };
    IsGreaterOrEqualConstraint.prototype.defaultMessage = function (args) {
        return "\"" + args.property + "\" must be greaterOrEquals \"" + args.constraints[0] + "\"";
    };
    IsGreaterOrEqualConstraint = __decorate([
        (0, class_validator_1.ValidatorConstraint)({ name: 'isGreaterOrEqual', async: false })
    ], IsGreaterOrEqualConstraint);
    return IsGreaterOrEqualConstraint;
}());
var IsGreaterOrEqual = function (property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [property],
            validator: IsGreaterOrEqualConstraint
        });
    };
};
exports.IsGreaterOrEqual = IsGreaterOrEqual;
