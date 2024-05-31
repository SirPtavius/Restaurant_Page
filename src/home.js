import backgroundImage from "./images/hamburger-4095155_1280.jpg";

export function insertHome() {
  const content = document.getElementById("content");

  const slogan = document.createElement("div");
  slogan.classList.add("slogan");

  const br = document.createElement("br");

  const burst = document.createElement("span");
  const redefine = document.createElement("span");
  const forever = document.createElement("span");

  burst.textContent = "burst";
  redefine.textContent = "redefine";
  forever.textContent = "forever";

  slogan.appendChild(document.createTextNode("A "));
  slogan.appendChild(burst);
  slogan.appendChild(document.createTextNode(" of flavors"));
  slogan.appendChild(document.createElement("br"));
  slogan.appendChild(document.createTextNode("that will "));
  slogan.appendChild(redefine);
  slogan.appendChild(document.createTextNode(" your "));
  slogan.appendChild(document.createElement("br"));
  slogan.appendChild(document.createTextNode("palate "));
  slogan.appendChild(forever);

  const image = document.createElement("img");
  image.classList.add("background");
  image.src = backgroundImage;
  image.alt = "Hamburger Background";

  content.appendChild(slogan);
  content.appendChild(image);
}
