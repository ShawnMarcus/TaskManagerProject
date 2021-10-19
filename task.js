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

const tasks = [
    `Charge MacBook`,
    `Master JavaScript`
];

// For displaying tasks to the user
let showTasks = ``;

// For storing value of a new task
let newTasks;

// For storing the number of the task to be removed
let num;

// For storing the value of the removed task
let removed;

// This prompt displays the menu for the user to select an option. 
// Setting the user's response to the userInput variable lets us capture the user's input to use throughout the file.
// Using the toUpperCase method to convert the user's response to uppercase.
let userInput = prompt(menu).toUpperCase();

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

       // Continues looping and prompting the user until something entered (If the user does not type anything and just clicks OK, then the value returned is an empty string.)
       while (newTask === ``){
        newTask = prompt(`Please enter the new task:`);
       }

       // This alerts the user that the new task has been added.
       alert(`"${newTask}" has been added!`)

       // Adds the user's entry as a new item at the end of the tasks array.
       tasks.push(newTask);
    }
        // Checks to see if the user entered REMOVE
        if (userInput === `REMOVE`){
           
            // Concatenates each task/item in the tasks arrary to the showTasks string variable. Also, sets/displays a number for each task.
            // Starts at zero because we are using an array, and an array's index starts at 0.
            for(i = 0; i < tasks.length; i++){

                // Adding 1 to i (adding 1 to index) so the number will begin displaying at 1 instead of 0. also, using \n to create a new line (line break) to separate tasks.
                showTasks += `${i + 1}. ${tasks[i]}\n`;
                alert(showTasks);
            }
            
            // Prompts the user to enter a number and stores that response to the num variable. 
            // Also, using \n to create a new line break.
            // Subtracting 1 from the user's entry so that it matches the index of the item that the user wants to remove from the tasks array.
            num = prompt(`Please enter a number to remove:\n${showTasks}`) - 1;

            
            while (Math.floor(num) !== num || num < 0 || num >= task.length || !num){
                alert( `Not a valid entry`);
                num = prompt(`Please enter a number to remove:\n${showTasks}`) - 1;
            }
            
            // Removes the task/item the user selects (from the task array). Also, sets the task/item that was removed to the removed variable.
            // splice returns the value that is removed as an item in the array.
            removed = tasks.splice(num, 1);

            // alerts user with the task/item that has been removed (Using the index on the "removed" variable because splice returns the value that is removed as an item in an array.)
            alert(`"${removed[0]}" has been removed`);
            
            // Sets the value of the showTasks string variable back to an empty string.
            showTasks = ``;
        }
    // this code displays the menu again.
    userInput = prompt(menu).toUpperCase();
}

// Alerts the user they have closed the Task Manager.
alert(`Thank you for using Task Manager!`);