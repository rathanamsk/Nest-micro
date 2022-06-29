"use strict";
exports.__esModule = true;
exports.PDFMake = void 0;
var fs = require("fs");
var path = require("path");
// tslint:disable-next-line:no-duplicate-imports
var Pdfmake = require("pdfmake"); // ! Warning: do not use "Alt + Shift + O" for organize import
/*
|--------------------------------------------------------------------------
| References
|--------------------------------------------------------------------------
| https://github.com/bpampuch/pdfmake/issues/489
| https://github.com/bpampuch/pdfmake/issues/910
| https://stackoverflow.com/questions/28568816/express-js-how-to-download-base64-string-as-pdf-file
| https://stackoverflow.com/questions/37816542/output-pdf-using-stream
| https://medium.com/@kainikhil/nodejs-how-to-generate-and-properly-serve-pdf-6835737d118e
|
*/
var fontPath = function (font) { return path.resolve('.', 'assets', 'fonts', font); };
var PDFMake = /** @class */ (function () {
    function PDFMake() {
    }
    PDFMake.download = function (opt, res) {
        var filename = opt.filename, document = opt.document;
        this.createPdf(document, function (result) {
            res.setHeader('Content-Length', result.length);
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', "attachment; filename=\"" + filename + "\"");
            res.send(result); // Buffer data
        });
    };
    PDFMake.getDataUrl = function (document, res) {
        this.createPdf(document, function (result) {
            var response = 'data:application/pdf;base64,' + result.toString('base64');
            res.send(response); // sends a base64 encoded string to client
        });
    };
    PDFMake.getBase64 = function (document, res) {
        this.createPdf(document, function (result) { return res.send(result.toString('base64')); }); // sends a base64 encoded string to client
    };
    PDFMake.writeFile = function (document, filename) {
        this.createPdf(document, function (result) {
            return fs.writeFile(filename, result, function (err) { return console.log("write file " + filename, err); });
        });
    };
    PDFMake.createPdf = function (document, callback) {
        var chunks = [];
        // Call instance of pdfmake with fonts parameter
        var pdfmake = new Pdfmake(this.fonts);
        var doc = pdfmake.createPdfKitDocument(document);
        // Listen to event and get chunks
        doc.on('data', function (chunk) { return chunks.push(chunk); });
        doc.on('end', function () { return callback(Buffer.concat(chunks)); });
        doc.end(); // Don't forget to close the event after everything done
    };
    PDFMake.fonts = {
        Roboto: {
            normal: fontPath('Roboto-Regular.ttf'),
            bold: fontPath('Roboto-Medium.ttf'),
            italics: fontPath('Roboto-Italic.ttf'),
            bolditalics: fontPath('Roboto-Italic.ttf')
        },
        Hanuman: {
            normal: fontPath('Hanuman-Regular.ttf'),
            bold: fontPath('Hanuman-Bold.ttf'),
            italics: fontPath('Hanuman-Regular.ttf'),
            bolditalics: fontPath('Hanuman-Bold.ttf')
        },
        KhmerOSmuollight: {
            normal: fontPath('KhmerOSmuollight.ttf'),
            bold: fontPath('KhmerOSmuollight.ttf'),
            italics: fontPath('KhmerOSmuollight.ttf'),
            bolditalics: fontPath('KhmerOSmuollight.ttf')
        }
    };
    return PDFMake;
}());
exports.PDFMake = PDFMake;
