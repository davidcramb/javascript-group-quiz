
var treeObj = { 
  height : "",
  char : ""
};
var spacing = "&nbsp";
var heightMinus;
var rptChar;
var html = document.getElementById("toDom");

function tree(treeObj) {
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
  var treeString = spacing.repeat(heightMinus) + treeObj.char.repeat(rptChar) + "<br>";
  console.log(treeString)

  html.innerHTML += treeString;
  heightMinus --;
  rptChar = rptChar + 2;

  };
};


var button = document.getElementById("button");
button.addEventListener("click", function() {
  tree(treeObj);
})

<!-- need clear button -->
var reset = document.getElementById("reset");

reset.addEventListener("click", function() {
  html.innerHTML = "";
  var height = document.getElementById("height");
  height.value = " ";
  var type = document.getElementById("type");
  type.value = " ";
})
