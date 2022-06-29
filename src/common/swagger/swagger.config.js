"use strict";
exports.__esModule = true;
exports.swaggerOptions = void 0;
var swagger_plugin_1 = require("./swagger.plugin");
// For more info about config:
// https://github.com/swagger-api/swagger-ui/blob/master/docs/usage/configuration.md
exports.swaggerOptions = {
    defaultModelExpandDepth: 3,
    defaultModelsExpandDepth: -1,
    docExpansion: 'none',
    filter: true,
    layout: 'CustomLayout',
    operationsSorter: swagger_plugin_1.operationsSorter,
    plugins: [swagger_plugin_1.CaseInsensitiveFilterPlugin, swagger_plugin_1.CustomLayoutPlugin]
};
