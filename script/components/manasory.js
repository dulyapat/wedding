

  // init Masonry
// var $grid = $('.grid').masonry({
//     percentPosition: true,
//     columnWidth: '.grid-sizer',
//     itemSelector: '.grid-item'
//   });
//   // layout Masonry after each image loads
//   $grid.imagesLoaded().progress( function() {
//     $grid.masonry('layout');
//   });

  var $grid = $('.grid').imagesLoaded( function() {
    // init Masonry after all images have loaded
    $grid.masonry({
        percentPosition: true,
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item'
    });
  });

  console.log('work');