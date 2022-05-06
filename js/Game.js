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