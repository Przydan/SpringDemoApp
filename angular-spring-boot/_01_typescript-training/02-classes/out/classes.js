"use strict";
console.log("start");
console.log("##############################################");
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
var Customer2 = /** @class */ (function () {
    function Customer2(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Customer2.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer2.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (lastName) {
            this._lastName = lastName;
        },
        enumerable: true,
        configurable: true
    });
    return Customer2;
}());
var myCustomer = new Customer();
myCustomer._firstName = "Mario";
myCustomer._lastName = "Calzone";
console.log("customer1: " + myCustomer._firstName + " " + myCustomer._lastName);
var myCustomer2 = new Customer2("Luigi", "Bergamo");
console.log("Customer2: " + myCustomer2.firstName + " " + myCustomer2.lastName);
console.log("##############################################");
console.log("end");