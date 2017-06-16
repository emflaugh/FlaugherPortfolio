// Time of Day Greeting//

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = "Good Evening!";
} else if (hourNow > 12) {
  greeting = "Good Afternoon!";
} else if (hourNow > 0) {
  greeting = "Good Morning!";
} else {
  greeting = "Welcome!";
}

document.write('<h1>' + greeting + '</h1>');

// the function which handles the input field logic
function getUserName() {
    var nameField = document.getElementById('nameField').value;
    var result = document.getElementById('result');

    if (nameField.length < 3) {
        result.textContent = 'Name must contain at least 3 characters';
        //alert('Username must contain at least 3 characters');
    } else {
        result.textContent = 'Thank you ' + nameField + '! I look forward to hearing from you!';
        //alert(nameField);
    }
}
// use an eventlistener for the event
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getUserName, false);
