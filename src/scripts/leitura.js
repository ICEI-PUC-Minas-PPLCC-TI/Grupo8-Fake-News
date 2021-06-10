const news = [ 
  {
    image: 'assets/cloroquina.jpg',
    title: 'A cloroquina é um antiviral e um anti-inflamatório conhecido pelo Brasil?',
    description: 'aloalow',
    category: 'Saúde',
    comments: [],
    id: '1'
  },
  {
    image: 'assets/covid.jpg',
    title: 'O Brasil é um dos países que mais imunizaram no mundo?',
    description: 'Praesent dignissim porttitor justo, sit amet posuere massa ornare ut. Donec ultrices risus ut vehicula laoreet. Duis molestie ac enim vel aliquet. Pellentesque semper, tellus in vehicula aliquet, elit nisl blandit felis, eget porttitor arcu diam a dolor. Nunc consequat fermentum nisl id cursus. Curabitur sagittis nisi interdum luctus lacinia. Donec scelerisque tellus neque, fringilla cursus quam consectetur vitae. Donec nec libero dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum eros ac magna faucibus, vel vestibulum diam tristique. Vestibulum massa ipsum, volutpat nec interdum in, iaculis sed tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus a auctor odio, vel laoreet nulla. Phasellus fermentum dui nisi, et maximus sem mattis vel. Aliquam enim ipsum, condimentum et accumsan tristique, pellentesque quis lacus. Fusce vel tellus nisi.',
    category:'Saúde',
    comments: [],
    id: '2'
  },
  {
    image: 'assets/lgbt.jpg',
    title: 'Cartaz que anuncia vacinação prioritária de homossexuais contra a Covid-19?',
    description: 'Etiam condimentum, tortor sed tincidunt mollis, tortor augue tempus mauris, eu finibus orci enim vel turpis. Proin interdum tellus vel ultricies pharetra. Integer vitae aliquam justo. Sed mattis ante eget fermentum ultricies. Phasellus gravida congue risus, vel maximus urna fringilla commodo. Mauris interdum pulvinar massa. Donec ac justo at augue consequat interdum. Vivamus nisi ipsum, euismod et mi eu, aliquet scelerisque orci.',
    category:'Saúde',
    comments: [],
    id: '3'
  },
  {
    image: 'assets/Pfizer.jpg',
    title: 'Vacina da Pfizer terá chip da Microsoft para prevenir efeitos colaterais?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non orci imperdiet, aliquam massa semper, molestie tellus. Nunc tempor sodales ante ac tincidunt. In varius convallis risus eu laoreet. Proin ac ultricies mi. Nunc eu pulvinar nisl. Nunc faucibus pretium mi vitae bibendum. Aliquam nec dui eget est feugiat feugiat vel vehicula lectus. Nullam aliquam felis ut laoreet luctus. Sed non pulvinar est, ut pharetra ante. Mauris ut turpis quis tellus consequat consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vitae quam semper, lobortis erat a, sollicitudin quam. Morbi laoreet rhoncus sapien non pharetra.',
    category:'Saúde',
    comments: [],
    id: '4'
  },
  {
    image: 'assets/Pfizer.jpg',
    title: 'Vacina da Pfizer terá chip da Microsoft para prevenir efeitos colaterais?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non orci imperdiet, aliquam massa semper, molestie tellus. Nunc tempor sodales ante ac tincidunt. In varius convallis risus eu laoreet. Proin ac ultricies mi. Nunc eu pulvinar nisl. Nunc faucibus pretium mi vitae bibendum. Aliquam nec dui eget est feugiat feugiat vel vehicula lectus. Nullam aliquam felis ut laoreet luctus. Sed non pulvinar est, ut pharetra ante. Mauris ut turpis quis tellus consequat consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vitae quam semper, lobortis erat a, sollicitudin quam. Morbi laoreet rhoncus sapien non pharetra.',
    category:'Política',  
    comments: [],
    id: '5'
  },
  
  
];

if(!localStorage.getItem('news')){
  localStorage.setItem('news',JSON.stringify(news));
}


function generateNews(image, title, description, id, comments) {
  const divCol = document.createElement('div');
  divCol.classList.add('col-12');
  divCol.classList.add('col-sm-12');
  divCol.classList.add('col-md-6');
  divCol.classList.add('col-lg-6');

  const divCard = document.createElement('div');
  divCard.classList.add('card');
  divCard.classList.add('mb-3');
  divCard.style.maxWidth = '98%';
  divCard.onclick = () => {
    localStorage.setItem('currentNews', JSON.stringify({ image, title, description, id, comments}));
  }

  const divRowNoGutters = document.createElement('div');
  divRowNoGutters.classList.add('row');
  divRowNoGutters.classList.add('no-gutters');

  const divColMd61 = document.createElement('div');
  divColMd61.classList.add('col-md-6');

  // img
  const img = document.createElement('img');
  img.classList.add('card-img');
  // img.src = 'assets/cloroquina.jpg';
  img.src = image;
  img.alt = 'Medicação Cloroquina';

  const divColMd62 = document.createElement('div');
  divColMd62.classList.add('col-md-6');

  const divCardBody = document.createElement('div');
  divCardBody.classList.add('card-body');

  // a
  const a = document.createElement('a');
  a.href = 'noticia.html';

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  // cardTitle.innerText = 'A cloroquina é um antiviral e um anti-inflamatório conhecido pelo Brasil?'
  cardTitle.innerText = title;

  a.appendChild(cardTitle);
  divCardBody.appendChild(a);
  divColMd62.appendChild(divCardBody);
  divColMd61.appendChild(img);
  divRowNoGutters.appendChild(divColMd61);
  divRowNoGutters.appendChild(divColMd62);
  divCard.appendChild(divRowNoGutters);
  divCol.appendChild(divCard);

  return divCol;
}

function non() {
  const newsContainer = document.querySelector(".elemento");

  let arr = [];

  for (let index = 0; index < 4; index++) {
    if ((index + 1) % 2 === 0) {
      const divCol = generateNews(news[index].image, news[index].title, news[index].description, news[index].id, news[index].comments);
      arr.push(divCol);

      const divRow = document.createElement('div');
      divRow.classList.add('row');

      divRow.appendChild(arr[0])
      divRow.appendChild(arr[1])

      newsContainer.appendChild(divRow);
      arr = [];
    } else {
      if (news.length === index + 1) {
        const divCol = generateNews(news[index].image, news[index].title, news[index].description,news[index].id, news[index].comments);
        const divRow = document.createElement('div');
        divRow.classList.add('row');
        divRow.appendChild(divCol);
        newsContainer.appendChild(divRow);
      } else {
        const divCol = generateNews(news[index].image, news[index].title, news[index].description,news[index].id, news[index].comments);
        arr.push(divCol);
      }
    }
  }
}

non();

function log(obj) {
  localStorage.setItem('selectedCategory', obj.innerText);
}
