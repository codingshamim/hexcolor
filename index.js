// parent element select
const parent = document.querySelector(".row");
const generateColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const hexColor =
    "#" + red.toString(16) + green.toString(16) + blue.toString(16);
  return hexColor;
};

for (let i = 0; i < 100; i++) {
  const itemcolor = generateColor();
  const element = document.createElement("div");
  element.innerHTML = ` <div class="item">
    <div class="item-color" style="background-color:${itemcolor}"></div>
    <h1 onclick="copyButton()">${itemcolor}</h1>
  </div>`;
  element.classList.add("color-item");
  parent.appendChild(element);
}
