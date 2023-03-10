"use strict";
exports.__esModule = true;
exports.EmailRegex = void 0;
var EmailRegex = /** @class */ (function () {
    function EmailRegex() {
        this.REGEX = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    }
    EmailRegex.prototype.validate = function (regex) {
        return this.REGEX.test(regex);
    };
    return EmailRegex;
}());
exports.EmailRegex = EmailRegex;
