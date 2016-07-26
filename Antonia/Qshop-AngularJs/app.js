var qshop = angular.module("qshop", ['ui.router']);
qshop.config(["$locationProvider", function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);
qshop.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");


    $stateProvider
        .state('default', {
            url: "/",
            templateUrl: "templates/firstpage.html"

        })

    .state('contact', {
        url: '/contact',
        templateUrl: 'templates/contact.html'
    })

    .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'templates/register.html'
        })
        .state('shop', {
            url: '/shop',
            templateUrl: 'templates/shop.html'
        })
        .state('product', {
            url: '/product/:id',
            templateUrl: 'templates/product.html'
        });
});



qshop.controller("MainController", function($scope,$stateParams,ProductsRepository) {

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

$scope.loadProduct = function() {
        console.log("Load product called", $stateParams);
        ProductsRepository.getProductsList().then(function(result) {
                    var productId = $stateParams.id;

                    for (var i = 0; i < result.data.length; i++){
                      if(result.data[i].id==productId)
                      {
                      $scope.product=result.data[i];
                      break;
                    }
                  }

                }, function(err) {
                    console.error(err);
});
};
});




qshop.factory("ProductsRepository", function($http) {

    var repo = {};

    repo.getProductsList = function() {
        return $http.get('/data/products.json');
    };
    return repo;
});
