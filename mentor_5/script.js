let contanier = document.getElementById('container')
let wrapper = document.querySelector('.wrapper')
let btn = document.querySelector('button')
// let lnk = document.querySelector('a')
let form = document.querySelector('form')
let input = document.querySelector('#txt')
let rabgeInput = document.querySelector('#range')
contanier.addEventListener('click', function(){
    document.body.style.backgroundColor = '#8ac463'

})
wrapper.addEventListener('click', function(e){
    e.stopPropagation()
    document.body.style.backgroundColor = '#accdca'

})

btn.addEventListener('click', function(e){
    e.stopPropagation()

    document.body.style.backgroundColor = '#fff'

})


// window.addEventListener('load', function(){
// document.body.style.backgroundColor = '#333'
// })
let state;
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(input.value);
  state = input.value
})



// lnk.addEventListener('click', ()=>{
//     console.log('form clicked');
// })

input.addEventListener('input',(e)=>{
console.log(e.target.value);
})
input.addEventListener('change',(e)=>{
    console.log(e.target.value);
    })
rabgeInput.addEventListener('input',(e)=>{
    let target = e.target
    console.log( `${target.value}`);
document.body.style.backgroundColor = `#${target.value}`
})