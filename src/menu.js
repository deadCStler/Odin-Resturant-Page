class Dish {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  addDishToDiv(className) {
    let div = document.createElement("div");
    div.classList.add(className);
    let p1 = document.createElement("div");
    let p2 = document.createElement("p");
    p1.innerHTML = this.name;
    p2.innerHTML = this.price;

    div.appendChild(p1);
    div.appendChild(p2);

    return div;
  }
}

export const menu = function () {
  let div = document.createElement("div");
  div.classList.add("menu_body");

  let heading = document.createElement("div");
  heading.classList.add("menu_heading");
  heading.innerHTML = "Menu";

  let menu_table = document.createElement("div");
  menu_table.classList.add("menu_table");

  const dish1 = new Dish("French Toast with Maple Syrup", "$9.99");
  const dish2 = new Dish("Classic Eggs Benedict", "$12.99");
  const dish3 = new Dish("Vegetarian Omelette", "$10.99");
  const dish4 = new Dish("Smoked Salmon Bagel", "$14.99");
  const dish5 = new Dish("Avocado Toast", "$11.99");
  const dish6 = new Dish("Freshly Squeezed Orange Juice", "$4.99");
  const dish7 = new Dish("Café au Lait", "$3.49");
  const dish8 = new Dish("Belgian Waffle Sundae", "$8.99");
  const dish9 = new Dish("Mixed Berry Pancakes", "$10.99");
  const dish10 = new Dish("Chocolate Croissant", "$7.99");
  const dish11 = new Dish("Specialty Coffee", "$5.99");
  const dish12 = new Dish("Tiramisu", "$9.99");

  let breakDel = document.createElement("div");
  breakDel.classList.add("bd");

  let text1 = document.createElement("p");
  text1.innerHTML = "Breakfast Delights";

  breakDel.appendChild(text1);
  breakDel.appendChild(dish1.addDishToDiv("bdDish1"));
  breakDel.appendChild(dish2.addDishToDiv("bdDish2"));
  breakDel.appendChild(dish3.addDishToDiv("bdDish3"));

  let brunchSpec = document.createElement("div");
  brunchSpec.classList.add("bs");

  let text2 = document.createElement("p");
  text2.innerHTML = "Brunch Specialties";

  brunchSpec.appendChild(text2);
  brunchSpec.appendChild(dish4.addDishToDiv("bsDish1"));
  brunchSpec.appendChild(dish5.addDishToDiv("bsDish2"));
  brunchSpec.appendChild(dish8.addDishToDiv("bsDish3"));

  let refreshBev = document.createElement("div");
  refreshBev.classList.add("rb");

  let text3 = document.createElement("p");
  text3.innerHTML = "Refreshing Beverages";

  refreshBev.appendChild(text3);
  refreshBev.appendChild(dish6.addDishToDiv("rbDish1"));
  refreshBev.appendChild(dish7.addDishToDiv("rbDish2"));
  refreshBev.appendChild(dish11.addDishToDiv("rbDish3"));

  let sweetEnd = document.createElement("div");
  sweetEnd.classList.add("se");

  let text4 = document.createElement("p");
  text4.innerHTML = "Sweet Endings";

  sweetEnd.appendChild(text4);
  sweetEnd.appendChild(dish9.addDishToDiv("seDish1"));
  sweetEnd.appendChild(dish10.addDishToDiv("seDish2"));
  sweetEnd.appendChild(dish12.addDishToDiv("seDish3"));

  menu_table.appendChild(breakDel);
  menu_table.appendChild(brunchSpec);
  menu_table.appendChild(refreshBev);
  menu_table.appendChild(sweetEnd);

  div.appendChild(heading);
  div.appendChild(menu_table);
  return div;
};
