/* Modular fashion.
*   -> For every plugin you make a function and call it.
*/

$(document).ready(function(){
// Code ? When the page finished loading.
    init();

});

function init(){
    slider()


}
function slider(){
    $('#slide').vegas({
        cover: true,
        loop: true,
        slides: [
            { src: 'assets/images/header-bg1.png', delay: 1000},
            { src: 'assets/images/header-bg2.png', delay: 1000},
            { src: 'assets/images/Rectangle-31.png', delay: 1000}
        ]
    })
}


$(document).ready(function() {
 
  $(".owl-carousel").owlCarousel({
 
      autoPlay: 1500, //Set AutoPlay to 3 seconds
 
      items : 4,
      
  });
 
});