"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConfigDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var ConfigDto = /** @class */ (function () {
    function ConfigDto() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], ConfigDto.prototype, "NODE_ENV");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsNumber)(),
        (0, class_transformer_1.Transform)(function (x) { return +x.value; })
    ], ConfigDto.prototype, "PORT");
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], ConfigDto.prototype, "JWT_SECRET");
    return ConfigDto;
}());
exports.ConfigDto = ConfigDto;
