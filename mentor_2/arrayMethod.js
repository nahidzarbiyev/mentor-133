// let nameArr = ["john", "Doe", "javascript"];
// console.log(nameArr[1]);

// let str = nameArr[1].slice(0).replace(nameArr[1], "Classified");

// console.log(str);

//task2

// let arr = ["New Hope", "The Empire Strikes Back", "Return of the Jdi"];

// for (let i = 0; i < arr.length; i++) {
//   let str = `Episode ${4 + i}: ${arr[i]}`;
//   console.log(str);
// }

// arr.forEach((elem, i) => {
//   console.log(`Episode ${i + 4}: ${elem}`);
// });

//task3

let salary = [
  [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
  [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
  [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
  [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
  [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
  [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
  [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
  [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
  [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
  [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75],
];

// function getAnnualSalary(salary) {
//   let sum = 0;
//   for (let i = 0; i < salary.length; i++) {
//     for (let j = 0; j < salary[i].length; j++) {
//       sum += salary[i][j];
//     }
//   }
//   return alert(sum);
// }

// getAnnualSalary(salary);

// function getMonthlySalary(salary, month) {
//   let arr = [];
//   for (let i = 0; i < salary.length; i++) {
//     arr.push(salary[i][month - 1]);
//   }
//   console.log(arr);
// }

// getMonthlySalary(salary, 12);

function getQuarterSalary(salary, rub) {
  let sum = 0;
  let arr = [];
  if (rub == 1) {
    for (let i = 0; i < salary.length; i++) {
      arr.push(salary[i].slice(0, 3));
      for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
      }
    }
  } else if (rub == 2) {
    for (let i = 0; i < salary.length; i++) {
      arr.push(salary[i].slice(3, 6));
      for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
      }
    }
  } else if (rub == 3) {
    for (let i = 0; i < salary.length; i++) {
      arr.push(salary[i].slice(6, 9));
      for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
      }
    }
  } else if (rub == 4) {
    for (let i = 0; i < salary.length; i++) {
      arr.push(salary[i].slice(9, 12));
      for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
      }
    }
  } else {
    alert(false);
  }

  return alert(sum);
}

getQuarterSalary(salary, 5);
