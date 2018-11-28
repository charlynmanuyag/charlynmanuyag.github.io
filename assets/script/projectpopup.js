let num;
$(document).ready(function() {
  console.log("im in!")
  $(".project").click(function() {
    console.log("i just clicked!")
    num = this.id;
    $("#s" + num).show("drop", 500);
  });
  $(".close").click(function() {
    console.log("closing!")
    $("#s" + num).hide("drop", 500);
  });
})
