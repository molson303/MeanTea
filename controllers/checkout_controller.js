app.controller('checkout_controller', function ($scope, teaService) {
$scope.vw = {}

$scope.inventory = teaService.inventory;
console.log("*********");
console.log($scope.inventory);



 });
