angular.module("qshop").controller("ProductController",function($scope,$stateParams,ProductsRepository,Cart) {

    $scope.tabPanel = "description";
    $scope.showTab = function(tabName) {
        $scope.tabPanel = tabName;
    }

    $scope.productQty = 1;
    $scope.scade = function() {
        if ($scope.productQty >= 2) {
            $scope.productQty--;
        }
    }
    $scope.creste = function() {
        $scope.productQty++;
    }

$scope.addToCart=function(){
  $scope.product.qty=$scope.productQty;
  Cart.add($scope.product);
};
    $scope.loadProduct = function() {
        console.log("Load product called", $stateParams);
        ProductsRepository.getProductsList().then(function(result) {
            var productId = $stateParams.id;

            for (var i = 0; i < result.data.length; i++) {
                if (result.data[i].id == productId) {
                    $scope.product = result.data[i];
                    break;
                }
            }

        }, function(err) {
            console.error(err);
        });
    };



});
