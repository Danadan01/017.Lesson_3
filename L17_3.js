const divParent = document.getElementById("imgDiv");
let arrayOfImages = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];
let randomIndex = Math.floor(Math.random() * arrayOfImages.length);

let img = document.createElement("img");
img.setAttribute("src", `../images/${arrayOfImages[randomIndex]}`);
img.classList.add("size-of-image");
divParent.appendChild(img);