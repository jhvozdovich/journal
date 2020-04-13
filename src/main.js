// Frontend UI Logic

// import { journal } from "./journal.js";
import { vowels } from "./vowels.js";
import { consonants } from "./consonants.js";
import { teaser } from "./teaser.js";
import "./styles.css";

function journal(title, bodyText, vowelCount, consonantCount, teaserText) {
  $(".entries").append("<h3>" + title + "</h3>");
  $(".entries").append("<p>" + bodyText + "</p>");
  $(".entries").append("<p> Number of Vowels: " + vowelCount + "</p>");
  $(".entries").append("<p> Number of Consonants: " + consonantCount + "</p>");
  $(".entries").append("<p>" + teaserText + "</p>");
}

$(document).ready(function() {
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    console.log(title);
    var bodyText = $("#body").val();
    var vowelCount = vowels(bodyText);
    var consonantCount = consonants(bodyText);
    var teaserText = teaser(bodyText);
    
    journal(title, bodyText, vowelCount, consonantCount, teaserText);
  });
});