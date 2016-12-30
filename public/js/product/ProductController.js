var app = angular.module ('App');

app.controller ('Product.ProductController',[
    //Dependency List
    '$scope', '$http', '$state',

    // Callback function to create controller
    function ($scope, $http, $state){
        $scope.product = {};

        $scope.create = function () {

            //Make a call to the json server to save the product
            $http({
                method: 'POST',
                url: '/products',
                data: $scope.product
            })
            .success (function(response){
                console.log ('Product was saved');
            })
        }

        $scope.readAll = function () {
            //Make call to the json server to read all of the products
            $http ({
                method: "GET",
                url: '/products'
            })
            .success (function (response){
                console.log ('Products were read in');
                $scope.productList = response;
            })
        }

        $scope.addToCart = function (product){
            console.log ('This is the product: ', product)
        }

        // Setup function to run when controller is created
        function setup () {
            if ($state.current.name == "product") {
                // Read in the list of products from the database
                $scope.readAll();
            }
        }

        setup ();
    }
])
