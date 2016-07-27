angular.module("qshop").controller("ProductsController", function($scope,ProductsRepository) {

    ProductsRepository.getProductsList().then(function(result) {
        $scope.products = result.data;
        console.log('Products', result.data);
        var produs = {
            "picture": "../assets/images/products/product-3.jpg",
            "name": "New product",
            "price": 299,
            "onSale": false,
            "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae"

        };

        $scope.products.push(produs);


    }, function(err) {
        console.error(err);
    });
});
