import Special1 from "./images/Special1.png";
import Special2 from "./images/Special2.png";
import Special3 from "./images/Special3.png";

export const home_body = function () {
  let div = document.createElement("div");
  div.classList.add("home");

  let home_one = document.createElement("div");
  home_one.classList.add("home_one");

  let moto = document.createElement("div");
  moto.innerHTML = "Good Food, Great Vibes";
  moto.classList.add("moto");

  let desc = document.createElement("div");
  desc.innerHTML =
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac enim ut arcu consequat euismod nec a massa.</p> <p>Phasellus tempor nibh eros, non cursus ipsum interdum non.</p>";
  desc.classList.add("desc");

  let book = document.createElement("button");
  book.innerHTML = "Book A Table";

  book.classList.add("bookTable");

  home_one.appendChild(moto);
  home_one.appendChild(desc);
  home_one.appendChild(book);

  let home_two = document.createElement("div");
  home_two.classList.add("home_two");

  let textToday = document.createElement("div");
  textToday.classList.add("todaySpecial");
  textToday.innerHTML = "Today's Special";

  let textUnderToday = document.createElement("div");
  textUnderToday.classList.add("textUT");
  textUnderToday.innerHTML =
    "<p>Lorem ipsum dolor sit amet, consectetur</p> <p>adipiscing elit.</p>";

  let todaySpecial = document.createElement("div");
  todaySpecial.classList.add("special_blocks");

  let blockOne = document.createElement("div");
  let blockTwo = document.createElement("div");
  let blockThree = document.createElement("div");

  const img1 = new Image();
  img1.src = Special1;
  img1.classList.add("special_image");

  const img2 = new Image();
  img2.src = Special2;
  img2.classList.add("special_image");

  const img3 = new Image();
  img3.src = Special3;
  img3.classList.add("special_image");

  blockOne.appendChild(img1);
  blockTwo.appendChild(img2);
  blockThree.appendChild(img3);

  todaySpecial.appendChild(blockOne);
  todaySpecial.appendChild(blockTwo);
  todaySpecial.appendChild(blockThree);

  home_two.appendChild(textToday);
  home_two.appendChild(textUnderToday);
  home_two.appendChild(todaySpecial);

  div.appendChild(home_one);
  div.appendChild(home_two);

  return div;
};
