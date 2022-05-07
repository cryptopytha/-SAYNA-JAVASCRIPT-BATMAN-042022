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