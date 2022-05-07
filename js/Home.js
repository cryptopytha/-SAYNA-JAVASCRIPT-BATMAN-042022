// surligne 
var surligne = document.querySelectorAll('nav a');
for (let i=0; i < surligne.length; i++) {

    let a = surligne[i];

    a.addEventListener('mouseover', function () {
       a.style.textDecoration='underline';
     });
    a.addEventListener('mouseout', function () {
        a.style.textDecoration='none';
    
 });
}

// zoom

let batman = document.getElementsByClassName('img');

let image1 = batman[0];
let image2 = batman[1];
let image3 = batman[2];

let patt = document.querySelector('.patt');
let ball  = document.querySelector('.ball');
let rob = document.querySelector('.rob1');

image1.addEventListener('mouseover', function () {

    image1.style.transform ='scale(1.2)';
    patt.style.display='block';

});
image1.addEventListener('mouseout', function () {

    image1.style.transform ='scale(1)';
    patt.style.display='none';

});

image2.addEventListener('mouseover', function () {

    image2.style.transform ='scale(1.2)';
    ball.style.display='block';

});
image2.addEventListener('mouseout', function () {

    image2.style.transform ='scale(1)';
    ball.style.display='none';

});

image3.addEventListener('mouseover', function () {

    image3.style.transform ='scale(1.2)';
    rob.style.display='block';

});
image3.addEventListener('mouseout', function () {

    image3.style.transform ='scale(1)';
    rob.style.display='none';

});


let nemesis = document.getElementsByClassName('img-neme');

let neme1 = nemesis[0];
let neme2 = nemesis[1];
let neme3 = nemesis[2];

let dano = document.querySelector('.dano');
let ledger  = document.querySelector('.ledger');
let potter = document.querySelector('.potter');

neme1.addEventListener('mouseover', function () {

    neme1.style.transform ='scale(1.2)';
    dano.style.display='block';

});
neme1.addEventListener('mouseout', function () {

    neme1.style.transform ='scale(1)';
    dano.style.display='none';

});

neme2.addEventListener('mouseover', function () {

    neme2.style.transform ='scale(1.2)';
    ledger.style.display='block';

});
neme2.addEventListener('mouseout', function () {

    neme2.style.transform ='scale(1)';
    ledger.style.display='none';

});

neme3.addEventListener('mouseover', function () {

    neme3.style.transform ='scale(1.2)';
    potter.style.display='block';

});
neme3.addEventListener('mouseout', function () {

    neme3.style.transform ='scale(1)';
    potter.style.display='none';

});


//hover

let sauveSourir = document.querySelectorAll('.logo2m');

let facebook = document.querySelector('.fb');
let instagram = document.querySelector('.insta');
let tweeter = document.querySelector('.tweet');


facebook.addEventListener('mouseover' , function () {
    facebook.style.color= '#FFFF00';
});
facebook.addEventListener('mouseout' , function () {
    facebook.style.color= '#FFFFFF';
});

instagram.addEventListener('mouseover' , function () {
    instagram.style.color= '#FFFF00';
});
instagram.addEventListener('mouseout' , function () {
    instagram.style.color= '#FFFFFF';
});

tweeter.addEventListener('mouseover' , function () {
    tweeter.style.color= '#FFFF00';
});
tweeter.addEventListener('mouseout' , function () {
    tweeter.style.color= '#FFFFFF';
});

let sauveSourir2 = document.querySelectorAll('.icon-footer2');

let facebookf = document.querySelector('.fofb');
let instagramf = document.querySelector('.finsta');
let tweeterf = document.querySelector('.ftweet');


facebookf.addEventListener('mouseover' , function () {
    facebookf.style.color= '#FFFF00';
});
facebookf.addEventListener('mouseout' , function () {
    facebookf.style.color= '#FFFFFF';
});

instagramf.addEventListener('mouseover' , function () {
    instagramf.style.color= '#FFFF00';
});
instagramf.addEventListener('mouseout' , function () {
    instagramf.style.color= '#FFFFFF';
});

tweeterf.addEventListener('mouseover' , function () {
    tweeterf.style.color= '#FFFF00';
});
tweeterf.addEventListener('mouseout' , function () {
    tweeterf.style.color= '#FFFFFF';
});

//scrool 

let tiret = document.querySelector('.logo2');
window.addEventListener('scroll' , function() {
    if (window.scrollY == "300"){
        tiret.style.position ='fixed';
    }
} );

// fade in 
// intersection observe pour le titre
let ratio = .1;

let options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }
  
 let handelIntersect = function (entries , observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
        } 
    })
 }
let observer = new IntersectionObserver(handelIntersect, options);
observer.observe(document.querySelector('.texte'));
observer.observe(document.querySelector('.super'));
observer.observe(document.querySelector('.crime'));
observer.observe(document.querySelector('.cine'));
observer.observe(document.querySelector('.neme'));
observer.observe(document.querySelector('.multi'));

//image
let handelIntersecti = function (entries , observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('zoom-visible')
            observer.unobserve(entry.target)
        } 
    })
 }
let observer1 = new IntersectionObserver(handelIntersecti, options);
observer1.observe(document.querySelector('.zoom'));
observer1.observe(document.querySelector('.man'));
observer1.observe(document.querySelector('.home4'));
observer1.observe(document.querySelector('.slider1'));
observer1.observe(document.querySelector('.carte'));
observer1.observe(document.querySelector('.paul'));
observer1.observe(document.querySelector('.ray'));
observer1.observe(document.querySelector('.robert'));
// observer1.observe(document.querySelector('.once'));

//formulaire
document.getElementById("go").addEventListener('click', function (py){
    py.preventDefault();
    let mail = document.querySelector('#email');
    let choisir = document.querySelector('#checkbox');
    let selection = document.querySelector('#select');
    let proposition = document.querySelector('#suggestion');
    let msg = document.querySelector('#msg');
    let erreur;

    if (!msg.value) {
        erreur = "laissez une message";
    } 
    if (!proposition.value) {
        erreur = "repondez s'il vous plaît!";
    } 
    if (!choisir.value) {
        erreur = "veuiller croher le botton";
    } 
    // if (!selection.value) {
    //     erreur = "veuiller selectioner";
    // } 
    if (!mail.value) {
        erreur = "veuiller renseigner votre email";
    } 
   
    if (erreur) {
        py.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        document.querySelector(".confirmation").style.display= 'block'; 
    }
});

//slide des image

