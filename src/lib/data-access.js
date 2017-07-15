// functionality
  // get a single record from data store

  // get a set of records from data store => specify size of set
export function getCards(num = 1) {
    return [
        {
            id: "1",
            topic: "C++",
            type: "multiple-answer",
            text: "What are the correct ways to initialize a variable?",
            answers: ["int i = 10;", "auto i = 4.0;"],
            choices: ["var i int8 = 0", "var i = 20;", "i = 0"]
        },{
            id: "2",
            topic: "C++",
            type: "multiple-choice",
            text: "What variable initialization causes a compiler error if var2 is a larger data type?",
            answers: ["int var1{ var2 };"],
            choices: ["int var1 = var2;"]
        },{
            id: "3",
            topic: "C#",
            type: "multiple-choice",
            text: "What is the data type and value of var1 after the assignment: var1 = 7/2.0",
            answers: ["double, 3.5"],
            choices: ["int, 3", "int, 4", "double, 3.0"]
        },{
            id: "4",
            topic: "C#",
            type: "multiple-choice",
            text: "What is the data type and value of var1 after the assignment: var1 = 7/2",
            answers: ["int, 3"],
            choices: ["double, 3.5", "int, 4", "double, 3.0"]
        },{
            id: "5",
            topic: "C#",
            type: "multiple-choice",
            text: "What is the data type and value of var1 after the assignment: var1 = (double)(7/2)",
            answers: ["double, 3.0"],
            choices: ["double, 3.5", "int, 4", "int, 3"]
        },{
            id: "6",
            topic: "C#",
            type: "short-answer",
            text: "Write a statement which will allow use of all System.Console functions without having to write System.Console.x",
            answers: ["using static System.Console;"],
        }
    ];
}
  // save a new record to data store
export function saveCard(card) {
    
}