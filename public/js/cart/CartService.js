var app = angular.module ('App');

app.service ('Cart.CartService', [
    //Dependency List'
    '$http',

    // Function to run once all depencies are created
    function ($http){
        var itemList = [];
        //Create the cart object
        var cart = {};

        // Function for removing items from the cart
        cart.removeProduct = function (){

        }

        cart.calulateTota = function () {

        }

        //Function for clearing out the cart.
        cart.clear = function () {

        }

        //Function for adding multiple
        cart.addProducts = function (productList) {

        }

        cart.getItemList = function () {
            return itemList;
        }

        //Function for adding items to the cart
        cart.addProduct = function (product){
            console.log ('Cart is adding product to item: ', itemList);



            // Create a loop to go through the item list and
            // check if we already have the product in the item list
            var item;
            var i = 0;
            var end = itemList.length;
            for (i = 0; i < end; i++){
                //Grab the item out of the item list by the array index
                item = itemList [i];

                // Check if the item has the same id of the product we
                // want to add to the cart
                if (item.product.id == product.id){
                    //increment the quantity by 1
                    item.quantity++;

                    // Calculate a new item total
                    item.total = parseFloat (product.price) * item.quantity;

                    //kick out of the function
                    return;
                }
            }
            //if we are here in the code, it means the item list does not
            // have the products you are looking for...
            itemList.push ({
                quantity: 1,
                total: product.price,
                product:product
            });
        }

        return cart;
    }
])
