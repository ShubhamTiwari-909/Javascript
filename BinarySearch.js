const BinarySearch = (array, item) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === item) {
      return array[mid];
    } else if (array[mid] > item) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return "Element not found";
};

let array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];

console.log(BinarySearch(array, 15));
