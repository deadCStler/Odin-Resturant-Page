export const header = function(){
    let div = document.createElement('div');
    div.classList.add('header');

    let logo = document.createElement('h2');
    logo.innerHTML='EatMORE';
    logo.classList.add('logo');

    let naviagtion = document.createElement('ul');
    naviagtion.classList.add('navigation_menu');

    let optHome = document.createElement('li');
    optHome.classList.add('home');
    optHome.innerHTML='Home';
    
    let optMenu = document.createElement('li');
    optMenu.classList.add('menu');
    optMenu.innerHTML='Menu';

    let optGallery = document.createElement('li');
    optGallery.classList.add('gallery');
    optGallery.innerHTML='Gallery';

    let optAbout = document.createElement('li');
    optAbout.classList.add('about_us');
    optAbout.innerHTML='About Us';

    naviagtion.appendChild(optHome);
    naviagtion.appendChild(optMenu);
    naviagtion.appendChild(optGallery);
    naviagtion.appendChild(optAbout);

    div.appendChild(logo);
    div.appendChild(naviagtion);

    return div;
};