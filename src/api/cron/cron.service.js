"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CronService = void 0;
var common_1 = require("@nestjs/common");
var schedule_1 = require("@nestjs/schedule");
// https://crontab.guru/
// https://cronjob.xyz/
// http://bradymholt.github.io/cRonstrue/#cronstrue-demo
// https://cronexpressiondescriptor.azurewebsites.net/?
var CronService = /** @class */ (function () {
    function CronService(schedulerRegistry) {
        this.schedulerRegistry = schedulerRegistry;
    }
    CronService.prototype.handleTimeout = function () {
        // ! Used when you want to start cron jobs or not
        this.schedulerRegistry.getCronJobs().forEach(function (job) { return job.stop(); });
    };
    CronService.prototype.handleCron = function () {
        console.log('loading every 5 minute.');
    };
    __decorate([
        (0, schedule_1.Timeout)(5000)
    ], CronService.prototype, "handleTimeout");
    __decorate([
        (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_5_MINUTES)
    ], CronService.prototype, "handleCron");
    CronService = __decorate([
        (0, common_1.Injectable)()
    ], CronService);
    return CronService;
}());
exports.CronService = CronService;
