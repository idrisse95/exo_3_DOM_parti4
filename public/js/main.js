let exo1 = document.getElementsByTagName('input')[0];
exo1.addEventListener('focus',()=>{
    exo1.style=('background-color:blue')

});

let exo2 = document.getElementsByTagName('input')[1];
exo2.addEventListener('focus',()=>{
    exo2.style=('background-color:blue')

});
exo2.addEventListener('blur',()=>{
    exo2.style=('background-color:white')
})

 

let exo3 = document.getElementsByClassName('buttonExo')[0];
let div = document.getElementsByClassName('premierParagraphe')[0];
let cont1 = document.getElementsByClassName('secondParagraphe')[0];
let cont2 = document.getElementsByClassName('dernierParagraphe')[0];

exo3.addEventListener('click',()=>{

   div.innerHTML= cont1.textContent
   cont2.innerHTML= cont1.textContent
})



let exo4Input = document.getElementsByTagName('input')[2];
let nico = document.getElementById('exo4')
let exo4 = document.getElementsByClassName('buttonExo')[1];
exo4.addEventListener('click',()=>{

    nico.textContent = exo4Input.value 

})

let img5 = document.getElementsByTagName('img')[0]
let exo5 = document.getElementById('six')
exo5.addEventListener('click',()=>{

  
    img5.setAttribute('src','./src/image/tartine.png')

})


let exo6 = document.getElementsByTagName('img')[2]

let exo6b= document.getElementsByTagName('img')[1]

exo6.addEventListener('click',()=>{
 
    exo6b.setAttribute('src','')
    exo6.setAttribute('src','./src/image/tartine.png')

})



let exo7Button = document.getElementsByTagName('button')[3]
let exo7p = document.getElementsByTagName('p')[5]
let exo7p2 = document.getElementsByTagName('p')[6]
let exo7pB = document.getElementsByTagName('p')[6]

exo7Button.addEventListener('click',()=>{
    exo7p.innerText = exo7p.innerText

    exo7p2.innerText = exo7p.textContent
    
    
})





















