var body = document.querySelector('body')
var coord = 0
var about = document.querySelector('.about')
var contact = document.querySelector('.contact')
var photo = document.querySelector('.photo')
var lang = document.querySelector('.home-read-lang')
var eng = document.querySelector('.home-read-language-eng') 
var sec_1 = document.querySelector('.section_1')
var sec_2 = document.querySelector('.section_2')
var sec_3 = document.querySelector('.section_3')



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
});


    sec_1.addEventListener('wheel', scrolling_1)
    window.addEventListener("keyup", function (e) {
        if (e.keyCode == 40) {
            if (coord > -300) {
               coord -=100
               body.style.transform = "translateY("+coord+"%)"
            }
        }
        else if (e.keyCode == 38) {
            if (coord < 0) {
                coord +=100
                body.style.transform = "translateY("+coord+"%)"
            }
        }
       
            
       
    })
    sec_2.addEventListener('wheel', scrolling_2)
    sec_3.addEventListener('wheel', scrolling_3)

    
     
    function scrolling_1 (e) {
        if (e.deltaY > 0) {
            body.style.transform = "translateY(-100%)"
            }
        else {
            body.style.transform = "translateY(0%)"
        }        
    }

    function scrolling_2 (e) {
        if (e.deltaY > 0) {
            body.style.transform = "translateY(-200%)"
            }
        else {
            body.style.transform = "translateY(0%)"
        }        
    }

    function scrolling_3 (e) {
        if (e.deltaY > 0) {
            body.style.transform = "translateY(-300%)"
            }
        else {
            body.style.transform = "translateY(-100%)"
        }        
    };


[].forEach.call(document.querySelectorAll('img[data-src]'),   
    function(img) {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.onload = function() {
            img.removeAttribute('data-src');
        };
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
        


   







