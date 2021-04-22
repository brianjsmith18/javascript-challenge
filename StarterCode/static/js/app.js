// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn");

button.on("click", runEnter); 

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // Print the value to the console
    console.log(inputValue);
  
    var filteredData = tableData.filter(x => x.datetime === inputValue);

    tbody.html("")

    filteredData.forEach((ufoData) => {
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

  }