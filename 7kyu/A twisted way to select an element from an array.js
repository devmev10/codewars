// You have two arrays: arrSearch and arrTake. arrSearch has to be sorted in reverse alphabetical order. Now, from arrSearch extract the third element, and from that element select the third letter. If the letter you selected matches the first letter of one or more elements of arrTake, return the first element that starts with the respective letter. If there is no element to match in the second array then return 'Nothing here'.

// My Solution

function select(arrSearch, arrTake) {
  console.log(arrSearch, arrTake);
  let thirdLetter = arrSearch.sort().reverse()[2][2];
  return arrTake.find((item) => item[0] === thirdLetter)
    ? arrTake.find((item) => item[0] === thirdLetter)
    : "Nothing here";
}
