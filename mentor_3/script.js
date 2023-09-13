//task1

// let namesArr = ['asif','tural','kamil']

// namesArr.push('vasif')
// // console.log(namesArr);
// let str = 'nahid'
// let copyArr = [...str] //
// console.log(copyArr);

// function add(numsArr,callback) {
//     // console.log(arguments);
//     let arr =[]
//     for (let i = 0; i < 7; i++) {
//         arr[i]=callback(numsArr[i]*2)

//     }
//     // return console.log(arr);
// }

let numsArr = [1, 2, 3, 25, 36, 6, 7, 13];

// function callback(b) {
//     return console.log(b+2);
// }

// // add(numsArr,callback)

// numsArr.map((a,i)=>console.log('index:',i,a))

// console.log(Math);

// console.log(numsArr[Math.floor(numsArr.length/2)]);
// console.log(Math.max(...numsArr));
// console.log(Math.min(...numsArr));

// let copyArr = [...numsArr]

// copyArr.push(10,12,14)
// console.log(numsArr);

// let arr =[]
// for (let i = 0; i < copyArr.length; i++) {
// arr.push(copyArr[i]*2)

// }
// console.log(arr);

let employees = [
     'Jaylee Macy',
     'John Smith',
    'Blossom Hartley',
    'Austin Carpenter',
     'Joan Knowles',
     'Sally Nunez',
     'Laurel Ward',
     'Lark Simon',
     'Jane Stone',
    'Courtney Olson',
  ];

// let result = prompt('ad soyad')

//   employees.forEach((a,i)=>console.log(a,i))

// if (result==='') {
//     console.log(employees[0]);
//     employees.shift()
// }
// else if(result=='='){
//     employees.forEach((a,i)=>console.log(a,`novbe${i}`))

// }
// else {

//         employees.push(result)
//     }

//   employees.forEach((a,i)=>console.log(a,i))

let array = [
  1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45,
  22,
];
// let sortedArr = array.sort((a,b)=>a-b)
// console.log(sortedArr);
// console.log(employees.toSorted());
// console.log(employees.sort());

// let negativeNum=[]
// let positiveNum=[]
// for (let i = 0; i < array.length; i++) {

// if (array[i]<0) {
//     negativeNum.push(array[i])
// }
// else if (array[i]>0) {
//     positiveNum.push(array[i])
// }
// }

// console.log(negativeNum);
// console.log(positiveNum);

// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];


// names.forEach(printWithDashes);
// names.forEach(printWithHearts);
// names.forEach(printWithIndex);

// function printWithDashes(a){
//     console.log(`
//     -------------
//     ${a}
//     ------------- 
//     `);
// }
// function printWithHearts(a){
//     console.log(`
//     <3<3<3<3 ${a} <3<3<3<3 

//     `);
// }
// function printWithIndex(a,i){
//     console.log(`
//     ${i}-${a}
//     `);
// }

// let result = prompt('kabab-case')

// let upperCase = result.replace('-','_').toLocaleUpperCase()
// console.log(upperCase);
// let negativeNum=[]
// let positiveNum=[]
// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];

// numbers.map((a)=>{
//     if (a<0) {
//         negativeNum.push(a*-1)
//     }
//     else if (a>0) {
//         positiveNum.push(a*2)
//     }
  
// })

// console.log(negativeNum);
// console.log(positiveNum);

// let str = ['asef','vusal','amil','Azer','kazim']
// let nameWithA = []
// str.filter((a)=>{
//   if (a[0].toLocaleLowerCase()==='a') {
//     nameWithA.push(a)
//   }
// })

// console.log(nameWithA);

// let edv = []
// let edvdeyer = 0

// function addTax(params){
// params.forEach(x => {
//      edvdeyer = (x*20)/80
   
    
//     edv.push(x+edvdeyer)
  
// });
// return edv
// }

let nums = [10,25,43,120,100,80,13,15]
// addTax(nums)
// console.log(edv);
let cut = []
let tek = []
function countEvensAndOdds(nums){
    nums.forEach(elem => {
        if (elem%2==0) {
            cut.push(elem)
        }
        else{
            tek.push(elem)
        }
    });
    return `Massivdə ${cut.length} cüt və ${tek.length} tək ədəd var`
}


console.log(countEvensAndOdds(nums));