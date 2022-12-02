let arr = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

// (1)

function findFirstLetterOfWord(array, letter) {
  let newArr = [];
  array.forEach((obj) => {
    if (obj.name[0] == letter) {
      newArr.push(obj.name);
    }
  });
  console.log(newArr);
}

findFirstLetterOfWord(arr, "t");

/// (2)

function firstAndLastLetterOfWord(array, letter) {
  count = 0;
  array.forEach((obj) => {
    if (obj.name[0] == letter && obj.name[obj.name.length - 1] == letter) {
      count++;
    }
  });
  console.log(count);
}

firstAndLastLetterOfWord(arr, "t");

//// (3)

function countOfKey(array, letter) {
  sum = 0;
  array.forEach((obj) => {
    if (obj.name[0] == letter && obj.name[obj.name.length - 1] == letter) {
      sum += obj.key;
    }
  });
  console.log(sum);
}

countOfKey(arr, "t");

///// (4)

function superDev(array, letter) {
  array.forEach((obj) => {
    if (obj.name[obj.name.length - 1] == letter) {
      obj.name = "SuperDev";
      console.log(obj.name);
    }
  });
}

superDev(arr, "e");

////// (5)

function findLongestWord(array) {
  let longestWord = 0;
  let longestKey;
  array.forEach((obj) => {
    if (obj.name.length > longestWord) {
      longestWord = obj.name.length;
      longestKey = obj.key;
    }
  });
  console.log(longestKey);
}

findLongestWord(arr);

/////// (6)

function longestWordIndexPow(array) {
  let longestWord = 0;
  let index;
  array.forEach((obj) => {
    if (obj.name.length > longestWord) {
      longestWord = obj.name.length;
      index = array.indexOf(obj);
    }
  });
  console.log(index * index);
}
longestWordIndexPow(arr);

//////// (7)

function fourLetterWords(array) {
  let array1 = [];
  array.forEach((obj) => {
    if (obj.name.length == 4) {
      array1.push(obj.name);
    }
  });
  console.log(array1);
}

fourLetterWords(arr);

///////// (8)

function findBiggestKeyName(array) {
  let biggestKey;
  array.forEach((obj) => {
    biggestKey = Math.max(obj.key);
  });
  console.log(biggestKey);
}

findBiggestKeyName(arr);

////////// (9)

function indexOfDoubleL(array, char) {
  array.forEach((obj) => {
    let count = 0;
    for (let i = 0; i < obj.name.length; i++) {
      obj.name[i] == char && count++;
    }
    count > 1 && console.log(array.indexOf(obj));
  });
}

indexOfDoubleL(arr, "l");

/////////// (10)

function keyOfDoubleT(array, char) {
  array.forEach((obj) => {
    let count = 0;
    for (let i = 0; i < obj.name.length; i++) {
      obj.name[i] == char && count++;
    }
    count > 1 && console.log(obj.key);
  });
}

keyOfDoubleT(arr, "t");

//////////// (11)

function lastFunc(array, keyValue, letter) {
  array.forEach((obj) => {
    if (obj.key > keyValue && obj.name[0] == letter) {
      console.log(obj.name);
    }
  });
}

lastFunc(arr, 10, "l");
