$(document).ready(function() {
    var navLinks = $("#nav_list a");
    navLinks.click(function(event) {
      event.preventDefault();
      var speakerTitle = $(this).attr("title");
      var jsonFile = "json_files/" + speakerTitle + ".json"; // JSON dosya yolunu oluşturun
  
      $.ajax({
        url: jsonFile,
        type: "GET",
        dataType: "json",
        success: function(response) {
          updateMainContent(response);
        },
        error: function(xhr, status, error) {
          console.log("Hata:", error);
        }
      });
    });
  
    function updateMainContent(response) {
      var main = $("main");
      var h1 = main.find("h1");
      var img = main.find("img");
      var h2 = main.find("h2");
      var p = main.find("p");
  
      h1.text(response.speakers[0].title);
      img.attr("src", response.speakers[0].image);
      h2.html(response.speakers[0].month + "<br>" + response.speakers[0].speaker);
      p.text(response.speakers[0].text);
    }
  }); // end ready