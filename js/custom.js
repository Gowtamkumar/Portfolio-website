$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

// Soomth Scroll
// $(document).ready(function(){
//     // Add smooth scrolling to all links
//     $("a").on('click', function(event) {
  
//       // Make sure this.hash has a value before overriding default behavior
//       if (this.hash !== "") {
//         // Prevent default anchor click behavior
//         event.preventDefault();
  
//         // Store hash
//         var hash = this.hash;
  
//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//         $('html, body').animate({
//           scrollTop: $(hash).offset().top
//         }, 800, function(){
  
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         });
//       } // End if
//     });
//   });
  // Soomth Scroll end

  // Portfolio option js start

  $(document).ready(function(){
    $('.list').click(function(){
        const value =$(this).attr('data-filter');
        if(value == 'all'){
            $('.col-xl-4').show('1000');

        }else{
            $('.col-xl-4').not('.'+value).hide('1000');
            $('.col-xl-4').filter('.'+value).show('1000')

        }
    })
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
})
  // Portfolio option js end

  // Menu Scroll start
  window.addEventListener('scroll', function(){
    var header = document.querySelector("nav");

      header.classList.toggle("sticky", window.scrollY > 0);

  });
  // Menu Scroll start