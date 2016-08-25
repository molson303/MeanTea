app.controller('CheckoutController', function ($scope, teaService) {
$scope.inventory = teaService.inventory;
$scope.orderTotal = teaService.getOrderTotal();

$scope.deleteItem = function(item) {
   var index = $scope.inventory.indexOf(item);
  $scope.inventory.splice(index, 1);
  $scope.orderTotal = teaService.getOrderTotal();

}


// var total = $scope.inventory.map(function (item) {
//   return Number(item.price * item.quantity);
// }).reduce(function (a, b) {
//   return a += b;
// })   ANOTHER WAY TO DO THIS

// for each item calucate item.price * item.quantity
// add amout together to get total
//display to view


// var index = $scope.inventory.indexOf(delete)
// console.log(index);


});
