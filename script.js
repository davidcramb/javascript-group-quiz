var treeObj = { 
  height : "",
  char : ""
};
var spacing = " ";
var heightMinus;
var rptChar;
var html = document.getElementById("toDom");

function tree() {
  if (height.value === "") {
    alert("please enter height!!");
  } 
  if (type.value === "") {
    alert("please enter a character!!");
  }

  treeObj.height = parseInt(height.value) // 7
  treeObj.char = type.value;
  console.log("tree height:",treeObj.height,"tree char", treeObj.char);
  rptChar = 1;
  heightMinus = treeObj.height - 1;

  for (var i = 0; i < treeObj.height; i++) {
console.log(spacing.repeat(heightMinus) + treeObj.char.repeat(rptChar));
  heightMinus --;
  rptChar = rptChar + 2;

  };
};


var button = document.getElementById("button");
button.addEventListener("click", function() {
  var height = document.getElementById("height")
  var type = document.getElementById("type")
  tree();
})

<!-- need clear button -->
