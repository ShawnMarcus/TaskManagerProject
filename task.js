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

// For displaying tasks to the user
let showTasks = ``;

// This prompt displays the menu for the user to select an option. 
// Setting the user's response to the userInput variable lets us capture the user's input to use throughout the file.
let userInput = prompt(menu);

// Loops and continues to display as long as the user does not enter CLOSE. It will continue to prompt the user with the menu until the user enters CLOSE to end the Task Manager.
while (userInput !== `CLOSE`){

    // Checks to make sure userInput = TASKS
    if (userInput === `TASKS`){
    // Each item inside the tasks const variable array will be run in this For Of loop. 
    // The For Of loop is used in this case to concatenate each item in the tasks array to the showTasks string variable.   
    for (task of tasks){

    // 
    showTasks += `${task}\n`;
    // Above is the same as showTasks = showTasks + `${task}\n;    

    }
    // Display the current tasks to the user.
    alert(showTasks);

    // This sets the value of the showTasks string variable back to an empty string
    showTasks = "";
}
    // checks to see if the user entered NEW
    if (userInput === `NEW`){
        // Prompts the user to enter a new task and stores their response
       newTask = prompt(`Please enter the new task:`);

       // This alerts the user that the new task has been added.
       alert(`"${newTask}" has been added!`)

       // Adds the user's entry as a new item at the end of the tasks array.
       tasks.push(newTask);
    }

    // this code displays the menu again.
    userInput = prompt(menu);
}

// Alerts the user they have closed the Task Manager.
alert(`Thank you for using Task Manager!`);