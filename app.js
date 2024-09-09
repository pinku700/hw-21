let nav = document.querySelector('nav')
window.addEventListener('scroll', function(){
    if(window.scrollY > 100){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
})


let body = document.querySelector('body')
let scrollbar = document.querySelector('.scrollbar')


window.addEventListener('scroll', function(){
     let a = body.clientHeight;
     let b = window.innerHeight;
     let c = window.scrollY;
     let d = a - b;
     let result = Math.round((100 / d) * c);
     
     scrollbar.style.background = `conic-gradient(#1e3799, #1e3799 ${result}%, #4a69bd ${result}%)`;
})

// let progressbar = document.querySelector('.progressbar');

// window.addEventListener('scroll',function(){
//     let w = body.clientHeight;
//     let x = window.innerHeight;
//     let y = window.scrollY;
//     let z = w - x;
//     let rslt = Math.round((100 / z) * y);

//     progressbar.style.width = `linear-gradient(${rslt}%)`;
// })