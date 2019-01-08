// from data.js
var tableData = data;

// YOUR CODE HERE!

//Selecting table
var table = d3.select("table");
var tbody = d3.select("tbody");

//Populating the table with a function
function addData(tableData){
    tableData.forEach((attr) => {
        var row = tbody.append("tr");
        Object.entries(attr).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
};
addData(tableData);
// All data from data.js now appears on the webpage 

//Implementing the filter

var dateFilter = d3.select("#filter-btn");