$("h1").css("color", "white");


$("body").keydown(function(event) {
  $("h1").text(event.key);
});

$("h1").mouseover(function() {
  $("h1").css("color", "white")
});

$("h1").mouseout(function() {
  $("h1").css("color", "green")
});
