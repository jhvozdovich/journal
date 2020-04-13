// BackEnd Buisness Logic
export function teaser(bodyText) {
  var teaserArray = [];
  var bodyArraySentences = bodyText.split(".");
  console.log("Body array sentences: " + bodyArraySentences);
  var firstSentence = bodyArraySentences[0];
  console.log("First Sentence type: " + typeof(firstSentence));

  var firstSentenceArray = firstSentence.split(" ");
  console.log("First sentence" + firstSentenceArray);

  if (firstSentenceArray.length < 8) {
    return firstSentence;
  } else {
    for (var i=0; i < 8; i++) {
      teaserArray.push(firstSentenceArray[i]);
    }
    return teaserArray.join(" ");
  }
}