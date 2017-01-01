

function returnIntegers (data) {
  var count = 0;

  function looper (arr) { //recursive

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array) { //instanceof: object to test against function constructor
        looper(arr[i]);

      } else if (arr[i] >= 0) {
        count++;
      }
    }
  }

  looper(data);
  console.log(count);
}
                                                    //results
returnIntegers([]);                                 // 0
returnIntegers([[]]);                               // 0
returnIntegers([1, [1]]);                           // 2
returnIntegers([1, [], 2, [], 3, []]);              // 3
returnIntegers([0, [1, [5, [4, 3], 1], 1]]);        // 7
returnIntegers([[[5], 3], 0, 2, [], [4, [5, 6]]]);  // 7
