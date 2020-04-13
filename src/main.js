import { journal } from "./journal.js";
import { vowels } from "./vowels.js";
import { consonants } from "./consonants.js";
import { teaser } from "./teaser.js";
import "./styles.css";

$(document).ready(function() {
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();

  })
})