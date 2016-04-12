var pigatize = function (text) {
    if (startsWithVowel(text)) {
        return text + "way";
    } else {
        return text + "ay";
    }
};

var startsWithVowel = function (text) {
  if (text[0].search(/[aeiou]/) === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(pigatize("sam"));
console.log(pigatize("apple"));
