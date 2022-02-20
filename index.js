// Write your code here!

const ourBody = document.body;
const mainElement = document.getElementById("main");
ourBody.removeChild(mainElement);

const newHeader = document.createElement("h1");

newHeader.setAttribute("id", "victory");

newHeader.textContent = "is the champion";

