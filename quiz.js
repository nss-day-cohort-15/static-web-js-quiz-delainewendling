var tree = {};
var height = document.getElementById("height");
var character = document.getElementById("character");

function growTree(object) {
  for(i=0; i<=tree.treeHeight; i++) {
    var space=" ";
    console.log(space.repeat(tree.treeHeight-(i-1))+tree.treeChar.repeat(2*i+1));
  }
}

// function growTree() {
//   for(i=0; i<=height; i++) {
//     var oneLess = i-1;
//     var space = " ";
//     console.log(space.repeat(height-oneLess)+character.repeat(2*i+1));
//   }
// }
document.getElementById("grow").addEventListener("click", function(event) {
  event.preventDefault();
  console.log(height.value);
  if (height.value !== "" && character.value !== "") {
    tree.treeHeight = Number(height.value);
    tree.treeChar = character.value;
    growTree(tree);
  } else {
    alert("Both fields must have a value");
  }
  height.value = "";
  character.value = "";
});
