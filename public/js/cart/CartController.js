var app = angular.module ('App');

app.controller ('Cart.CartController', [
    //Dependency List'
    '$scope','$http','$state', 'Cart.CartService',

    // Callback function to create controller
    function ($scope, $http, $state, cartService){
        console.log (cartService.getItemList());
    }
]);
