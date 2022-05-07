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
//scrool 

let tiret = document.querySelector('.logo2');
window.addEventListener('scroll' , function() {
    // console.log(scrollY)
    if (window.scrollY == "300"){
        tiret.style.position ='fixed';
    }
} );

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

//fade in 
let ratio = .1;

let options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }
  
 let handelIntersect = function (entries , observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('visible-game')
            observer.unobserve(entry.target)
        } 
    })
 }
let observer = new IntersectionObserver(handelIntersect, options);
observer.observe(document.querySelector('.texte-titre'));
observer.observe(document.querySelector('.niveau1'));
observer.observe(document.querySelector('.qst'));
observer.observe(document.querySelector('.har'));
observer.observe(document.querySelector('.face'));
observer.observe(document.querySelector('.il'));
observer.observe(document.querySelector('.tim'));
observer.observe(document.querySelector('.jack'));
observer.observe(document.querySelector('.des'));
observer.observe(document.querySelector('.le'));
observer.observe(document.querySelector('.sa'));
observer.observe(document.querySelector('.cat'));
observer.observe(document.querySelector('.jon'));
observer.observe(document.querySelector('.ville'));
observer.observe(document.querySelector('.prod'));
observer.observe(document.querySelector('.app'));
observer.observe(document.querySelector('.inte'));
observer.observe(document.querySelector('.noir'));

//zoom image

let handelIntersection = function (entries , observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('val-zoom')
            observer.unobserve(entry.target)
        } 
    })
 }
let observer1 = new IntersectionObserver(handelIntersection, options);
observer1.observe(document.querySelector('.val'))