(function () {

  var $chatIcon = $("#chat_launcher"),
      $overlay = $("#overlay"),
      $chatModal = $("#chat_modal");

  //disabling all links
  $("a").on("click", function (e) {
    e.preventDefault();
  });

  $chatIcon.on("click", function (e) {
    $overlay.fadeIn();
    $chatModal.fadeIn();
    e.preventDefault();
  });

  $overlay.on("click", function () {
    $overlay.fadeOut();
    $chatModal.fadeOut();
  });

}());
