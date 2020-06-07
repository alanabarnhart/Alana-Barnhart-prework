// Prompting the user to enter their name, storing in the variable 'name'
const name = prompt('Please enter your name');

if (name.length > 4) {
    // If name is greater than 4 characters, alert that it is longer than 4 characters
    alert('Your name is greater than 4 characters');
}
else {
    // Otherwise, alert that it is less than 4 characters
    alert('Your name is less than 4 characters');
}