$(document).ready(function(){
	//function call for the grid.
	createGrid();
	//function call for the hover effect.
	hoverGrid();
	//restarts the grid
	resetGrid();
});


function createGrid() {
    var chooseSize = parseInt(prompt("Please enter a number between 1 and 100"));
   //Creates a jQuery variable
    var grid = $('#thegrid');
   //button for resetting grid
	var reset = '<br/><button type="button"> New Grid </button>';
   //Condition if size entered is bigger than 2 and less than or equal to 100
  if( chooseSize > 2 && chooseSize <= 100 ){

   //The grid is created block by block, "i" is one axis and "y" is the other axis.
for(var i = 0; i < chooseSize; i++){
	var squareRow = '<div>';
	for (var y = 0; y < chooseSize; y++) { 
		//Div block increment.
		squareRow += '<div class="block">';
		squareRow += '</div>';
	}
	squareRow += '</div>';
	//Appends the incrementing divs called "squareRow"
	grid.append(squareRow);
}}
grid.append(reset);
}

function hoverGrid() {
	$(".block").mouseover(function() {
		$(this).css("background-color", "#666");
	});
}

function resetGrid(){
	$('button').click(function(){
		$(".block").css("background-color", "#FFFFFF");
	});
}
