$("button").click(function () {
  $.getJSON(
    "https://joshuabrad03.github.io/data-file-george/data.json",
    function (result) {
      $.each(result, function (i, field) {
        $("div").append(field + " ");
      });
    }
  );
});
