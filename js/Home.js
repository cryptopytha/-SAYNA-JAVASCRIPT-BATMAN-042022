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
for (let i = 0; i<batman.length; i++) {
    let image = batman[i];
    image.addEventListener('mouseover', function () {
        image.style.transform ='scale(1.2)'
    });
    image.addEventListener('mouseout', function () {
        image.style.transform ='scale(1)'
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
observer1.observe(document.querySelector('.once'));

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

//slide 
const itemsImage = document.querySelectorAll('#multimedia .none');
console.log(itemsImage);
const nbSlide = itemsImage.length;
const suivant = document.querySelector('.suiv');
const precedent = document.querySelector('.prec');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);
    
}
suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
    // console.log(count);
    
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e){
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)

