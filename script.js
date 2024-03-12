// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 



// Clear all cells
function clearAll(){
    // alert("Clicked Clear All"); // Replace this line with your code.
    if (numRows === 0) {
        alert("There is nothing to clear!");
    }
    while (numRows > 0) {
        grid.deleteRow(-1);
        numRows--;
    }
    numCols = 0;
    numRows = 0;
}