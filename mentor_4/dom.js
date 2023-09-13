//task1
// let li = document.querySelector('li')
// let li = document.querySelectorAll('li')[0]
// console.log(li);

// task2
let h1 = document.querySelector('h1')
let primary = document.querySelectorAll('.primary')
let li = document.querySelectorAll('li')

// h1.remove()
// let ul = document.querySelector('ul')
// let li = document.createElement('li')
// li.innerText = 'TITAN RTX'
// ul.append(li)

h1.textContent = 'GeForce 20 Series'

// console.log(primary);
// primary.forEach((el)=>{
//     el.style.color = '#ebebeb'
// })

li.forEach(el=>{
    el.classList.add('item')
    if (el.classList.contains('primary')) {
    el.style.color = '#ebebeb'
        
    }
    else{
        el.classList.add('secondary')
    }
})