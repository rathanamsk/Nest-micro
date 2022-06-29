"use strict";
exports.__esModule = true;
exports.IsArrayType = exports.ApiFileBody = exports.IsNotEmptyString = exports.IsNotEmptyNumber = exports.IsNotEmptyIn = exports.IsNotEmptyISO8601 = exports.IsNotEmptyEnum = exports.IsNotEmptyEmail = exports.IsNotEmptyDateString = exports.IsNotEmptyBoolean = exports.IsNotEmptyArrayNumber = exports.IsOptionalUrl = exports.IsOptionalString = exports.IsOptionalNumber = exports.IsOptionalIn = exports.IsOptionalEnum = exports.IsOptionalEmail = exports.IsOptionalDateString = exports.IsOptionalBoolean = exports.IsOptionalArrayNumber = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var string_transformer_1 = require("../transformers/string.transformer");
var is_not_blank_validator_1 = require("../validators/is-not-blank.validator");
// ===========================================
// OPTIONAL
// ===========================================
var IsOptionalArrayNumber = function () { return (0, common_1.applyDecorators)((0, class_validator_1.IsOptional)(), (0, swagger_1.ApiPropertyOptional)({ type: Number, isArray: true }), (0, class_validator_1.IsArray)(), (0, class_validator_1.IsNumber)({}, { each: true })); }; // prettier-ignore
exports.IsOptionalArrayNumber = IsOptionalArrayNumber;
var IsOptionalBoolean = function () { return (0, common_1.applyDecorators)((0, class_validator_1.IsOptional)(), (0, swagger_1.ApiPropertyOptional)(), (0, class_validator_1.IsBoolean)()); }; // prettier-ignore
exports.IsOptionalBoolean = IsOptionalBoolean;
var IsOptionalDateString = function () { return (0, common_1.applyDecorators)((0, class_validator_1.IsOptional)(), (0, swagger_1.ApiPropertyOptional)({ type: String, format: 'date-time' }), (0, class_validator_1.IsDateString)()); }; // prettier-ignore
exports.IsOptionalDateString = IsOptionalDateString;
var IsOptionalEmail = function () { return (0, common_1.applyDecorators)((0, class_validator_1.IsOptional)(), (0, swagger_1.ApiPropertyOptional)(), (0, class_validator_1.IsEmail)({}, { message: 'Please provide a valid email address.' })); }; // prettier-ignore
exports.IsOptionalEmail = IsOptionalEmail;
var IsOptionalEnum = function (e) { return (0, common_1.applyDecorators)((0, class_validator_1.IsOptional)(), (0, swagger_1.ApiPropertyOptional)({ type: String, "enum": e }), (0, class_validator_1.IsEnum)(e)); }; // prettier-ignore
exports.IsOptionalEnum = IsOptionalEnum;
var IsOptionalIn = function (e) { return (0, common_1.applyDecorators)((0, class_validator_1.IsOptional)(), (0, swagger_1.ApiPropertyOptional)({ type: String, "enum": e }), (0, class_validator_1.IsIn)(e)); }; // prettier-ignore
exports.IsOptionalIn = IsOptionalIn;
var IsOptionalNumber = function () { return (0, common_1.applyDecorators)((0, class_validator_1.IsOptional)(), (0, swagger_1.ApiPropertyOptional)(), (0, class_validator_1.IsNumber)()); }; // prettier-ignore
exports.IsOptionalNumber = IsOptionalNumber;
var IsOptionalString = function () { return (0, common_1.applyDecorators)((0, class_validator_1.IsOptional)(), (0, swagger_1.ApiPropertyOptional)(), (0, class_validator_1.IsString)()); }; // prettier-ignore
exports.IsOptionalString = IsOptionalString;
var IsOptionalUrl = function () { return (0, common_1.applyDecorators)((0, class_validator_1.IsOptional)(), (0, swagger_1.ApiPropertyOptional)(), (0, class_validator_1.IsUrl)()); }; // prettier-ignore
exports.IsOptionalUrl = IsOptionalUrl;
// ===========================================
// NOT EMPTY
// ===========================================
var IsNotEmptyArrayNumber = function () { return (0, common_1.applyDecorators)((0, class_validator_1.IsNotEmpty)(), (0, swagger_1.ApiProperty)({ type: Number, isArray: true }), (0, class_validator_1.IsArray)(), (0, class_validator_1.IsNumber)({}, { each: true })); }; // prettier-ignore
exports.IsNotEmptyArrayNumber = IsNotEmptyArrayNumber;
var IsNotEmptyBoolean = function () { return (0, common_1.applyDecorators)((0, class_validator_1.IsNotEmpty)(), (0, swagger_1.ApiProperty)(), (0, class_validator_1.IsBoolean)()); }; // prettier-ignore
exports.IsNotEmptyBoolean = IsNotEmptyBoolean;
var IsNotEmptyDateString = function () { return (0, common_1.applyDecorators)((0, class_validator_1.IsNotEmpty)(), (0, swagger_1.ApiProperty)({ type: String, format: 'date-time' }), (0, class_validator_1.IsDateString)()); }; // prettier-ignore
exports.IsNotEmptyDateString = IsNotEmptyDateString;
var IsNotEmptyEmail = function () { return (0, common_1.applyDecorators)((0, class_validator_1.IsNotEmpty)(), (0, swagger_1.ApiProperty)(), (0, class_validator_1.IsEmail)({}, { message: 'Please provide a valid email address.' })); }; // prettier-ignore
exports.IsNotEmptyEmail = IsNotEmptyEmail;
var IsNotEmptyEnum = function (e) { return (0, common_1.applyDecorators)((0, class_validator_1.IsNotEmpty)(), (0, swagger_1.ApiProperty)({ type: String, "enum": e }), (0, class_validator_1.IsEnum)(e)); }; // prettier-ignore
exports.IsNotEmptyEnum = IsNotEmptyEnum;
var IsNotEmptyISO8601 = function () { return (0, common_1.applyDecorators)((0, class_validator_1.IsNotEmpty)(), (0, swagger_1.ApiProperty)(), (0, class_validator_1.IsISO8601)()); }; // prettier-ignore
exports.IsNotEmptyISO8601 = IsNotEmptyISO8601;
var IsNotEmptyIn = function (e) { return (0, common_1.applyDecorators)((0, class_validator_1.IsNotEmpty)(), (0, swagger_1.ApiProperty)({ type: String, "enum": e }), (0, class_validator_1.IsIn)(e)); }; // prettier-ignore
exports.IsNotEmptyIn = IsNotEmptyIn;
var IsNotEmptyNumber = function () { return (0, common_1.applyDecorators)((0, class_validator_1.IsNotEmpty)(), (0, swagger_1.ApiProperty)(), (0, class_validator_1.IsNumber)()); }; // prettier-ignore
exports.IsNotEmptyNumber = IsNotEmptyNumber;
// export const IsNotEmptyString       = () => applyDecorators(IsNotEmpty(), ApiProperty(), IsString()); // prettier-ignore
var IsNotEmptyString = function () { return (0, common_1.applyDecorators)((0, class_validator_1.IsNotEmpty)(), (0, swagger_1.ApiProperty)(), (0, class_validator_1.IsString)(), (0, is_not_blank_validator_1.IsNotBlank)(), (0, string_transformer_1.TransformTrimString)()); }; // prettier-ignore
exports.IsNotEmptyString = IsNotEmptyString;
// ===========================================
// OTHERS
// ===========================================
var ApiFileBody = function (fieldName) {
    var _a;
    return (0, swagger_1.ApiBody)({
        schema: { type: 'object', properties: (_a = {}, _a[fieldName] = { type: 'string', format: 'binary' }, _a) }
    });
};
exports.ApiFileBody = ApiFileBody;
var IsArrayType = function (e, minSize) {
    if (minSize === void 0) { minSize = 1; }
    return (0, common_1.applyDecorators)((0, class_validator_1.ArrayMinSize)(minSize), (0, class_validator_1.ValidateNested)(), (0, class_transformer_1.Type)(function () { return e; }), (0, swagger_1.ApiProperty)({ isArray: true, type: e }));
};
exports.IsArrayType = IsArrayType;
// ===========================================
// PHONE NUMBER
// ===========================================
// export const IsNotEmptyPhoneNumber = () =>
//   applyDecorators(
//     // ! NOTE: do not changing any lines in this decorator
//     Transform(x => parsePhoneNumberFromString(x)) as any,
//     IsPhoneNumber(),
//     ApiProperty({ type: String })
//   );
// export const IsOptionalPhoneNumber = () =>
//   applyDecorators(
//     IsOptional(),
//     // ! NOTE: do not changing any lines in this decorator
//     Transform(x => parsePhoneNumberFromString(x)) as any,
//     IsPhoneNumber(),
//     ApiPropertyOptional({ type: String })
//   );
