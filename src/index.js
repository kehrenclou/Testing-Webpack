import "./styles/index.css"; //add import of the main stylesheets file
import stepsSrc from "./images/steps.png";

// let someStr = "I coded. I saved. I bundled";
// console.log("Hello World!");

const numbers = [2, 3, 5];

// Arrow function. How will Internet Explorer cope with it?
const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // 4, 6, 10

//find steps image by ID and add src to element
const stepsImage = document.getElementById("image-steps");
stepsImage.src = stepsSrc;
