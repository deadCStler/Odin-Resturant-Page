export const footer = function(){
    let div = document.createElement('div');
    div.classList.add('footer');

    let logo = document.createElement('h2');
    logo.innerHTML='EatMORE';
    logo.classList.add('logo');

    let social_media = document.createElement('ul');
    social_media.classList.add('social_media');
    
    let optFB = document.createElement('li');
    optFB.classList.add('fb');
    optFB.innerHTML='Facebook';
    
    let optInsta = document.createElement('li');
    optInsta.classList.add('insta');
    optInsta.innerHTML='Instagram';
    
    let optX = document.createElement('li');
    optX.classList.add('twitter');
    optX.innerHTML='Twitter (X)';
    
    social_media.appendChild(optFB);
    social_media.appendChild(optInsta);
    social_media.appendChild(optX);
    
    
    let credits = document.createElement('ul');

    let github = document.createElement('li');
    github.innerHTML = "<a href='https://github.com/deadCStler'>GitHub</a>";
    github.classList.add('github');
    
    let design = document.createElement('li');
    design.classList.add('design');
    design.innerHTML="<p>Designed By:</p> <a href='https://www.behance.net/sarahadedokun'>Sarah AdedoKun</a>";

    credits.appendChild(github);
    credits.appendChild(design);
    
    div.appendChild(logo);
    div.appendChild(social_media);
    div.appendChild(credits);
    return div;
}