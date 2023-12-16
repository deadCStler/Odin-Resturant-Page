import Img from './images/Gallery.png';

class Review{
    constructor(review){
        this.review=review;
    }

    addReviewtoDiv(){
        let div=document.createElement('div');
        div.innerHTML=this.review;
        return div;
    }
}

export const gallery= function(){
    let div = document.createElement("div");
    div.classList.add("gallery_body");

    let heading = document.createElement("div");
    heading.classList.add("gallery_heading");
    heading.innerHTML = "Gallery";

    const img = new Image();
    img.src=Img;

    let subHeading = document.createElement("div");
    subHeading.classList.add("review_heading");
    subHeading.innerHTML = "What people are saying about us";

    let reviews = document.createElement('div');
    reviews.classList.add('reviews');

    let reviewOne = new Review('Absolutely loved the food! The flavors were amazing, and the service was top-notch. Will definitely be coming back!');
    let reviewTwo = new Review('Impressive experience! Delicious dishes, cozy atmosphere, and friendly staff. A solid 5-star dining spot.');
    let reviewThree = new Review('Fantastic restaurant! The presentation of the dishes was as delightful as the taste. Great attention to detail. Highly recommended!');
    let reviewFour = new Review('Had a wonderful dinner here. The staff was attentive, and the food was outstanding. A definite go-to place for a delightful meal.');
    let reviewFive = new Review('Charming little gem! The menu offered a variety of tasty options. The ambiance was cozy, and the staff made us feel right at home. Will be returning soon!');
    let reviewSix = new Review('Visited this place last night and had an amazing experience! The menu offered a great variety, and the flavors were on point. Definitely adding this to my list of favorite spots in town!')
    
    reviews.appendChild(reviewOne.addReviewtoDiv());
    reviews.appendChild(reviewTwo.addReviewtoDiv());
    reviews.appendChild(reviewThree.addReviewtoDiv());
    reviews.appendChild(reviewFour.addReviewtoDiv());
    reviews.appendChild(reviewFive.addReviewtoDiv());
    reviews.appendChild(reviewSix.addReviewtoDiv());

    div.appendChild(heading);
    div.appendChild(img);
    div.appendChild(subHeading);
    div.appendChild(reviews);

    return div;

}