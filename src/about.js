import backgroundImage from "./images/background_hamburger.jpg";
import facebookIcon from "./images/icon/facebook.png";
import twitterIcon from "./images/icon/twitter.png";
import instagramIcon from "./images/icon/instagram.png";
import whatsappIcon from "./images/icon/whatsapp.png";

export function insertAbout() {
  const content = document.getElementById("content");

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("aboutContainer");

  const title = document.createElement("h1");
  title.innerHTML = "About <span>Bun</span>Burg";
  aboutContainer.appendChild(title);

  const paragraphs = [
    "Welcome to BunBurg, where we believe in delivering the ultimate burger experience. Our passion for quality and flavor drives us to create mouthwatering burgers that satisfy all your cravings. Located in the heart of the city, BunBurg is the perfect spot for friends, family, and burger enthusiasts alike.",
    "At BunBurg, we use only the freshest ingredients, sourced locally whenever possible. Our beef patties are made from premium cuts, ensuring a juicy and flavorful bite every time. Whether you’re a fan of classic cheeseburgers or adventurous gourmet options, our diverse menu has something for everyone.",
    "Our cozy and welcoming atmosphere is designed to make you feel at home. With a focus on customer satisfaction, our friendly staff is always ready to assist and ensure you have a delightful dining experience. Come and join us at BunBurg, where great food and good times come together.",
    "Thank you for choosing BunBurg. We look forward to serving you soon!",
  ];

  paragraphs.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    aboutContainer.appendChild(p);
  });

  const socialMedia = document.createElement("div");
  socialMedia.classList.add("socialMedia");

  const socialIcons = [
    { src: facebookIcon, alt: "Facebook" },
    { src: twitterIcon, alt: "Twitter" },
    { src: instagramIcon, alt: "Instagram" },
    { src: whatsappIcon, alt: "WhatsApp" },
  ];

  socialIcons.forEach((icon) => {
    const img = document.createElement("img");
    img.src = icon.src;
    img.alt = icon.alt;
    img.classList.add("socialIcon");
    socialMedia.appendChild(img);
  });

  aboutContainer.appendChild(socialMedia);
  content.appendChild(aboutContainer);

  const background = document.createElement("img");
  background.src = backgroundImage;
  background.alt = "Hamburger Background";
  background.classList.add("background");
  content.appendChild(background);
}
