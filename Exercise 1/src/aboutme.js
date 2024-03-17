document.body.style.fontFamily =  "Arial, sans-serif";

const myName = document.querySelector('#nickname');

myName.textContent = 'thanh'

const myfavo = document.querySelector('#favorites');

myfavo.textContent = 'swim'

const myHome = document.querySelector('#hometown');

myHome.textContent = 'DN'

const myList = document.getElementsByTagName('li')

for(let i =0; i< myList.length ; i++) {
  myList[i].className = 'listitem'
}

const myImg = document.createElement('img')

myImg.src = "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.18169-9/31357866_442826556141679_5136504928394639721_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GXmNFY9-AjgAX8H_-Oy&_nc_ht=scontent-hkg4-1.xx&oh=00_AfB6xN55-jtUUpRQMvZjIvplkkUPHU038GTJ8XoBeiQ-Hw&oe=661BB742"

document.body.appendChild(myImg)