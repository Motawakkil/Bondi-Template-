let myElement = document.createElement("div");
let myHeading = document.createElement("div");
let myParagraph = document.createElement("div");

let myAttr = document.createAttribute("data-custom");
let myHeadingText = document.createTextNode("Product Title");
let myParagraphText = document.createTextNode("Product Description");


myElement.setAttributeNode(myAttr)