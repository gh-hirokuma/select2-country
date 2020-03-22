$(function() {
  $.ajax({
    type: "GET",
    url: "/public/countries.json",
    success: async function(data) {
      for (country of data.data) {
        const $option = $("<option>")
          .val(country.code)
          .text(country.name);

        $('select[name="state"]').append($option);
      }

      $(".js-example-basic-single").select2();
    },
    fail: function(err) {
      console.log(err);
    }
  });
});
