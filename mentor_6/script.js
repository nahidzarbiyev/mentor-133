// let obj = {
//     name:'aydin'
// }


// let arr = []
// if (localStorage.getItem('name')) {
//    arr = JSON.parse(localStorage.getItem('name'))
// }
// else{
//     arr = []
// }



// localStorage.setItem('name',JSON.stringify(['Aydin','vasif']))
// localStorage.setItem('x',JSON.stringify(['Aydin','vasif']))
// localStorage.setItem('y',JSON.stringify(['Aydin','vasif']))
// let data = JSON.parse(localStorage.getItem('name'))
// console.log(typeof data);
// console.log( data);
// let li = document.createElement('li')

// localStorage.clear()

// data = []
// console.log(data);


let user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
    }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
    }
    }

let dataArr = []
//     let userdata = localStorage.getItem('user') === null
//     ? []
//     :
//     dataArr.push(JSON.parse(localStorage.getItem('user')))
    
    
    
    localStorage.setItem('user',JSON.stringify(user) )
    console.log(dataArr);
    dataArr.map(el=>console.log(el.address))

    let userdata = localStorage.getItem('user')
    // console.log(userdata);

    if (localStorage.getItem('user')) {
        dataArr.push(JSON.parse(localStorage.getItem('user')))
    }
    else{
        dataArr = []
    }
    console.log(dataArr);


    