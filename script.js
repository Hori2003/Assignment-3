// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

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

