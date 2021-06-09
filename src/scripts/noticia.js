const currentNews = JSON.parse(localStorage.getItem('currentNews'));

const current = document.getElementById('currentNews');
const h1 = document.createElement('h1');
h1.classList.add('col-lg-8');
h1.classList.add('col-md-12');
h1.classList.add('col-sm-12');
console.log({currentNews});
h1.innerText = currentNews.title;

const img = document.createElement('img');
img.src = currentNews.image;
img.classList.add('col-lg-4');
img.classList.add('col-md-12');
img.classList.add('col-sm-12');
img.style.height = '30vh';

current.appendChild(img);
current.appendChild(h1);

const desc = document.getElementById('description');
const p = document.createElement('p');
p.innerText = currentNews.description;
desc.appendChild(p);
