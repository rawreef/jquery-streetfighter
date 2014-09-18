$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    // play hadouken sound
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $(".hadouken").show();
    .animate(
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      }
    );
  })
  .mouseup(function() {
  $('.ryu-throwing').hide();
  $('.ryu-ready').show();
  });
});
/*
I've commented out the .animate section above, as it stopped
the whole file working. See halfway down this page for details:
http://www.thinkful.com/courses/FEWD-001/unit/2/lesson/3/assignment/7
*/
// do I need a semicolon after }) normally?