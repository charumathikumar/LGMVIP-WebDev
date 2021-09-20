// for video section
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 5,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay:{
        delay:1800,
        disableOnInteraction:false
    }

  });

  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }


// for review section
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
  
    slidesPerView: "auto",
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop:true,
    
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  
  
  
