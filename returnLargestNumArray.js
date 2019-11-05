function largestOfFour(arr) {

  var result = []

  for (var i = 0; i < arr.length; i++) {

    var max = Math.max(...arr[i])
    console.log(max)

    result.push(max)

  }


  // You can do this!
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  //solved in 2 minutes