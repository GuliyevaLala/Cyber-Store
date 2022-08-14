$(document).ready(function () {

    
    $(".cart").hover(function(){
        let basket = JSON.parse(localStorage.getItem("basket"))
        if(basket.length == 0){
    
            $(".cardalert").css("opacity","100%")
            
        }
        else{
          
            $(".basketList").css("height", "280px")
            
        }
        }
       
        ,function(){
            $(".cardalert").css("opacity","0%")
            $(".basketList").css("height", "0%")
           
        }
    
        
    )
    
    // $(".cart-total").hover(function(){
    //     $(".cart-total").css("height","250px")}
    //     ,function(){
    //         $(".cart-total").css("height","0px")
    //     }
    // )

    $(".basketList").hover(function () {
        $(this).css("height", "280px")
    }, function () {
        $(this).css("height", "0%")
    })

    

    $(".addToCart").click(function(){

        console.log("clicked")
        
        if(!localStorage.getItem("basket"))
        {
            localStorage.setItem("basket",JSON.stringify([]))
        }

        let basket = JSON.parse(localStorage.getItem("basket"))

        let name = $(this).parent().prev().text()
        let price = $(this).children().last().children().first().text()
        let img = $(this).parent().prev().prev().children().last().attr("src")
        let dataId = $(this).parent().parent().attr("data-id")
        let product = {
            id : dataId,
            name,
            price,
            img,
            count : 1
        }

        let existedProduct = basket.find((prod)=> prod.id == product.id)

        if(existedProduct){
            existedProduct.count++
        }
        else{
            basket.push(product)
        }

        localStorage.setItem("basket",JSON.stringify(basket))

        console.log(product)

        getProducts()
        totalPrice()
        cardCounter()
    })
    getProducts()
    totalPrice();
    cardCounter();
    function getProducts(){

        if(!localStorage.getItem("basket"))
        {
            localStorage.setItem("basket",JSON.stringify([]))
        }

        let basket = JSON.parse(localStorage.getItem("basket"))

        let listProducts = document.querySelector(".listProducts");
        listProducts.innerHTML = "";

        basket.forEach((product) => {
            listProducts.innerHTML += `
                                    <div class="product">
                                        <div class="image">
                                            <img src="${product.img}">
                                        </div>
                                        <div>
                                            <p class="product-name">${product.name}</p>
                                            <p>
                                                <span class="product-count">
                                                    ${product.count}
                                                </span>
                                                X
                                                <span class="product-price">
                                                    ${product.price}$
                                                </span>
                                            </p>
                                        </div>
                                        <div>
                                            <div>
                                                <button class="btn-product-delete" data-id="${product.id}">x</button>
                                            </div>
                                        </div>
                                    </div>
                                    `
        })
        deleteProd();
        

    }

    function totalPrice(){
        if(!localStorage.getItem("basket"))
        {
            localStorage.setItem("basket",JSON.stringify([]))
        }

        let basket = JSON.parse(localStorage.getItem("basket"))
        let Total = basket.reduce((total, product) => {
            return total += product.count * product.price
        }, 0)

        $(".priceText").children().last().text(Total)
        $(".total-price").text(Total)
    }

    function cardCounter(){
        if(!localStorage.getItem("basket"))
        {
            localStorage.setItem("basket",JSON.stringify([]))
        }

        let basket = JSON.parse(localStorage.getItem("basket"))

        let totalCount = 0

        basket.forEach((p)=>{
            totalCount++
        })

        $("#item-count").text(totalCount)
    }

   function deleteProd(){

    $(".btn-product-delete").click(function(e){
        // let id = $(this).attr("data-id");
        const btn = e.target;
        const productId = $(btn).attr("data-id");
        let basket = JSON.parse(localStorage.getItem("basket"))
        let filtered = basket.filter((prod) => prod.id !== productId);

      
        
        localStorage.setItem("basket",JSON.stringify(filtered))
        cardCounter();
        totalPrice();
        getProducts();

    })
   }

   $(".types").click(function(e){
    e.preventDefault();
    let products = document.querySelectorAll(".products .product")
    let type = $(this).attr("data-id")

   

    products.forEach((p)=>{
        $(p).css("display","none")
    })

    let stayed = Array.from(document.getElementsByClassName(type))
    console.log(stayed)

stayed.forEach((p)=>{
    $(p).css("display","block")

})
   })   
    
    })