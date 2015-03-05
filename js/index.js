(function () {

  var $chatIcon = $("#chat_launcher"),
      $overlay = $("#overlay"),
      $chatModal = $("#chat_modal");

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
