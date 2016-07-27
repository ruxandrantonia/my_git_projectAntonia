var qshop = angular.module("qshop", ['ui.router']);

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
