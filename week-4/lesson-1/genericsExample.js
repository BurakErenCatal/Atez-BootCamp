//@ts-ignore
// Kalıtım aldığımız interface içerisinde generic bir tip varsa ve bu bir harf ie isimlendirdiyse
// başka bir instance içerisinde kullanılacağı zaman verilecek olan generic tipi belirten harfin farklı olmasının
// bir önemi yoktur, tipin gelecek olan değerini etkilemez.
var Basket = /** @class */ (function () {
    function Basket() {
        this.data = [];
    }
    Basket.prototype.add = function (x) {
        this.data.push(x);
    };
    Basket.prototype.remove = function (y) {
        var index = this.data.indexOf(y);
        if (index > -1) {
            this.data.splice(index, 1);
        }
    };
    return Basket;
}());
