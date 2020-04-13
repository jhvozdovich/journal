// Frontend UI Logic

// import { journal } from "./journal.js";
// import { vowels } from "./vowels.js";
// import { consonants } from "./consonants.js";
// import { teaser } from "./teaser.js";
import "./styles.css";
import "./jquery-3.4.1.js";
import "./bootstrap.css";

function journal(title, body) {
  $("#entries").html("<h3>" + title + "</h3>");
  $("#entries").html("<br>");
  $("#entries").html("<p>" + body + "</p>");
}

$(document).ready(function() {
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    
    journal(title, body);
  });
});