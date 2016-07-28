var cartArray = [];

//var totalprice = 0;

var addToCartBlue = document.querySelector("#blueCart");

addToCartBlue.addEventListener("click", function(event){
  var blueShirtObject = {name: "Save my trees", price: 29};
  cartArray.push(blueShirtObject);

  var item = document.createElement("li");
  item.innerText = blueShirtObject.name;

  var list = document.querySelector("#cart_list");
  list.appendChild(item);

  var item2 = document.createElement("li");
  item2.innerText = blueShirtObject.price;
  list.appendChild(item2);

  var now = new Date ();
  blueShirtObject.timeAdded = now;
  var item3 = document.createElement("li");
  item3.innerText = now;
  list.appendChild(item3);

  var totalprice = 0;

  for (i = 0; i < cartArray.length; i++){
    totalprice = totalprice + cartArray[i].price;
    console.log(cartArray[i].price);
  }

  var total = document.querySelector("#totalprice");
  total.innerText = totalprice;

})

var addToCartPink = document.querySelector("#pinkCart");

addToCartPink.addEventListener("click", function(event){
  var pinkShirtObject = {name: "Nature Lover", price: 19};
  cartArray.push(pinkShirtObject);

  var item = document.createElement("li");
  item.innerText = pinkShirtObject.name;

  var list = document.querySelector("#cart_list");
  list.appendChild(item);

  var item2 = document.createElement("li");
  item2.innerText = pinkShirtObject.price;
  list.appendChild(item2);

  var now = new Date ();
  pinkShirtObject.timeAdded = now;
  var item3 = document.createElement("li");
  item3.innerText = now;
  list.appendChild(item3);

  var totalprice = 0;

  for (i = 0; i < cartArray.length; i++){
      totalprice = totalprice + cartArray[i].price;
      console.log(cartArray[i].price);
  }

  var total = document.querySelector("#totalprice");
  total.innerText = totalprice;
})

var addToCartYellow = document.querySelector("#yellowCart");

addToCartYellow.addEventListener("click", function(event){
  var yellowShirtObject = {name: "Forest Walk", price: 39};
  cartArray.push(yellowShirtObject);

  var item = document.createElement("li");
  item.innerText = yellowShirtObject.name;

  var list = document.querySelector("#cart_list");
  list.appendChild(item);

  var item2 = document.createElement("li");
  item2.innerText = yellowShirtObject.price;
  list.appendChild(item2);

  var now = new Date ();
  yellowShirtObject.timeAdded = now;
  var item3 = document.createElement("li");
  item3.innerText = now;
  list.appendChild(item3);

  var totalprice = 0;

  for (i = 0; i < cartArray.length; i++){
      totalprice = totalprice + cartArray[i].price;
      console.log(cartArray[i].price);
  }

  var total = document.querySelector("#totalprice");
  total.innerText = totalprice;
})







var checkout = document.querySelector("#b_total");
checkout.addEventListener("click", function(event){
    var confirm = window.confirm("Please Confirm Your Purchase");
})
