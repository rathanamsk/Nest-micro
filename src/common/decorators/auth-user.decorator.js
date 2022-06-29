"use strict";
exports.__esModule = true;
exports.AuthUser = void 0;
var common_1 = require("@nestjs/common");
exports.AuthUser = (0, common_1.createParamDecorator)(function (args, ctx) { return ctx.switchToHttp().getRequest().authUser; });
