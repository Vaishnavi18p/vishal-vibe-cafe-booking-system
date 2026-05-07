window.onload=function()
{
    
    let selectedItems = [];
    const seat=localStorage.getItem("selectedSeat");
    const item=JSON.parse(localStorage.getItem("menuItems")) || [];

    document.getElementById("seatInput").value= seat || "";
    document.getElementById("itemInput").value= JSON.stringify(item);

    let total=0;
    const list=document.getElementById("orderList");

    item.forEach(food=>{
        const li=document.createElement("li");
        li.innerText=food.name + " - " + food.price;
        list.appendChild(li);
        total +=food.price;
    })



    document.getElementById("totalAmount").innerText=total;
    localStorage.setItem("totalAmount",total);
    document.getElementById("totalInput").value = total;
   




};

function validateForm()
{
    const name=document.getElementById("name").value.trim();
    const phone=document.getElementById("phone").value.trim();
    const date=document.getElementById("date").value;
    const time=document.getElementById("time").value;

    if(!name || !phone || !date || !time)
    {
        alert("Please fill all details");
        return false;
    }

     if (!paymentDone) {
    alert("Please complete payment first");
    return false;
}

    return true;
}

let paymentDone=false;

function payUpi()
{
    const total=localStorage.getItem("totalAmount");

    const upiID="9999999999@ybl";
    const name="Vishal Vibe Cafe";


    const url = `upi://pay?pa=${upiID}&pn=${name}&am=${total}&cu=INR`;

    window.location.href=url;

    setTimeout(()=>{
         paymentDone=true;
         document.getElementById("payStatus").innerText="Payment Successfull!";
    
    },4000)

}