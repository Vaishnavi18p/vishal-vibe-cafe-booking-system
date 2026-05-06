window.onload=function()
{
    alert("JS LOADED");

    const seat=localStorage.getItem("selectedSeat");
    const item=localStorage.getItem("menuItems");

    document.getElementById("seatInput").value= seat || "";
    document.getElementById("itemInput").value= item || "";


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

   



    return true;
}

const items=JSON.parse(localStorage.getItem("menuItems")) || [];
let total=0;
items.forEach(item=>{
    total=total+Number(item.price);
    
});

document.getElementById("totalAmount").innerText=total;
