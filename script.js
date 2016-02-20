// First we set an empty Object
var treeObj = { 
  height : "",
  char : ""
};

var spacing = "&nbsp";
var heightMinus;
var rptChar;
var html = document.getElementById("toDom");

// Function to build a "Tree"
//First we test to make sure the fields are populated with user input. 
function tree() {
  if (height.value === "") {
    alert("please enter height!!");
  } 
  if (type.value === "") {
    alert("please enter a character!!");
  }

// Then we take the input and set to variable
  treeObj.height = parseInt(height.value)
  treeObj.char = type.value;

  // We set a baseline value for 
  rptChar = 1;
  heightMinus = treeObj.height - 1;

// Create a for loop that iterates based on the key value that matches the user input value for "height of the tree" field. Repeat method works by
// taking a variable (here it is a non-breaking space called spacing) and repats it by an argument which here is heightMinus which we set 
// starting at -1.  We then treeObj key value which is the user input for their choice of character and set it to repeat as well. And finally added
// a break at the end of each pass through the loop. The last two steps re-establish value to the heightMinus and rptChar so that it will decrease 
// at the appropriate amount and add at the appropriate amount, which here is -1 each time for heightMinus and +2 for rptChar. 
  for (var i = 0; i < treeObj.height; i++) {
  var treeString = spacing.repeat(heightMinus) + treeObj.char.repeat(rptChar) + "<br>";
  html.innerHTML += treeString;
  heightMinus --;
  rptChar = rptChar + 2;
  };
};

// Here we have a button attached to an event listener. It does three things, grabs the user's input for height and type and then runs the tree 
// function. 
var button = document.getElementById("button");
button.addEventListener("click", function() {
  var height = document.getElementById("height")
  var type = document.getElementById("type")
  tree();
})

// This is our reset button. It is attached to an event listener as well. Upon clicking it removes any value in the user input fields and clears 
// the section of the DOM that we are creating with our for loop.  
var reset = document.getElementById("reset");
reset.addEventListener("click", function() {
  html.innerHTML = "";
  var height = document.getElementById("height");
  height.value = " ";
  var type = document.getElementById("type");
  type.value = " ";
})
