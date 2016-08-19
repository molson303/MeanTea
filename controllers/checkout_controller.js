app.controller('checkout_controller', function ($scope, teaService) {
$scope.vw = {}
$scope.vw.teaName = teaService.inventory[0].name;
$scope.vw.teaImage = teaService.inventory[0].imageUrl;
$scope.vw.teas = teaService.inventory;


















 });
