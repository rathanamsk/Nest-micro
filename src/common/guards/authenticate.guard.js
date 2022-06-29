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
exports.Authenticate = void 0;
var common_1 = require("@nestjs/common");
/**
 * The verification of the credentials of the connection attempt. Or the act of logging a user in.
 * @description https://medium.freecodecamp.org/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52
 */
var Authenticate = function () { return (0, common_1.UseGuards)(AuthenticateGuard); };
exports.Authenticate = Authenticate;
var AuthenticateGuard = /** @class */ (function () {
    function AuthenticateGuard(jwt) {
        this.jwt = jwt;
    }
    AuthenticateGuard.prototype.canActivate = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var req, authorization, _a, scheme, token, clientId, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        req = context.switchToHttp().getRequest();
                        authorization = req.get('token') || '';
                        _a = authorization.split(' '), scheme = _a[0], token = _a[1];
                        if (scheme.toLowerCase() !== 'bearer')
                            throw new common_1.UnauthorizedException('Invalid Authorization Scheme');
                        if (!token)
                            throw new common_1.UnauthorizedException('Invalid Authorization Token');
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.jwt.verifyAsync(token)];
                    case 2:
                        clientId = (_b.sent()).clientId;
                        console.log(clientId);
                        // TODO: checked if database is SQL or NoSQL
                        // Find Client App from database to make sure it exist
                        // const clientApp = await ClientApp.findOne({ where: { clientId } });
                        // if (!clientApp) throw new UnauthorizedException('Client application was not found');
                        return [2 /*return*/, true];
                    case 3:
                        e_1 = _b.sent();
                        throw new common_1.UnauthorizedException(e_1.name + ' ' + e_1.message);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthenticateGuard = __decorate([
        (0, common_1.Injectable)()
    ], AuthenticateGuard);
    return AuthenticateGuard;
}());
