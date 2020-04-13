// BackEnd Buisness Logic
export function vowels(body) {
  var vowelCount = 0;
  var vowels = /^[aeiou]$/i;

  body.forEach(letter) {
    if (vowels.includes(letter)) {
      vowelCount += 1;
    };
  };
  return vowelCount;
};