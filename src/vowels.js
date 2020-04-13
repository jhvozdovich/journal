// BackEnd Buisness Logic
export function vowels(body) {
  var vowelCount = 0;
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  body.forEach(letter) {
    if (vowels.includes(letter)) {
      vowelCount += 1;
    };
  };
  return vowelCount;
};