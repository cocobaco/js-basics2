var buttons = document.querySelectorAll(".btn");

const content = document.getElementById("content");

var i = 0;
var length = buttons.length;
var message = "";

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // console.clear();
    console.log("You clicked:", this.innerHTML);
    content.innerHTML = `You clicked ${this.innerHTML}`;
  });
}
