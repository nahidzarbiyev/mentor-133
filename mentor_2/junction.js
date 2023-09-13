// function fullName(lastname, firstName) {
//   let fullName = lastname + " " + firstName;
//   return alert(fullName);
// }

// fullName("john", "doe");

//task2

// function bigNumber(numbers) {
//   let nums = numbers;
//   let resultNumber = nums[0];
//   for (let i = 0; i <= nums.length; i++) {
//     if (resultNumber <= nums[i]) {
//       resultNumber = nums[i];
//     }
//   }
//   return alert(resultNumber);
// }

// let numbers = [12, 23, 324, 23, 34, 4535, 235453];

// bigNumber(numbers);

//task3

// function convertTuRubl(dollar, rubl) {
//   let dollarToRubl = dollar * 75;
//   let result = dollarToRubl + rubl;
//   return alert(result);
// }

// convertTuRubl(20, 1200);

// let arr = {
//   0: "sifir",
//   1: "bir",
//   2: "iki",
//   3: "uc",
//   4: "dord",
//   5: "bes",
//   6: "alti",
//   7: "yeddi",
//   8: "sekkiz",
//   9: "doqquz",
//   10: "on",
//   20: "iyirmi",
//   30: "otuz",
//   40: "qirx",
//   50: "elli",
//   60: "altmis",
//   70: "yetmis",
//   80: "seksen",
//   90: "doxsan",
// };

// function convertText(number) {
//   let onluq = Math.floor(number / 10) * 10; //20
//   if (number.toString().length > 1 && number.toString()[1] > 0) {
//     if (onluq in arr) {
//       return console.log(arr[onluq] + " " + arr[number.toString()[1]]);
//     }
//   }
//   else if (number in arr) {
//     return console.log(arr[number]);
//   }
// }
// convertText(10);

// function min(num1, num2) {
//   if (num1 < num2) {
//     console.log(true);
//   } else {
//     return console.log(false);
//   }
// }

// min(12, 13);

// function isLucky(num1, num2, num3, num4) {
//   if (num1 + num2 == num3 + num4) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// isLucky(1, 3, 4, 2);

// function toCapitalize(text) {
//   let arr = text.split(" ");
//   let letter = [];
//   for (let i = 0; i < arr.length; i++) {
//     letter.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
//   }
//   return alert(letter.join(" "));
// }

// let text =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod!";
// toCapitalize(text);

// function isEven(number) {
//   if (number % 2 == 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// isEven(22);

// function isvalidnumber(number) {
//   if (number.length - 1 === 11 && number.slice(0, 2) == "+7") {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isvalidnumber("+71234567890");
