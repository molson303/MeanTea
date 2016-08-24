app.controller('CheckoutController', function ($scope, teaService) {
$scope.inventory = teaService.inventory;
$scope.orderTotal = teaService.getOrderTotal();


 });
