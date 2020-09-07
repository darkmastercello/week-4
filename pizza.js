let destination = document.getElementById("home")
let floor = document.getElementById("floor")
let crust = document.getElementById("exampleRadios1").value
let size = document.getElementById("size").value
let toppings = document.getElementById("top").value

$(document).ready(function () {
    function Pizza(type, crust, toppings, size) {
        this.type = type;
        this.crust = crust;
        this.toppings = toppings;
        this.size = size;
    }
    let total = 0;
    let newOrder = [];

    Pizza.prototype.toppingsPrice = function () {
        if (this.size === "large") {
            if (this.toppings === "Pineapple") {
                return 250;
            } else if (this.toppings === "extracheese") {
                return 150;
            } else {
                return 200;
            }
        } else if (this.size === "medium") {
            if (this.toppings === "Pineapple") {
                return 200;
            } else if (this.toppings === "extracheese") {
                return 150;
            } else {
                return 100;
            }
        } else {
            if (this.topping === "Pineapple") {
                return 100;
            } else if (this.toppings === "extracheese") {
                return 50;
            } else {
                return 30;
            }
        }
    };


    Pizza.prototype.crustPrice = function () {
        if (this.crust === "thick") {
            return 150;
        } else {
            return 0;
        }
    };

    Pizza.prototype.myPizzaPrice = function () {
        if (this.size === "large") {
            if (this.type === "meatdeluxe") {
                return 2000;
            } else if (this.type === "Periperi") {
                return 1500;
            } else if (this.type === "Hawaiian") {
                return 1000;
            } else {
                return 900;
            }
        } else if (this.size === "medium") {
            if (this.type === "meatdeluxe") {
                return 850;
            } else if (this.type === "Periperi") {
                return 950;
            } else if (this.type === "Hawaiian") {
                return 850;
            } else {
                return 750;
            }
        } else {
            if (this.type === "meatdeluxe") {
                return 600;
            } else if (this.type === "Periperi") {
                return 650;
            } else if (this.type === "Hawaiian") {
                return 750;
            } else {
                return 550;
            }
        }
    }
    Pizza.prototype.crustPrice = function () {
        if (this.crust === "thick") {
            return 150;
        } else if (this.crust === "thin") {
            return 100;
        } else {
            return 50;
        }
    }
    Pizza.prototype.myPizzaPrice = function () {
        return this.crustPrice() + this.mypizzaPrice() + this.toppingsPrice()
    }
})