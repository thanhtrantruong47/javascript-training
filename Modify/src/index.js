
// Modifying Attributes

const demoImg = document.querySelector('#demo');

console.log(demoImg.hasAttribute('src'))

console.log(demoImg.getAttribute('src'))
demoImg.removeAttribute('src')
console.log(demoImg.hasAttribute('src'))
demoImg.setAttribute('src','https://dulichsinhcafe.com.vn/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg')
console.log(demoImg.hasAttribute('src'))

// Modifying Attributes class

const firstDiv = document.querySelector('div')
firstDiv.style.backgroundColor = 'blue'
firstDiv.classList.add('div', 'light', 'hidden')
console.log(firstDiv)

const demoClass = document.querySelector('.demo');
console.log(demoClass)
demoClass.classList.toggle('hidden')

const demoBtn = document.querySelector('.btn');

demoBtn.addEventListener('click', () => {
  demoClass.classList.toggle('hidden')
  demoClass.classList.replace('demo', 'light')
})