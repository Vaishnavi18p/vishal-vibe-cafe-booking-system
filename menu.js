var drinkIndex=0;
var foodIndex=0;

const step=230;

function slideDrinks(direction)
{
    drinkIndex=drinkIndex+direction;
    if(drinkIndex<0)
        drinkIndex=0;

    document.getElementById("DrinkTrack").style.transform=`translateX(${-drinkIndex*step}px)`;
    

}

function slideFood(direction)
{
    foodIndex=foodIndex+direction;
    if(foodIndex<0)
        foodIndex=0;

    document.getElementById("Foodtrack").style.transform=`translateX(${-foodIndex*step}px)`;
    

}


let selectedItems=[];

function selectItem(name,price)
{
    selectedItems.push({name,price});
    localStorage.setItem("menuItems",JSON.stringify(selectedItems));


    event.currentTarget.classList.toggle("selected");
}


function gobooking()
{
    if(selectedItems.length==0)
    {
         alert("Please select atleast one item");
         return;
    }



    localStorage.setItem("menuItems",JSON.stringify(selectedItems));
    console.log(localStorage.getItem("menuItems"));
    window.location.href="Bookeslot.html";
}

