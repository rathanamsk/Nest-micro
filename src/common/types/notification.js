"use strict";
exports.__esModule = true;
exports.NotificationPhotoTypeEnum = exports.NotificationUserTypeEnum = exports.NotificationTypeEnum = void 0;
var base_1 = require("./base");
exports.NotificationTypeEnum = (0, base_1.tuple)('AUS', // AUCTION_START
'AUE', // AUCTION_END
'AUO' // AUCTION_OUTBID
);
exports.NotificationUserTypeEnum = (0, base_1.tuple)('NCT', // Notification Creator
'NRV', // Notification Receiver
'NIR' // Notification Indirect Receiver
);
exports.NotificationPhotoTypeEnum = (0, base_1.tuple)('ORG', // Organization
'USR' // User
);
