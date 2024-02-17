const body = document.querySelector("body")

const block_center = document.createElement("div")

block_center.id = "block_center"

body.appendChild(block_center)

const element_distiny = document.createElement("div")

element_distiny.id = "element_distiny"

block_center.appendChild(element_distiny);

const element_origin = document.createElement("div");

element_origin.id = "element_origin";

block_center.appendChild(element_origin)

let vertical_moviment = 0;
let horizontal_moviment = 0;

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
        vertical_moviment += 5;
    } else if (event.key === "ArrowUp") {
        vertical_moviment -= 5;
    } else if (event.key === "ArrowRight") {
        horizontal_moviment += 5;
    } else if (event.key === "ArrowLeft") {
        horizontal_moviment -= 5;
    }
    document.getElementById("element_origin").style.top =
      vertical_moviment + "px";
    document.getElementById("element_origin").style.left =
      horizontal_moviment + "px";
});