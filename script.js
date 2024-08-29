let containerElem = document.querySelector('.container')
let inputElem = document.querySelector('input')

containerElem.style.filter = 'brightness(50%)'

inputElem.addEventListener('change', function (event) {
   containerElem.style.filter = 'brightness('+event.target.value+'%)'
})
