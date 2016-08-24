app.factory('teaService', function () {
  return {
    inventory: [],
    add: function (product, quantity) {
      product.quantity = quantity
      this.inventory.push(product);
    },
    getOrderTotal: function (){
      total = []
      for (var i = 0; i < this.inventory.length; i++) {
        var price = this.inventory[i].price;
        var quantity = this.inventory[i].quantity;
        var subTotal = Number(price * quantity)
        total.push(subTotal)
        }
      var orderTotal = total.reduce(function (a, b) {
        return a+=b;
      })
      return orderTotal
    }
  }

})
