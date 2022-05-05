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

