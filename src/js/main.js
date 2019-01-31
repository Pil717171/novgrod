var body = document.querySelector('body')
var coord = 0
var about = document.querySelector('.about')
var contact = document.querySelector('.contact')
var photo = document.querySelector('.photo')
var lang = document.querySelector('.home-read-lang')
var eng = document.querySelector('.home-read-language-eng') 


lang.onmouseover = () => {
    eng.classList.add("home-read-language-eng--eng")
}
lang.onmouseout = () => {
    eng.classList.remove("home-read-language-eng--eng")
}

about.addEventListener('click', () => {
    coord = -100
    body.style.transform = "translateY("+coord+"%)"
    return coord
})
contact.addEventListener('click', () => {
    coord = -200
    body.style.transform = "translateY("+coord+"%)"
    return coord
})
photo.addEventListener('click', () => {
    coord = -300
    body.style.transform = "translateY("+coord+"%)"
    return coord
})

window.addEventListener('wheel', (e) => {
    if (e.deltaY < 0) {
        if (coord >= 0) {
            body.style.transform = "translateY(0%)"
        }
        else {
            coord +=100
            body.style.transform = "translateY("+coord+"%)"
        }
        
    }
    else if (e.deltaY > 0) {
        if (coord <= -300) {
            body.style.transform = "translateY(-300%)"
        }
        else {
            coord -=100
            body.style.transform = "translateY("+coord+"%)"
        }
    }
});


// document.addEventListener('keydown', function (e) {
//         var code = e.keyCode  
    
//         if (code = 38) {
//             coord +=100
//             body.style.transform = "translateY("+coord+"%)"
//             if (coord >= 0) {
//                 body.style.transform = "translateY(0)"
//             }
//         }
//         else if (code = 40) {
//             coord -=100
//             body.style.transform = "translateY("+coord+"%)"
//             if (coord <= -300) {
//                 body.style.transform = "translateY(-300%)"
//             }
//         }
//     })
        


   







