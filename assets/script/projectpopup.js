let num;
$(document).ready(function() {
  $(".project").click(function() {
    num = this.id;
    $("#s" + num).fadeIn();
    $(".projects-collage").addClass("blurry");
  });
  $(".close").click(function() {
    $("#s" + num).fadeOut();
    $(".projects-collage").removeClass("blurry");
  });
})
