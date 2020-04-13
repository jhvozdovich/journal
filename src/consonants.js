// Backend Buisness Logic
export function consonant(bodyText) {
  var consonantCount = 0;
  var vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for (var i=0; i < bodyText.length; i++) {
    if (!vowelsArray.includes(bodyText[i])) {
      consonantCount += 1;
    }
  }
  return consonantCount;
}
