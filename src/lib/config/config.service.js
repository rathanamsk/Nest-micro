"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConfigService = void 0;
var common_1 = require("@nestjs/common");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var config_dto_1 = require("./config.dto");
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.envConfig = process.env;
        this.env = this.validate('ConfigModule', config_dto_1.ConfigDto);
    }
    ConfigService.prototype.get = function (key) {
        return this.envConfig[key];
    };
    ConfigService.prototype.validate = function (module, className) {
        var config = (0, class_transformer_1.plainToClass)(className, this.envConfig);
        var errors = (0, class_validator_1.validateSync)(config, {
            whitelist: true,
            transform: true,
            forbidNonWhitelisted: false
        });
        if (errors.length > 0) {
            errors.forEach(function (e) {
                return common_1.Logger.error("" + e.constraints[Object.keys(e.constraints)[0]], undefined, module);
            });
            throw new Error(module + ": Invalid environment config.");
        }
        return config;
    };
    ConfigService = __decorate([
        (0, common_1.Injectable)()
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;
