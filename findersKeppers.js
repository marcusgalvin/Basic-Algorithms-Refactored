//loop thru array
//return first element in array that passes the test

function findElement(arr, func) {
  let num = 0;

  for (var i = 0; i < arr.length; i++) {
    num = arr[i];

    if (num % 2 === 0) {
      return num;
    }
  }

  return undefined;
}
findElement([1, 3, 5, 8, 9, 10],

  function (num) {

    return num % 2 === 0;

  })

//solved in 11 mins