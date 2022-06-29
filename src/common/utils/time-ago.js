"use strict";
exports.__esModule = true;
exports.TimeAgo = void 0;
var moment = require("moment-timezone");
var UnitOfTimeAgo;
(function (UnitOfTimeAgo) {
    UnitOfTimeAgo["TODAY"] = "TODAY";
    UnitOfTimeAgo["YESTERDAY"] = "YESTERDAY";
    UnitOfTimeAgo["THIS_WEEK"] = "THIS-WEEK";
    UnitOfTimeAgo["PAST_WEEK"] = "PAST-WEEK";
    UnitOfTimeAgo["LAST_MONTH"] = "LAST-MONTH";
    UnitOfTimeAgo["PAST_MONTH"] = "PAST-MONTH";
    UnitOfTimeAgo["LAST_YEAR"] = "LAST-YEAR";
    UnitOfTimeAgo["PAST_YEAR"] = "PAST-YEAR";
})(UnitOfTimeAgo || (UnitOfTimeAgo = {}));
var TimeAgo = /** @class */ (function () {
    function TimeAgo() {
    }
    /**
     * Calculate time ago from a date
     */
    TimeAgo.get = function (date, type, timezone) {
        var unit = this.getUnitOfTimeAgo(date, timezone);
        var format = this.DATE_TYPE[unit][type];
        // ! only this case, we use relative time
        if (type === 'NOTIFICATION' && unit === UnitOfTimeAgo.TODAY)
            return moment(date).fromNow();
        return moment(date).format(format);
    };
    TimeAgo.getUnitOfTimeAgo = function (date, timezone) {
        var now = moment(date).tz(timezone || 'Asia/Bangkok');
        if (this.isToday(now))
            return UnitOfTimeAgo.TODAY; // prettier-ignore
        if (this.isYesterday(now))
            return UnitOfTimeAgo.YESTERDAY; // prettier-ignore
        if (this.isCurrentWeek(now))
            return UnitOfTimeAgo.THIS_WEEK; // prettier-ignore
        if (this.isPastWeek(now))
            return UnitOfTimeAgo.PAST_WEEK; // prettier-ignore
        if (this.isLastMonth(now))
            return UnitOfTimeAgo.LAST_MONTH; // prettier-ignore
        if (this.isPastMonth(now))
            return UnitOfTimeAgo.PAST_MONTH; // prettier-ignore
        if (this.isLastYear(now))
            return UnitOfTimeAgo.LAST_YEAR; // prettier-ignore
        return UnitOfTimeAgo.PAST_YEAR;
    };
    TimeAgo.isToday = function (date) {
        var start = moment().startOf('day');
        var end = moment().endOf('day');
        return date.isBetween(start, end, undefined, '[]');
    };
    TimeAgo.isYesterday = function (date) {
        var start = moment().subtract(1, 'day').startOf('day'); // prettier-ignore
        var end = moment().subtract(1, 'day').endOf('day'); // prettier-ignore
        return date.isBetween(start, end, undefined, '[]');
    };
    TimeAgo.isCurrentWeek = function (date) {
        var start = moment().startOf('isoWeek');
        var end = moment().endOf('isoWeek');
        return date.isBetween(start, end, undefined, '[]');
    };
    /**
     * The last 4 weeks until last week.
     */
    TimeAgo.isPastWeek = function (date) {
        var start = moment().subtract(4, 'weeks').startOf('isoWeek'); // prettier-ignore
        var end = moment().subtract(1, 'week').endOf('isoWeek'); // prettier-ignore
        return date.isBetween(start, end, undefined, '[]');
    };
    TimeAgo.isLastMonth = function (date) {
        var start = moment().subtract(1, 'month').startOf('month'); // prettier-ignore
        var end = moment().subtract(1, 'month').endOf('month'); // prettier-ignore
        return date.isBetween(start, end, undefined, '[]');
    };
    /**
     * The last 12 months until last 2 months
     */
    TimeAgo.isPastMonth = function (date) {
        var start = moment().subtract(12, 'months').startOf('month'); // prettier-ignore
        var end = moment().subtract(2, 'months').endOf('month'); // prettier-ignore
        return date.isBetween(start, end, undefined, '[]');
    };
    TimeAgo.isLastYear = function (date) {
        var start = moment().subtract(1, 'year').startOf('year'); // prettier-ignore
        var end = moment().subtract(1, 'year').endOf('year'); // prettier-ignore
        return date.isBetween(start, end, undefined, '[]');
    };
    // prettier-ignore
    TimeAgo.DATE_TYPE = {
        'TODAY': { POST: 'h:mm A', NOTIFICATION: '', OTHER: 'h:mm A' },
        'YESTERDAY': { POST: 'ddd [at] h:mm A', NOTIFICATION: '[Yesterday at] h:mm A', OTHER: 'ddd [at] h:mm A' },
        'THIS-WEEK': { POST: 'ddd [at] h:mm A', NOTIFICATION: 'ddd [at] h:mm A', OTHER: 'ddd [at] h:mm A' },
        'PAST-WEEK': { POST: 'MMM D [at] h:mm A', NOTIFICATION: 'MMM D [at] h:mm A', OTHER: 'MMM D [at] h:mm A' },
        'LAST-MONTH': { POST: 'MMM D, YYYY [at] h:mm A', NOTIFICATION: 'MMM D, YYYY [at] h:mm A', OTHER: 'MMM D, YYYY [at] h:mm A' },
        'PAST-MONTH': { POST: 'MMM D, YYYY [at] h:mm A', NOTIFICATION: 'MMM D, YYYY', OTHER: 'MMM D, YYYY' },
        'LAST-YEAR': { POST: 'MMM D, YYYY [at] h:mm A', NOTIFICATION: 'MMM D, YYYY', OTHER: 'MMM D, YYYY' },
        'PAST-YEAR': { POST: 'MMM D, YYYY [at] h:mm A', NOTIFICATION: 'MMM D, YYYY', OTHER: 'MMM D, YYYY' }
    };
    return TimeAgo;
}());
exports.TimeAgo = TimeAgo;
