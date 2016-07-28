var cartArray = [];

//var shirtObject = {name: name, price: price, datetime: datetime};

var addToCart = document.querySelector(".fa-shopping-cart");

addToCart.addEventListener("click", function(event){
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
  }

  var total = document.querySelector("#totalprice");
  total.innerText = totalprice;

})



var checkout = document.querySelector("#b_total");
checkout.addEventListener("click", function(event){
    var confirm = window.confirm("Please Confirm Your Purchase");
})



/*
<script>
  var arr = [];
  var form = document.querySelector("form");
  form.addEventListener("submit", function(event){
    event.preventDefault();
    var name = form.querySelector("input[type='text']").value;
    var urgency = form.querySelector("input[type='checkbox']").checked;
    var list = document.querySelector("ul");
    var item = document.createElement("li");
    item.innerText = name;
    if(urgency == true){
      var note = document.createElement("strong");
      note.innerText = "(URGENT)";
      item.appendChild(note);
    }
    list.appendChild(item);



    var myObject = {todo: name, isUrgent: urgency};
    arr.push(myObject);

  })

  var save_todos = document.querySelector("#save");

  save_todos.addEventListener("click", function(event){

    console.log(arr);
  })

</script>
*/
