var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("cli-table2");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306, 
    user: "root",
    password: "password",
    database: "bamazon"
});

connection.connect();

var display = function() {
    connection.query("Select * FROM Products", function (err, res))
}
// console.log("---------------------")
// console.log("ID | Products | Price")
// console.log("---------------------")
// function showTable() {
//     connection.query("SELECT * FROM Products", function (err, res) {
//         if (err) throw err;
//         console.table(res)
//     })
//     itemChoice();
}
function itemChoice() {
    inquirer.prompt([{
        name: "answer",
        type: "input",
        message: "\nWhat item would you like to purchase? Please enter ID number\n",
        filter: Number
    },
    ])
        .then(function (answers) {
            var productID = answers;
            productCheck(productID);
        });
    function productCheck(answers) {
    }
}