// Your code goes here
const nav1 = document.querySelectorAll('nav a')
nav1[0].addEventListener('click', function(event){
    event.target.style.color = 'red'
})

nav1[1].addEventListener('mouseover', function(event){
    event.target.style.color = 'orange'
})

nav1[2].addEventListener('dblclick', function(event){
    event.target.style.color = 'grey'
})

nav1[3].addEventListener('wheel', function(event){
    event.target.style.color = 'purple'
})

const img1 = document.querySelector('intro img')

img1.addEventListener('focus', function(event){
    event.target.style.onblur
})

const img2 = document.querySelectorAll('img-content img')

img2[0].addEventListener('load', function(event){
    event.target.style.rotate
})

img2[1].addEventListener('drag', function(event){
    event.target.style.delete
})

const button1 = document.querySelectorAll('destination div')

button1[0].addEventListener('scroll', function(event){
    event.target.style.backgroundColor = 'green'
})

button1[1].addEventListener('select', function(event){
    event.target.style.backgroundColor = 'purple'
})

button1[2].addEventListener('dblclick', function(event){
    event.target.style.backgroundColor = 'aqua'
})

