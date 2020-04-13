// Backend Buisness Logic
export function consonants(bodyText) {
  var consonantCount = 0;
  var vowelArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for (var i=0; i < bodyText.length; i++) {
    if (!vowelArray.includes(bodyText[i])) {
      consonantCount += 1;
    }
  }
  return consonantCount;
}