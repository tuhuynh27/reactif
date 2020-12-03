"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComponent = void 0;
var selector_1 = require("./selector");
var makeFuncReactive_1 = require("./makeFuncReactive");
function createComponent(selector, fn) {
    makeFuncReactive_1.makeFuncReactive(function () {
        selector_1.$(selector).innerHTML = fn();
    });
}
exports.createComponent = createComponent;
