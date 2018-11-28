$(document).ready(function(){
  $("body").addClass('show');

  $('a').click(function(evt) {
    evt.preventDefault();

    $('body').removeClass('show');

    setTimeout(function() {
      window.location.href = $(evt.currentTarget).attr('href');
    }, 800);
  });
});
