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
// Setting the user's response to the userInput variable lets us capture the user's input.
let userInput = prompt(menu);