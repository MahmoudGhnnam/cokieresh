var yourname = prompt("what's you name plz?")

alert("hello " + yourname + " welcome to our site");


function paintIt()
{
    color = prompt("Enter the color you want on the Background???");
    document.body.style.backgroundColor = color;
}
// Function to change webpage background color
function changeBodyBg(color){
    document.body.style.background = color;
}

// Function to change heading background color
function changeHeadingBg(color){
    document.getElementById("heading").style.background = color;
}