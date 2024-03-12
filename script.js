// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    // alert("Clicked Add Row"); // Replace this line with your code.
    let table = document.getElementById("grid");
    let row = table.insertRow(numRows);

    if (numRows == 0){
        table.rows[table.rows.length -1].insertCell(0);
        numCols++;
    }
    
    else{
    for(var i = 0; i < numCols; i++){
    table.rows[table.rows.length -1].insertCell(i);
    }
}
numRows++;
}

// Add a column
function addC() {
    // alert("Clicked Add Col"); // Replace this line with your code.
        // alert("Clicked Add Row"); // Replace this line with your code.
        let table = document.getElementById("grid");
    
        if (numRows == 0){
            table.insertRow(numRows);
            numRows++
        }
        
        for(var i = 0; i < numRows; i++){
        table.rows[i].insertCell(numCols);
        }
    
    numCols++;
}