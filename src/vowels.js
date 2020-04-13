// BackEnd Buisness Logic
export function vowels(bodyText) {
  var vowelCount = 0;
  var vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for (var i=0; i < bodyText.length; i++) {
    if (vowelsArray.includes(bodyText[i])) {
      vowelCount += 1;
    }
  }
  return vowelCount;
}

//   bodyText.forEach(function(letter) {
//     if (vowelsArray.includes(letter)) {
//       vowelCount += 1;
//     }
//   });
//   return vowelCount;
// }