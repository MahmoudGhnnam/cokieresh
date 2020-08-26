function greeting() {
    var userChoice = prompt('do you have Diabetes')
    var result;//
    if (userChoice == 'yes') {
        greeting = 'you cant buy cookies!';
    } else if (userChoice == 'no') {
        greeting = 'you can buy cookies :)';
    } else {
        greeting = 'some thing wrong!';
    }

    return greeting;
}
document.write('<h3>' + greeting() + '</h3>');

function showOrder() {
    var userInput = prompt('what would you like to order nutella cookies or classic cookies or lotus cookies');
    while (userInput !== "nutella cookies" && userInput !== "classic cookies" && userInput !== "lotus cookies") {
        userInput = prompt('you should choose from thi three:) nutella cookies or classic cookies or lotus cookies');
    }

    var userOrder = "";
    var numberOfImage = prompt("how many cookies do you want to buy");

    for (var count = 0; count < numberOfImage; count++) {
        if (userInput == "nutella cookies") {

            userOrder = userOrder + "<img src='img/nutella.jpg' alt=''>";
            console.log(userOrder);
        }
        else if (userInput == "classic cookies") {

            userOrder = userOrder + "<img src='img/classic.jpg' alt=''>";
            console.log(userOrder);
        }
        else if (userInput == "lotus cookies") {

            userOrder = userOrder + "<img src='img/lotus.jpg' alt=''>";
            console.log(userOrder);
        }
    }
    return userOrder;
}
document.write('<h3>' + showOrder() + '</h3>');



var yourname = prompt("what's your name plz?")

alert("hello " + yourname + " welcome to our site");

var r = confirm("Press ok");

function changeBg() {
    newCol = prompt("What colour would you like the page's background to be?");
    document.body.style.background = newCol;
}