app.factory('teaService', function () {
  return {
    inventory: [],
    add: function (tea, quantity) {
      tea.quantity = quantity
      this.inventory.push(tea);

    }
  }
})
