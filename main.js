(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(81),i=t.n(a),d=t(645),o=t.n(d),r=t(667),s=t.n(r),l=new URL(t(295),t.b),c=o()(i());c.push([e.id,"@import url(https://fonts.cdnfonts.com/css/resolve-sans/);"]);var p=s()(l);c.push([e.id,`*{\n    font-family: 'Resolve Sans', sans-serif;\n    padding: 0;\n    margin: 0;\n    color: #fdfefe;\n}\n\nbody{\n    height: 100vh;\n}\n\n.header{\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    font-size: 25px;\n    padding-top: 90px;\n    padding-bottom: 90px;\n    background-color: #161616;\n}\n\n.logo{\n    letter-spacing: -2px;\n    font-weight: 1000;\n}\n\n.navigation_menu{\n    list-style: none;\n    display: flex;\n    gap: 60px;\n    letter-spacing: 2px;\n    padding: 10px;\n    padding-left: 50px;\n}\n\n.navigation_menu>li:hover{\n    cursor: pointer;\n}\n\n.footer{\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding-top: 30px;\n    padding-bottom: 50px;\n    background-color: #161616;\n}\n\n.footer>ul{\n    list-style: none;\n    padding: 20px;\n}\n\n.footer>h2{\n    font-size: 30px;\n}\n\n.footer>ul>li{\n    font-size: 20px;\n    padding: 10px;\n}\n\n.footer>ul>li:hover{\n    cursor: pointer;\n}\n\n.home_one{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding-top: 110px;\n    padding-bottom: 100px;\n    background: url(${p});\n    background-size: cover;\n}\n\n.moto{\n    font-size: 70px;\n    padding: 45px;\n    letter-spacing: 3px;\n}\n\n.desc{\n    text-align: center;\n    font-size: 22px;\n    padding: 0px 80px 100px;\n    letter-spacing: 2px;\n}\n\n.desc>p{\n    padding-bottom: 10px;\n}\n\n.bookTable{\n    padding: 20px 100px;\n    font-size: 20px;\n    letter-spacing: 2px;\n    border-radius: 8px;\n    background-color: #f4c377;\n    color: #161616;\n    font-weight: bolder;\n}\n\n.home_two{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 200px;\n    padding-bottom: 100px;\n    background-color: #232323;\n}\n\n.todaySpecial{\n    font-size: 70px;\n    letter-spacing: 3px;\n    color: #f4c377;\n}\n\n.textUT{\n    padding: 25px;\n    font-size: 24px;\n    text-align: center;\n    letter-spacing: 3px;\n}\n\n.special_blocks{\n    padding: 35px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 30px;\n}\n\n.special_blocks>div{\n    border-radius: 7px;\n    height: 530px;\n    width: 400px;\n}\n\n.special_image{\n    height: 320px;\n    width: 400px;\n}\n\n.menu_body{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding-top: 100px;\n    padding-bottom: 100px;\n    background-color: #232323;\n}\n\n.menu_heading{\n    font-size: 70px;\n    letter-spacing: 3px;\n    color: #f4c377;\n}\n\n.menu_table{\n    padding-top: 100px;\n    display: grid;\n    grid-template-rows: repeat(4,1fr);\n    gap: 30px;\n}\n\n.menu_table>div>div{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    padding: 20px;\n    font-size: 35px;\n    letter-spacing: 2px;\n    font-style: italic;\n}\n\n.menu_table>div>p{\n    font-size: 30px;\n    letter-spacing: 5px;\n    color: #f4c377;\n    padding: 10px;\n}\n\n.menu_table>div>div>p{\n    text-align: right;\n}\n\n.gallery_body{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding-top: 100px;\n    padding-bottom: 100px;\n    background-color: #232323;\n}\n\n.gallery_body>img{\n    padding: 100px;\n}\n\n.gallery_heading{\n    font-size: 70px;\n    letter-spacing: 3px;\n    color: #f4c377;\n}\n\n.review_heading{\n    padding-top: 100px;\n    font-size: 70px;\n    letter-spacing: 3px;\n}\n\n.reviews{\n    padding: 100px;\n    display: grid;\n    justify-content: center;\n    grid-template-columns: repeat(3,400px);\n    grid-template-rows: repeat(2,1fr);\n    gap: 50px;\n}\n\n.reviews>div{\n    border: solid 2px #f4c377;\n    border-radius: 7px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 20px;\n    font-size: 19px;\n}\n\n.aboutUs_body{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    padding-top: 100px;\n    padding-bottom: 100px;\n    background-color: #232323;\n}\n\n.aboutUs_upper{\n    display: flex;\n    justify-content: space-evenly;\n    gap: 100px;\n    padding-bottom: 100px;\n}\n\n.sideUpper{\n    display: flex;\n    flex-direction: column;\n    justify-content: right;\n    width: 600px;\n    gap: 30px;\n}\n\n.sideUpper>p{\n    font-size: 25px;\n}\n\n.sideUpper>div{\n    color: #f4c377;\n    padding-top: 100px;\n    padding-bottom: 20px;\n    font-size: 70px;\n    letter-spacing: 3px;\n}\n\n.chefs_heading{\n    font-size: 70px;\n    letter-spacing: 3px;\n    color: #f4c377;\n    text-align: center;\n}\n\n.textUL{\n    padding: 25px;\n    font-size: 24px;\n    text-align: center;\n    letter-spacing: 3px;\n}\n\n.chef_blocks{\n    padding: 35px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 30px;\n}`,""]);const u=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,i,d){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);a&&o[c[0]]||(void 0!==d&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=d),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),n.push(c))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var d={},o=[],r=0;r<e.length;r++){var s=e[r],l=a.base?s[0]+a.base:s[0],c=d[l]||0,p="".concat(l," ").concat(c);d[l]=c+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=i(m,a);a.byIndex=r,n.splice(r,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var d=a(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<d.length;o++){var r=t(d[o]);n[r].references--}for(var s=a(e,i),l=0;l<d.length;l++){var c=t(d[l]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}d=s}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var d=t.sourceMap;d&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},295:(e,n,t)=>{e.exports=t.p+"f41b5ae9c6b5adf2ebea.jpg"}},n={};function t(a){var i=n[a];if(void 0!==i)return i.exports;var d=n[a]={id:a,exports:{}};return e[a](d,d.exports,t),d.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&!e;)e=a[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),i=t.n(a),d=t(569),o=t.n(d),r=t(565),s=t.n(r),l=t(216),c=t.n(l),p=t(589),u=t.n(p),m=t(426),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=o().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=c(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=function(){let e=document.createElement("div");e.classList.add("header");let n=document.createElement("h2");n.innerHTML="EatMORE",n.classList.add("logo");let t=document.createElement("ul");t.classList.add("navigation_menu");let a=document.createElement("li");a.classList.add("home"),a.innerHTML="Home";let i=document.createElement("li");i.classList.add("menu"),i.innerHTML="Menu";let d=document.createElement("li");d.classList.add("gallery"),d.innerHTML="Gallery";let o=document.createElement("li");return o.classList.add("about_us"),o.innerHTML="About Us",t.appendChild(a),t.appendChild(i),t.appendChild(d),t.appendChild(o),e.appendChild(n),e.appendChild(t),e},g=t.p+"f6be97f9cfa5590c77a6.png",v=t.p+"7dff2385296ddfbbcd58.png",x=t.p+"8a7c7c29e68894b911f0.png",b=function(){let e=document.createElement("div");e.classList.add("home");let n=document.createElement("div");n.classList.add("home_one");let t=document.createElement("div");t.innerHTML="Good Food, Great Vibes",t.classList.add("moto");let a=document.createElement("div");a.innerHTML="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac enim ut arcu consequat euismod nec a massa.</p> <p>Phasellus tempor nibh eros, non cursus ipsum interdum non.</p>",a.classList.add("desc");let i=document.createElement("button");i.innerHTML="Book A Table",i.classList.add("bookTable"),n.appendChild(t),n.appendChild(a),n.appendChild(i);let d=document.createElement("div");d.classList.add("home_two");let o=document.createElement("div");o.classList.add("todaySpecial"),o.innerHTML="Today's Special";let r=document.createElement("div");r.classList.add("textUT"),r.innerHTML="<p>Lorem ipsum dolor sit amet, consectetur</p> <p>adipiscing elit.</p>";let s=document.createElement("div");s.classList.add("special_blocks");let l=document.createElement("div"),c=document.createElement("div"),p=document.createElement("div");const u=new Image;u.src=g,u.classList.add("special_image");const m=new Image;m.src=v,m.classList.add("special_image");const h=new Image;return h.src=x,h.classList.add("special_image"),l.appendChild(u),c.appendChild(m),p.appendChild(h),s.appendChild(l),s.appendChild(c),s.appendChild(p),d.appendChild(o),d.appendChild(r),d.appendChild(s),e.appendChild(n),e.appendChild(d),e},y=function(){let e=document.createElement("div");e.classList.add("footer");let n=document.createElement("h2");n.innerHTML="EatMORE",n.classList.add("logo");let t=document.createElement("ul");t.classList.add("social_media");let a=document.createElement("li");a.classList.add("fb"),a.innerHTML="Facebook";let i=document.createElement("li");i.classList.add("insta"),i.innerHTML="Instagram";let d=document.createElement("li");d.classList.add("twitter"),d.innerHTML="Twitter (X)",t.appendChild(a),t.appendChild(i),t.appendChild(d);let o=document.createElement("ul"),r=document.createElement("li");r.innerHTML="<a href='https://github.com/deadCStler'>GitHub</a>",r.classList.add("github");let s=document.createElement("li");return s.classList.add("design"),s.innerHTML="<p>Designed By:</p> <a href='https://www.behance.net/sarahadedokun'>Sarah AdedoKun</a>",o.appendChild(r),o.appendChild(s),e.appendChild(n),e.appendChild(t),e.appendChild(o),e};class C{constructor(e,n){this.name=e,this.price=n}addDishToDiv(e){let n=document.createElement("div");n.classList.add(e);let t=document.createElement("div"),a=document.createElement("p");return t.innerHTML=this.name,a.innerHTML=this.price,n.appendChild(t),n.appendChild(a),n}}const L=t.p+"d240db743d5d9f1c8ba4.png";class w{constructor(e){this.review=e}addReviewtoDiv(){let e=document.createElement("div");return e.innerHTML=this.review,e}}const E=t.p+"52be72442d697cc2b794.png",T=t.p+"dfc900b345eccbbb3680.png";!function(){const e=document.getElementById("content");function n(n){e.innerHTML="",e.appendChild(f()),e.appendChild(n),e.append(y()),a()}function t(e){const n=document.getElementsByClassName(e);n[0].style.color="#f4c377",n[0].style.paddingBottom="3px",n[0].style.borderBottom="2px solid #f4c377"}function a(){const e=document.querySelector(".home"),a=document.querySelector(".menu"),i=document.querySelector(".gallery"),d=document.querySelector(".about_us");e.addEventListener("click",(()=>{n(b()),t("home")})),a.addEventListener("click",(()=>{n(function(){let e=document.createElement("div");e.classList.add("menu_body");let n=document.createElement("div");n.classList.add("menu_heading"),n.innerHTML="Menu";let t=document.createElement("div");t.classList.add("menu_table");const a=new C("French Toast with Maple Syrup","$9.99"),i=new C("Classic Eggs Benedict","$12.99"),d=new C("Vegetarian Omelette","$10.99"),o=new C("Smoked Salmon Bagel","$14.99"),r=new C("Avocado Toast","$11.99"),s=new C("Freshly Squeezed Orange Juice","$4.99"),l=new C("Café au Lait","$3.49"),c=new C("Belgian Waffle Sundae","$8.99"),p=new C("Mixed Berry Pancakes","$10.99"),u=new C("Chocolate Croissant","$7.99"),m=new C("Specialty Coffee","$5.99"),h=new C("Tiramisu","$9.99");let f=document.createElement("div");f.classList.add("bd");let g=document.createElement("p");g.innerHTML="Breakfast Delights",f.appendChild(g),f.appendChild(a.addDishToDiv("bdDish1")),f.appendChild(i.addDishToDiv("bdDish2")),f.appendChild(d.addDishToDiv("bdDish3"));let v=document.createElement("div");v.classList.add("bs");let x=document.createElement("p");x.innerHTML="Brunch Specialties",v.appendChild(x),v.appendChild(o.addDishToDiv("bsDish1")),v.appendChild(r.addDishToDiv("bsDish2")),v.appendChild(c.addDishToDiv("bsDish3"));let b=document.createElement("div");b.classList.add("rb");let y=document.createElement("p");y.innerHTML="Refreshing Beverages",b.appendChild(y),b.appendChild(s.addDishToDiv("rbDish1")),b.appendChild(l.addDishToDiv("rbDish2")),b.appendChild(m.addDishToDiv("rbDish3"));let L=document.createElement("div");L.classList.add("se");let w=document.createElement("p");return w.innerHTML="Sweet Endings",L.appendChild(w),L.appendChild(p.addDishToDiv("seDish1")),L.appendChild(u.addDishToDiv("seDish2")),L.appendChild(h.addDishToDiv("seDish3")),t.appendChild(f),t.appendChild(v),t.appendChild(b),t.appendChild(L),e.appendChild(n),e.appendChild(t),e}()),t("menu")})),i.addEventListener("click",(()=>{n(function(){let e=document.createElement("div");e.classList.add("gallery_body");let n=document.createElement("div");n.classList.add("gallery_heading"),n.innerHTML="Gallery";const t=new Image;t.src=L;let a=document.createElement("div");a.classList.add("review_heading"),a.innerHTML="What people are saying about us";let i=document.createElement("div");i.classList.add("reviews");let d=new w("Absolutely loved the food! The flavors were amazing, and the service was top-notch. Will definitely be coming back!"),o=new w("Impressive experience! Delicious dishes, cozy atmosphere, and friendly staff. A solid 5-star dining spot."),r=new w("Fantastic restaurant! The presentation of the dishes was as delightful as the taste. Great attention to detail. Highly recommended!"),s=new w("Had a wonderful dinner here. The staff was attentive, and the food was outstanding. A definite go-to place for a delightful meal."),l=new w("Charming little gem! The menu offered a variety of tasty options. The ambiance was cozy, and the staff made us feel right at home. Will be returning soon!"),c=new w("Visited this place last night and had an amazing experience! The menu offered a great variety, and the flavors were on point. Definitely adding this to my list of favorite spots in town!");return i.appendChild(d.addReviewtoDiv()),i.appendChild(o.addReviewtoDiv()),i.appendChild(r.addReviewtoDiv()),i.appendChild(s.addReviewtoDiv()),i.appendChild(l.addReviewtoDiv()),i.appendChild(c.addReviewtoDiv()),e.appendChild(n),e.appendChild(t),e.appendChild(a),e.appendChild(i),e}()),t("gallery")})),d.addEventListener("click",(()=>{n(function(){let e=document.createElement("div");e.classList.add("aboutUs_body");let n=document.createElement("div");n.classList.add("aboutUs_upper");const t=new Image;t.src=E;let a=document.createElement("div");a.classList.add("sideUpper");let i=document.createElement("div");i.innerHTML="Our Story";let d=document.createElement("p");d.innerHTML="Founded in [Year], [Restaurant Name] has been a labor of love, inspired by a shared commitment to culinary excellence. Our chefs, hailing from diverse culinary backgrounds, bring a fusion of flavors to your plate, creating a dining experience that is both familiar and innovative.";let o=document.createElement("p");o.innerHTML="We take pride in sourcing the freshest, locally-sourced ingredients to craft dishes that showcase the best of each season. Our farm-to-table philosophy ensures that every bite is a celebration of quality and sustainability.",a.appendChild(i),a.appendChild(d),a.appendChild(o),n.appendChild(t),n.appendChild(a);let r=document.createElement("div");r.classList.add("aboutUs_lower");let s=document.createElement("div");s.classList.add("chefs_heading"),s.innerHTML="Our Chefs";let l=document.createElement("div");l.classList.add("textUL"),l.innerHTML="<p>Lorem ipsum dolor sit amet, consectetur</p> <p>adipiscing elit.</p>";let c=document.createElement("div");c.classList.add("chef_blocks");let p=document.createElement("div"),u=document.createElement("div"),m=document.createElement("div");const h=new Image;h.src=T;const f=new Image;f.src=T;const g=new Image;return g.src=T,p.appendChild(h),u.appendChild(f),m.appendChild(g),c.appendChild(p),c.appendChild(u),c.appendChild(m),r.appendChild(s),r.appendChild(l),r.appendChild(c),e.appendChild(n),e.appendChild(r),e}()),t("about_us")}))}e.appendChild(f()),e.appendChild(b()),a(),t("home"),e.append(y())}()})()})();