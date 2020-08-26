function greeting(){
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

document.write('<h3>'+greeting()+'</h3>');

var yourname = prompt("what's you name plz?")

alert("hello " + yourname + " welcome to our site");

var r = confirm("Press ok");

alert("clik on clik here to pay to change color page :)");

function changeBg() {
    newCol = prompt("What colour would you like the page's background to be?");
    document.body.style.background=newCol;
    }