"use strict";
exports.__esModule = true;
exports.TEMP_PATH = exports.ASSETS_PATH = void 0;
var path_1 = require("path");
exports.ASSETS_PATH = (0, path_1.resolve)('.', 'assets'); // prettier-ignore
exports.TEMP_PATH = (0, path_1.resolve)('.', 'public', 'upload', 'temp'); // prettier-ignore
