var body = document.querySelector('body')
var coord = 0
var about = document.querySelector('.about')
var contact = document.querySelector('.contact')
var photo = document.querySelector('.photo')

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
})

// var c = 0
// window.addEventListener('wheel', (e) => {
//     if (e.deltaY < coord) {
//         body.style.transform = "translateY(100%)" 
//     }
//     else {
//         body.style.transform = "translateY(-100%)"
//     }
// })

