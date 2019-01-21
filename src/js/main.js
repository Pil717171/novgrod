
(function(){
    window.onscroll = CoordinateTiresHeader; 
    function CoordinateTiresHeader () {
        document.querySelectorAll(".tires-images").forEach(function (images) {
            var coordImg = images.getBoundingClientRect()
                if (coordImg.y < document.documentElement.clientHeight) {
                    drive2(images);
                    document.querySelectorAll(".tires-images_tire_wheel").forEach(function (wheel) {
                        var coord2 = wheel.getBoundingClientRect()
                        if (coord2.y < document.documentElement.clientHeight) {
                            drive(wheel);
                        }
                    })    
                }
            function drive (element) {
                element.classList.add("tires-images_tire_wheel--rotate")   
                };
                
            function drive2 (element) {
                element.classList.add("tires-images--drive")
                };       
            })
            
        document.querySelectorAll(".tires_revers-images").forEach(function (imagesRevers) {
            var coordImgRevers = imagesRevers.getBoundingClientRect()
                if (coordImgRevers.y < document.documentElement.clientHeight) {
                    drive4(imagesRevers);
                    document.querySelectorAll(".tires_revers-images_tire_wheel").forEach(function (wheelRevers) {
                        var coord3 = wheelRevers.getBoundingClientRect()
                        if (coord3.y < document.documentElement.clientHeight) {
                            drive3(wheelRevers);
                        }
                    })    
                }    
      
            function drive3 (elementReverse) {
            elementReverse.classList.add("tires_revers-images_tire_wheel--rotate")   
            };
            
            function drive4 (elementReverse) {
            elementReverse.classList.add("tires_revers-images--drive")
            };
        })
        console.log("dsknsnk")
        var headerTop = document.querySelector(".header-top")
        var header = document.querySelector(".header")
        var coord = headerTop.getBoundingClientRect()
        var height = coord.height
        var scrolling = window.pageYOffset

        if (scrolling > height) {
            header.classList.add("header--none")
        }
        else {
            header.classList.remove("header--none")
        }
    }       
})();
    

    // (function(){

    //     document.querySelectorAll(".tires").forEach(function (tires){
    //         tires.onmouseover = function coordinate () {
    //             document.querySelectorAll(".tires_revers-images").forEach(function (images) {
    //                 var coordImg = images.getBoundingClientRect()
    //                 if (coordImg.y < document.documentElement.clientHeight) {
    //                     drive2(images);
    //                     document.querySelectorAll(".tires_revers-images_tire_wheel").forEach(function (wheel) {
    //                         var coord2 = wheel.getBoundingClientRect()
    //                         if (coord2.y < document.documentElement.clientHeight) {
    //                             drive(wheel);
    //                         }
    //                     })    
    //                 }
    //             })
    //         };
          
    //         function drive (element) {
    //             element.classList.add("tires_revers-images_tire_wheel--rotate")   
    //         };
            
    //         function drive2 (element) {
    //             element.classList.add("tires_revers-images--drive")
    //         };
    //     })        
    // })();
