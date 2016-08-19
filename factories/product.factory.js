app.factory('teaService', function () {
  return {
    inventory: [],
    add: function (product, quantity) {
      product.quantity = quantity
      this.inventory.push(product);
      }
  }
})
