function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="Adarsh" && password=="123456789")
{
    alert("login succesfuly");
    return false;
}
else{
    alert("login field");
}}
let items = document.querySelectorAll('#btn')
console.log(items)
items.forEach((item)=>{
    item.addEventListener('click', orderFood)
})


let item = document.querySelectorAll('#help-btn-2')
console.log(items)
items.forEach((item)=>{
    item.addEventListener('click', ordermoreitem)
})


function orderFood(e){
    let foodItems = document.getElementById('foodItems');
    let orderSuccessfull = document.getElementById('orderSuccessful');
    foodItems.style.display = 'none';
    orderSuccessfull.style.display = 'block';
    
    // manage order details
    let GST_PERCENTAGE = .18;
    let name =  e.target.dataset.name;
    let price = parseInt(e.target.dataset.price) ;
    let gst = price*GST_PERCENTAGE;
    let deliveryCharge = price < 140 ? 40 : 0;
    let total = price + gst + deliveryCharge;
    document.getElementById('name').innerText = name;
    document.getElementById('price').innerText = price;
    document.getElementById('gst').innerText = gst;
    document.getElementById('deliveryCharge').innerText = deliveryCharge;
    document.getElementById('total').innerText = total;
    
}
