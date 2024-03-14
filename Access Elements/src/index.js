const demoId = document.getElementById('demo');
const demoClass = document.getElementsByClassName('demoClass');
const demoTag = document.getElementsByTagName('section');
const demoQuery = document.querySelector('#demo-query');
const demoAllQuery = document.querySelectorAll('.demo-query-all');

console.log(demoQuery);

demoId.style.border = '1px solid black';
demoId.style.height = '200px';
demoId.style.width = '200px';

for (let i=0; i< demoClass.length; i++) {
  demoClass[i].style.border = '1px solid black';
}

for (let i=0; i< demoTag.length; i++) {
  demoTag[i].style.border = '1px solid black';
  demoTag[i].style.margin = '10px 0';
}

const size = demoTag.length-1;

demoTag[size].style.border = '1px solid red';


demoQuery.style.border = '1px solid black';


demoAllQuery.forEach(query => {
  query.style.border = "1px solid blue"
})
