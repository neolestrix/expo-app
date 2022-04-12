let isOpen = false;
  
$('.child').on('click', function() {
  if (!isOpen) {
    $('.child').removeClass('active');
    $(this).addClass('active');
    isOpen = true;
  } else {
    $(this).removeClass('active');
    isOpen = false;
  }
});


// load video after everything else is loaded
video = jQuery('#video').get()[0];

video.addEventListener('loadeddata', function() {
    video.play();
});

video.addEventListener('pause', function() {
    video.play();
});