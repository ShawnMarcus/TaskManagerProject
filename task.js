// Task Manager

// Build out menu first
// Using a Template Literal because it recognizes line breaks and spaces.
const menu = `TASK MANAGER

What would you like to do? (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add New Task
"REMOVE" - Remove a Task
"CLOSE" - Close the Task Manager

`;

// This prompt displays the menu for the user to select an option. 
// Setting the user's response to the userInput variable lets us capture the user's input to use throughout the file.
let userInput = prompt(menu);

// Loops and continues to display as long as the user does not enter CLOSE. It will continue to prompt the user with the menu until the user enters CLOSE to end the Task Manager.
while (userInput !== `CLOSE`){
    // this code displays the menu again.
    userInput = prompt(menu);
}

// Alerts the user they have closed the Task Manager.
alert(`Thank you for using Task Manager!`);