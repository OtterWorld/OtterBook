function Shop() {
  this.basket = [];
}

Shop.prototype.addItem = function (item: string) {
  this.basket = this.basket.concat([item]);
};

Shop.prototype.removeItem = function (item: string) {
  this.basket = this.basket.filter(function (basket) {
    return item !== basket
  });
};

var mylist = new Shop();

mylist.addItem('meat')

console.log(mylist.groceries)


class Shop2 {
  basket2: string[];
  constructor() {
    this.basket2 = []
  }
  addItem(item: string) {
      this.basket2 = [...this.basket2, item]
  }
}