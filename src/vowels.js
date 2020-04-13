// BackEnd Buisness Logic
export function vowels(body) {
  var vowelCount = 0;
  var vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  body.forEach(function(letter) {
    if (vowelsArray.includes(letter)) {
      vowelCount += 1;
    }
  });
  return vowelCount;
}