// Backend Buisness Logic
export function consonant(body) {
  var consonantCount = 0;
  var consonants = (!["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  body.forEach(letter) {
    if (consonants.includes(letter)) {
      consonantCount += 1;
    };
  };
  return consonantCount;
};
