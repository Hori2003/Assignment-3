// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 



// Remove a row
function removeR() {
    // alert("Clicked Remove Row"); // Replace this line with your code.
    let table = document.getElementById("grid");
    if(numRows > 0){
        table.deleteRow(table.rows.length - 1)
        numRows--;
        if (numRows == 0) {
            numCols = 0;
        }
    }
}

// Remove a column
function removeC() {
    // alert("Clicked Remove Col"); // Replace this line with your code.
    let table = document.getElementById("grid");
    if(numCols > 0){
        for(var i = 0; i < table.rows.length; i++){
            table.rows[i].deleteCell(-1)
        }
        numCols--;
        while (numCols == 0) {
            table.deleteRow(0);
            numRows--;
        }
    }
}
