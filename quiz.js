
function growTree() {
  var height = Number(document.getElementById("height").value);
  var character = document.getElementById("character").value;
  for(i=0; i<=height; i++) {
    var oneLess = i-1;
    var space = " ";
    console.log(space.repeat(height-oneLess)+character.repeat(2*i+1));
  }
}
document.getElementById("grow").addEventListener("click", function(event) {
  event.preventDefault();
  growTree();
});
