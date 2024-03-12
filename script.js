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

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    // alert("Clicked Fill All Uncolored"); // Replace this line with your code.
   // document.getElementsByTagName("td");
    for(let i = 0; i < document.getElementsByTagName("td").length; i++){
        if(document.getElementsByTagName("td")[i].style.backgroundColor.valueOf() != "red" && document.getElementsByTagName("td")[i].style.backgroundColor.valueOf() != "blue" && document.getElementsByTagName("td")[i].style.backgroundColor.valueOf() != "green" && document.getElementsByTagName("td")[i].style.backgroundColor.valueOf() != "yellow" ){
            document.getElementsByTagName("td")[i].style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    // alert("Clicked Fill All"); // Replace this line with your code.
    for(let i = 0; i < document.getElementsByTagName("td").length; i++){
        document.getElementsByTagName("td")[i].style.backgroundColor = colorSelected;
        }
    }

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