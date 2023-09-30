// function resolveAfter2Seconds() {
//     return new Promise((resolve,reject) => {
//         let e = false
//         if (!e) {
//             setTimeout(() => {
//                 resolve('resolved');
//               }, 2000);
//         }
//    else{
//     reject('error')
//    }
//     });
//   }

//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // Expected output: "resolved"
//   }

//   asyncCall();

const inputEl = document.getElementById("inputEl");
const btnEl = document.getElementById("btnEl");

let result = document.querySelector(".result");

btnEl.addEventListener("click", () => {
  let inputVal = inputEl.value;
  let url = `https://restcountries.com/v3.1/name/${inputVal}?fullText=true
    `;
    fetch(url)
    .then((res)=>res.json())
    .then(data=>{
        // console.log(data[0])
        // console.log(data[0].name.common)
        // console.log(data[0].flags.svg)
        // console.log(data[0].population)
        // console.log(data[0].area)
        // console.log(data[0].capital[0])
        // console.log(data[0].continents[0])
        // console.log(Object.keys(data[0].languages).toString().split(',').join(' '))
        // console.log(Object.keys(data[0].currencies)[0]) 
        // console.log(Object.values(data[0].currencies)[0].name)


        result.innerHTML = `
        <img src="${data[0].flags.svg}">
        <p>Name: <span>${data[0].name.common}</span></p>
        <p>Population: <span>${data[0].population}</span></p>
        <p>Area: <span>${data[0].area}</span></p>
        <p>Capital: <span>${data[0].capital[0]}</span></p>
        <p>Continents: <span>${data[0].continents[0]}</span></p>
        <p>Languages: <span>${Object.values(data[0].languages).toString().split(',').join(' ')}</span></p>
        <p>Currencies: <span>${Object.keys(data[0].currencies)[0]  } - ${Object.values(data[0].currencies)[0].name}</span></p>
      
        `

    })
});
