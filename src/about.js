import Img from "./images/about.png";
import Img2 from './images/chef.png'

export const aboutUs = function () {
  let div = document.createElement("div");
  div.classList.add("aboutUs_body");

  let upper = document.createElement("div");
  upper.classList.add("aboutUs_upper");

  const img = new Image();
  img.src = Img;

  let side = document.createElement("div");
  side.classList.add("sideUpper");
  let heading = document.createElement("div");
  heading.innerHTML = "Our Story";

  let text = document.createElement("p");
  text.innerHTML =
    "Founded in [Year], [Restaurant Name] has been a labor of love, inspired by a shared commitment to culinary excellence. Our chefs, hailing from diverse culinary backgrounds, bring a fusion of flavors to your plate, creating a dining experience that is both familiar and innovative.";

  let text2 = document.createElement("p");
  text2.innerHTML =
    "We take pride in sourcing the freshest, locally-sourced ingredients to craft dishes that showcase the best of each season. Our farm-to-table philosophy ensures that every bite is a celebration of quality and sustainability.";

  side.appendChild(heading);
  side.appendChild(text);
  side.appendChild(text2);

  upper.appendChild(img);
  upper.appendChild(side);

  let lower = document.createElement("div");
  lower.classList.add("aboutUs_lower");

  let textLower = document.createElement("div");
  textLower.classList.add("chefs_heading");
  textLower.innerHTML = "Our Chefs";

  let textUnderLower = document.createElement("div");
  textUnderLower.classList.add("textUL");
  textUnderLower.innerHTML =
    "<p>Lorem ipsum dolor sit amet, consectetur</p> <p>adipiscing elit.</p>";

  let blocks = document.createElement("div");
  blocks.classList.add("chef_blocks");

  let blockOne = document.createElement("div");
  let blockTwo = document.createElement("div");
  let blockThree = document.createElement("div");

  const img1 = new Image();
  img1.src = Img2;
//   img1.classList.add("special_image");

  const img2 = new Image();
  img2.src = Img2;
//   img2.classList.add("special_image");

  const img3 = new Image();
  img3.src = Img2;
//   img3.classList.add("chef_image");

  blockOne.appendChild(img1);
  blockTwo.appendChild(img2);
  blockThree.appendChild(img3);

  blocks.appendChild(blockOne);
  blocks.appendChild(blockTwo);
  blocks.appendChild(blockThree);

  lower.appendChild(textLower);
  lower.appendChild(textUnderLower);
  lower.appendChild(blocks);

  div.appendChild(upper);
  div.appendChild(lower);

  return div;
};
