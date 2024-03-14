let navLink = document.getElementById('nav');
navLink.href =  'https://www.wikipedia.org';
navLink.textContent = 'Navigate to Wikipedia';
navLink;

let btn = document.getElementById('changeBg')

btn.addEventListener('click', () => {
  btn.textContent = "background has been change"
  document.body.style.background = 'blue' ;
  document.body.style.color = 'white';
  navLink.href =  'https://www.youtube.com';
  navLink.textContent = 'youtube';
  navLink;
});
