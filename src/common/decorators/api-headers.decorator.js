"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ApiCustomHeader = exports.ApiCustomHeaders = void 0;
var common_1 = require("@nestjs/common");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var moment = require("moment");
var dto_decorator_1 = require("./dto.decorator");
exports.ApiCustomHeaders = (0, common_1.createParamDecorator)(function (args, ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var req, header, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                req = ctx.switchToHttp().getRequest();
                header = new ApiCustomHeader(req);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, class_validator_1.validateOrReject)(header)];
            case 2:
                _a.sent();
                return [2 /*return*/, header];
            case 3:
                err_1 = _a.sent();
                throw new common_1.BadRequestException(Object.values(err_1[0].constraints));
            case 4: return [2 /*return*/];
        }
    });
}); });
var ApiCustomHeader = /** @class */ (function () {
    function ApiCustomHeader(req) {
        this.appVersion = req.get('x-app-version');
        this.ip = req.get('x-forwarded-for') || req.socket.remoteAddress || '127.0.0.1';
        this.language = ['en', 'km', 'zh'].find(function (x) { return x === req.get('x-language'); }) || 'en';
        this.latitude = req.get('x-latitude') || '';
        this.longitude = req.get('x-longitude') || '';
        this.platform = ['ios', 'android', 'web', 'api'].find(function (x) { return x === req.get('x-platform'); }) || '';
        this.osVersion = req.get('x-os-version') || '0.0.0';
        this.udid = req.get('x-udid') || '';
        this.timezone = req.get('x-timezone') || '';
        this.timestamp = moment(req.get('x-timestamp')).isValid()
            ? moment(req.headers['x-timestamp'])
            : moment();
    }
    __decorate([
        (0, dto_decorator_1.IsNotEmptyString)()
    ], ApiCustomHeader.prototype, "appVersion");
    __decorate([
        (0, dto_decorator_1.IsOptionalString)()
    ], ApiCustomHeader.prototype, "language");
    __decorate([
        (0, dto_decorator_1.IsOptionalString)()
    ], ApiCustomHeader.prototype, "latitude");
    __decorate([
        (0, dto_decorator_1.IsOptionalString)()
    ], ApiCustomHeader.prototype, "longitude");
    __decorate([
        (0, dto_decorator_1.IsOptionalString)()
    ], ApiCustomHeader.prototype, "platform");
    __decorate([
        (0, dto_decorator_1.IsOptionalString)()
    ], ApiCustomHeader.prototype, "osVersion");
    __decorate([
        (0, dto_decorator_1.IsOptionalString)()
    ], ApiCustomHeader.prototype, "udid");
    __decorate([
        (0, class_validator_1.Allow)()
    ], ApiCustomHeader.prototype, "ip");
    __decorate([
        (0, dto_decorator_1.IsOptionalString)()
    ], ApiCustomHeader.prototype, "timezone");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Date; }),
        (0, class_transformer_1.Transform)(function (x) { return moment(x.value); })
    ], ApiCustomHeader.prototype, "timestamp");
    return ApiCustomHeader;
}());
exports.ApiCustomHeader = ApiCustomHeader;
