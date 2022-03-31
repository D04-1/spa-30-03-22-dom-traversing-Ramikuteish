const header = document.querySelector("h1"); // nur die erste Element
// console.log(header);
// console.log(header.children);
// console.log(header.childNodes);
header.closest("header").style.border = "5px solid #76749E";

const packageTitles = document.querySelectorAll(
  "section.info section.info-package .package-title"
);
//console.log(packageTitles);
packageTitles.forEach((element) => {
  const img = element.previousElementSibling;
  img.style.border = "2px solid black";
});

const labelElement = document.querySelectorAll("label");
labelElement.forEach((element) => {
  if (element.className.indexOf("mild") != -1) {
    element.style.borderBottom = "2px solid yellow";
  } else if (element.className.includes("intense")) {
    element.style.borderBottom = "2px solid orange";
  } else {
    element.style.borderBottom = "2px solid red";
  }
});

const navList = document.querySelector(".nav-list");
console.log(navList);
const sitMapList = document.querySelector(".site-map");
console.log(sitMapList);
const listItems = navList.children;

for (let i = 0; i < listItems.length; i++) {
  const neuLi = document.createElement("li");
  console.log(listItems);

  neuLi.innerText = listItems[i].innerText;
  sitMapList.append(neuLi);
}
