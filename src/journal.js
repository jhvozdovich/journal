// Backend Buisness Logic
export function consonant(body) {
  var consonantCount = 0;
  var consonantArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  body.forEach(function(letter) {
    if (consonantArray.includes(letter)) {
      consonantCount += 1;
    }
  });
  return consonantCount;
}
