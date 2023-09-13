// task1

// let user = new Object()
// user.name = 'Nahid'
// user.age = 20
// console.log(user);

// let user = {
//     ad:'Nahid',
//     age:20,
//     firstName:function(){
//         return  `adim ${this.ad}-dir` 
//     }
       
    
// }

// console.log(user.firstName());
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person.fullName());


// let user = {
//     ad:'Nahid',
//     gender:'Male',
//     date:`2003.00.00`,
//     age:30,
//     setAge: function (age){
//         console.log(65- age);
//     }
// }
// console.log(user.age);
// console.log(user.setAge(20));

// delete user.gender
// console.log(user);
// // delete user.date
// // console.log(user);

//task2


// let client = {
//     fullName:' John Doe',
//     limit:1000,
//     balans:200,
//     precentOfMinPayment:15,
//     getBalance:function(){
//      return this.balans >0 ? alert(`balans ${this.balans}`) : alert(`borcunuz ${this.balans}`)
//     },
//     getMinPaymant:function(){
//         let sum = 0
//     if (this.balans<0) {
//         sum = -((this.balans) + this.balans*(this.precentOfMinPayment/100))
//         return sum
//     }
//     else{
//         alert('sizin borcunuz yoxdu')
//     }

//     },
//     withdraw: function(x){
//         let sum = 0
//         sum = this.balans - x
//         sum>0 ? this.balans = sum : alert('sizin kifayet qeder balansiniz yoxdur')
//         return sum
//     },
//     refill:function(x){
//         let sum = 0
//         sum = this.balans + x
//         this.balans = sum
//         return sum
        
//     }
// }
// console.log(client.getBalance());
// console.log(client.getMinPaymant());

// console.log(client.withdraw(50), client);
// console.log(client.withdraw(300), client);
// console.log(client.refill(200),client.balans);


//task5

// let kalkulyator = {
//     yaddas: 0,
//     toplama:function(x,y){
//         this.yaddas = x+y
//         return x+y
//     },
//     cixma:function(x,y){
//         this.yaddas = x-y

//         return x-y
//     },
//     vurma:function(x,y){
//         this.yaddas = x*y

//         return x*y
//     },
//     bolme:function(x,y){
//         this.yaddas = x/y

//         return x/y
//     }
// }

// console.log(kalkulyator.toplama(20,39));
// console.log(kalkulyator.cixma(15,10));
// console.log(kalkulyator.yaddas);
// console.log(kalkulyator.vurma(4,6))
// console.log(kalkulyator.bolme(100,120));

