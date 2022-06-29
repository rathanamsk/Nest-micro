"use strict";
exports.__esModule = true;
exports.CryptoService = void 0;
var crypto = require("crypto");
/**
 * Encryption and Decryption
 * @see https://cryptobook.nakov.com
 */
var CryptoService = /** @class */ (function () {
    function CryptoService(config) {
        this.config = config;
    }
    /**
     * Encryption using `aes-256-gcm`
     * @see https://gist.github.com/AndiDittrich/4629e7db04819244e843
     */
    CryptoService.prototype.encrypt = function (text) {
        // random initialization vector
        var iv = crypto.randomBytes(16);
        // random salt
        var salt = crypto.randomBytes(64);
        // derive key: 32 byte key length - in assumption the masterkey is a cryptographic and NOT a password there is no need for
        // a large number of iterations. It may can replaced by HKDF
        var key = crypto.pbkdf2Sync(this.config.CRYPTO_ENCRYPTION_KEY, salt, 2145, 32, 'sha512');
        // AES 256 GCM Mode
        var cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
        // encrypt the given text
        var encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
        // extract the auth tag
        var tag = cipher.getAuthTag();
        // generate output
        return Buffer.concat([salt, iv, tag, encrypted]).toString('base64');
    };
    /**
     * Decryption using `aes-256-gcm`
     */
    CryptoService.prototype.decrypt = function (cipherText) {
        // base64 decoding
        var bData = Buffer.from(cipherText, 'base64');
        // convert data to buffers
        var salt = bData.slice(0, 64);
        var iv = bData.slice(64, 80);
        var tag = bData.slice(80, 96);
        var text = bData.slice(96);
        // derive key using; 32 byte key length
        var key = crypto.pbkdf2Sync(this.config.CRYPTO_ENCRYPTION_KEY, salt, 2145, 32, 'sha512');
        // AES 256 GCM Mode
        var decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
        decipher.setAuthTag(tag);
        // encrypt the given text (NOTE: text as any)
        var decrypted = decipher.update(text, 'base64', 'utf8') + decipher.final('utf8');
        return decrypted;
    };
    /**
     * NodeJS create md5 hash from string
     */
    CryptoService.prototype.createMD5Hex = function (data) {
        return crypto.createHash('md5').update(data).digest('hex');
    };
    return CryptoService;
}());
exports.CryptoService = CryptoService;
