"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CronResolver = void 0;
var common_1 = require("@nestjs/common");
var fs_1 = require("fs");
var moment = require("moment");
var path_1 = require("path");
var CronResolver = /** @class */ (function () {
    function CronResolver() {
    }
    /**
     * NOTE: For Cron Job Only !!!
     * Delete any files older than (x) days
     */
    CronResolver.prototype.removeFiles = function (path, days) {
        if (days === void 0) { days = 1; }
        (0, fs_1.readdir)(path, function (err, files) {
            files.forEach(function (file) {
                var filePath = (0, path_1.resolve)(path, file);
                (0, fs_1.stat)(filePath, function (err, stat) {
                    if (err)
                        return;
                    var d = moment().diff(moment(stat.mtime), 'days');
                    if (d > days)
                        (0, fs_1.unlink)(filePath, function () { return console.log(file + " delete"); });
                });
            });
        });
    };
    CronResolver = __decorate([
        (0, common_1.Injectable)()
    ], CronResolver);
    return CronResolver;
}());
exports.CronResolver = CronResolver;
