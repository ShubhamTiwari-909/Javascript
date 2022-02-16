let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

if (arr.length < 12) {
  console.log("true");
} else if (arr.length > 12) {
  console.log(true);
} else {
  console.log(true);
}

switch (arr.length) {
  case 5:
    console.log(5);
    break;
  case 10:
    console.log(10);
    break;
  case 12:
    console.log(12);
    break;
  default:
    break;
}


