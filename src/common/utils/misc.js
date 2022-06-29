"use strict";
exports.__esModule = true;
exports.moment = exports.nth = void 0;
/**
 * Add st, nd, rd and th (ordinal) suffix to a number
 *
 * @see https://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number
 */
var nth = function (n) {
    return n + (['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th');
};
exports.nth = nth;
/**
 * Moment Helper
 *
 */
// prettier-ignore
exports.moment = {
    dayStart: function (m) { return m.startOf('day'); },
    dayEnd: function (m) { return m.endOf('day'); },
    thisWeekStart: function (m) { return m.startOf('isoWeek'); },
    thisWeekEnd: function (m) { return m.endOf('isoWeek'); },
    thisMonthStart: function (m) { return m.startOf('month'); },
    thisMonthEnd: function (m) { return m.endOf('month'); },
    yesterdayStart: function (m) { return m.subtract(1, 'day').startOf('day'); },
    yesterdayEnd: function (m) { return m.subtract(1, 'day').endOf('day'); },
    lastWeekStart: function (m) { return m.subtract(1, 'week').startOf('isoWeek'); },
    lastWeekEnd: function (m) { return m.subtract(1, 'week').endOf('isoWeek'); },
    lastMonthStart: function (m) { return m.subtract(1, 'month').startOf('month'); },
    lastMonthEnd: function (m) { return m.subtract(1, 'month').endOf('month'); }
};
