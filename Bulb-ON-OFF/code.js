let body = document.body;


let image = document.createElement("img");
body.appendChild(image);
image.setAttribute("src", "./OFF.png");
image.style.height = "400px";
image.style.width = "400px";
image.style.border = "4px solid black";


let button = document.createElement("button");

button.innerHTML = "ON";
button.style.height = "40px";
button.style.width = "40px";
button.style.backgroundColor = "blue";
button.style.color = "white";

body.appendChild(button);

button.addEventListener("click", () => {
  if (button.innerHTML == "ON") {
    image.style.height = "400px";
    image.style.width = "400px";
    image.style.border = "4px solid black";
    image.setAttribute("src", "./ON.png");
    button.innerHTML = "OFF";
  } else {
    button.innerHTML = "ON";
    image.style.height = "400px";
    image.style.width = "400px";
    image.style.border = "4px solid black";
    image.setAttribute("src", "./OFF.png");
  }
});
