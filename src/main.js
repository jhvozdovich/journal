// Frontend UI Logic

// import { journal } from "./journal.js";
import { vowels } from "./vowels.js";
import { consonants } from "./consonants.js";
// import { teaser } from "./teaser.js";
import "./styles.css";

function journal(title, body, vowelCount) {
  $(".entries").append("<h3>" + title + "</h3>");
  $(".entries").append("<p>" + body + "</p>");
  $(".entries").append("<p> Number of Vowels: " + vowelCount + "</p>");
  $(".entries").append("<p> Number of Consonants: " + consonantCount + "</p>");
}

$(document).ready(function() {
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var vowelCount = vowels(body);
    var consonantCount = consonants(body);
    
    journal(title, body, vowelCount);
  });
});