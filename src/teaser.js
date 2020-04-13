// BackEnd Buisness Logic
export function teaser(bodyText) {
  var teaserArray = [];
  var bodyArraySentences = bodyText.split("." + "?" + "!");
  console.log(bodyArraySentences);
  var firstSentence = bodyArraySentences[0];
  console.log(typeof(firstSentence));
  var firstSentenceArray = firstSentence.split(" ");

  if (firstSentenceArray.length < 8) {
    return firstSentence;
  } else {
    for (var i=0; i < 8; i++) {
      teaserArray.push(firstSentenceArray[i]);
    }
    return teaserArray.join(" ");
  }
}