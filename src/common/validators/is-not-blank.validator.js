"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.IsNotBlank = void 0;
var class_validator_1 = require("class-validator");
var IsNotBlankConstraint = /** @class */ (function () {
    function IsNotBlankConstraint() {
    }
    IsNotBlankConstraint.prototype.validate = function (propertyValue, args) {
        return typeof propertyValue === 'string' && propertyValue.trim().length > 0;
    };
    IsNotBlankConstraint.prototype.defaultMessage = function (args) {
        return args.property + " must not contain empty spaces";
    };
    IsNotBlankConstraint = __decorate([
        (0, class_validator_1.ValidatorConstraint)({ name: 'isNotBlank', async: false })
    ], IsNotBlankConstraint);
    return IsNotBlankConstraint;
}());
var IsNotBlank = function (property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [property],
            validator: IsNotBlankConstraint
        });
    };
};
exports.IsNotBlank = IsNotBlank;
