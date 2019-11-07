function findLongestWordLength(str) {

  var res = []
  str = str.split(' ')
  // console.log(str)

  for (var i = 0; i < str.length; i++) {
    var length = str[i].length;
    // console.log(length)
    res.push(length)

  }

  var max = Math.max(...res)
  console.log(max)

  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//7 mins
