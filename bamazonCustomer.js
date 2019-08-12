var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table2");

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
});
console.log(connection)
// I can't get the database to connect
connection.connect();

var display = function () {
    connection.query("Select * FROM Products", function (err, res) {
        if (err) throw err;
        console.log("------------------------------");
        console.log("Welcome to the Bamazon");
        console.log("------------------------------");
        console.log("------------------------------");
        console.log("Please Pick Your Product");
        console.log("------------------------------");
        for (i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
        }
    });
    var table = new Table({
        head: ['Item ID', 'Product Name', 'Department Name', 'Price', 'Stock Quantity'],
        colWidths: [10, 50, 50, 10, 10]
    });
    console.log(table.toString());
    console.log("");
};
// console.log("---------------------")
// console.log("ID | Products | Price")
// console.log("---------------------")
// function showTable() {
//     connection.query("SELECT * FROM Products", function (err, res) {
//         if (err) throw err;
//         console.table(res)
//     })
//     itemChoice();
// }
// var shopping + function {
//     inquirer.prompt({
//         name: "answerToBuy",
//         type: "input",
//         message: "What item would you like to buy? Please enter the corresponding Item ID number",
//         filter: Number
//     },
//     ).then(function (answer)) {
//         var selection.answerToBuy;
        
//     }
    
    
// }

// Can't get database with my values to display
display();