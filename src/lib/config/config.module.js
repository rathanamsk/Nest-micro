"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConfigModule = void 0;
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var config_service_1 = require("./config.service");
var ConfigModule = /** @class */ (function () {
    function ConfigModule() {
    }
    ConfigModule = __decorate([
        (0, common_1.Global)(),
        (0, common_1.Module)({
            imports: [config_1.ConfigModule.forRoot({})],
            providers: [config_service_1.ConfigService],
            exports: [config_service_1.ConfigService]
        })
    ], ConfigModule);
    return ConfigModule;
}());
exports.ConfigModule = ConfigModule;
