const html = document.getElementById("html");

console.log(html);

// selector
const title = document.getElementById("title");

console.log(title);

const myElement = document.querySelector(".para");

console.log(myElement);

// Manipulation

title.style.color = "red";
title.style.fontSize = "48px";
title.style.textDecoration = "underline";

const myBtn = document.getElementById("btn");

myBtn.addEventListener("click", () => {
  title.style.color = "blue";

  myBtn.innerText = "clicked";
});

myBtn.addEventListener("dblclick", () => {
  title.style.color = "green";
  myBtn.innerText = "double clicked";
});

const list = document.getElementById("list");

const students = ["Ram", "hari", "sita", "gita", "Rohan"];

for (const student of students) {
  const listItem = document.createElement("li");

  listItem.innerText = student;

  list.appendChild(listItem);
}
