"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiModule = void 0;
var common_1 = require("@nestjs/common");
var auth_module_1 = require("./auth/auth.module");
var cron_module_1 = require("./cron/cron.module");
var shared_module_1 = require("./shared/shared.module");
// import { UploadModule } from './upload/upload.module';
// import { ExampleModule } from './example/example.module';
// import { SoapModule } from './soap/soap.module';
var ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    ApiModule = __decorate([
        (0, common_1.Module)({
            imports: [
                // --
                auth_module_1.AuthModule,
                cron_module_1.CronModule,
                // ExampleModule,
                shared_module_1.SharedModule
                // SoapModule
                // UploadModule
            ]
        })
    ], ApiModule);
    return ApiModule;
}());
exports.ApiModule = ApiModule;
