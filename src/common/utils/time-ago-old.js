"use strict";
exports.__esModule = true;
exports.getTimeAgoX = void 0;
var moment = require("moment-timezone");
/**
 * Calculate time ago from a date
 */
var getTimeAgoX = function (date, timezone) {
    if (timezone === void 0) { timezone = 'Asia/Bangkok'; }
    var p = function (v, type) {
        return v + " " + type + (v > 1 ? 's' : '') + " ago";
    }; // pluralize
    var now = moment.tz(timezone); // present
    var past = moment.tz(date, timezone); // past
    var seconds = now.diff(past, 'seconds');
    var minutes = now.diff(past, 'minutes');
    var hours = now.diff(past, 'hours');
    var days = now.toDate().getDate() - 1 === past.toDate().getDate(); // compare after 24hour
    if (seconds < 60) {
        return p(seconds, 'second');
    }
    else if (minutes < 60) {
        return p(minutes, 'minute');
    }
    else if (now.isSame(past, 'day')) {
        return p(hours, 'hour');
    }
    else if (days) {
        return past.format('[Yesterday at] h:mm A'); // EX: Yesterday at 2:04 PM
    }
    else if (isCurrentWeek(past)) {
        return past.format('ddd [at] h:mm A'); // In the same week EX: Wed at 7:00 AM
    }
    else {
        return past.format('MMM DD [at] h:mm A'); // Otherwise EX: Jul 16 at 7:00 AM
    }
};
exports.getTimeAgoX = getTimeAgoX;
/**
 * Check if date is in current week
 */
function isCurrentWeek(date) {
    var startOfWeek = moment().startOf('isoWeek');
    var endOfWeek = moment().endOf('isoWeek');
    return startOfWeek.isSameOrBefore(date) && endOfWeek.isSameOrAfter(date);
}
