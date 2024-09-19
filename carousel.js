let position = 0;

$(".slide-btn").on("click", function (e) {
  let dataset = e.target.dataset.num;

  if (dataset == "-1") {
    if (position > 0) {
      position--;
      $(".slide-container").css(
        "transform",
        `translateX(-${position * 100}vw)`
      );
    } else {
      position = $(".slide").length - 1;
      $(".slide-container").css(
        "transform",
        `translateX(-${position * 100}vw)`
      );
    }
  } else if (dataset == "+1") {
    if (position < $(".slide").length - 1) {
      position++;
      $(".slide-container").css(
        "transform",
        `translateX(-${position * 100}vw)`
      );
    } else {
      position = 0;
      $(".slide-container").css(
        "transform",
        `translateX(-${position * 100}vw)`
      );
    }
  } else {
    $(".slide-container").css("transform", `translateX(-${dataset * 100}vw)`);
    position = dataset;
  }
});
