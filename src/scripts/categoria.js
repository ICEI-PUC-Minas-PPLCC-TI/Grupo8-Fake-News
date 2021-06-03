
const dropdown = localStorage.getItem('selectedCategory');
console.log(dropdown);

function log(obj) {
    localStorage.setItem('selectedCategory', obj.innerText);
}

const drop = document.getElementById('cardTitle');
const h2 = document.createElement('h2');
h2.style.textAlign = 'center';
h2.style.fontSize = '50px';
h2.innerText = dropdown;
drop.appendChild(h2);

const not = JSON.parse(localStorage.getItem('news'));
const text = document.getElementById('catContent');

for (let index = 0; index < not.length; index++) {
    const card = document.createElement('p');
    card.innerHTML = ` <div class="col-12 col-sm-12 col-md-6 col-lg-6">
<div class="card mb-3" style="max-width: 98%;">
    <div class="row no-gutters">
        <div class="col-md-6">
            <img src="${not[index].image}" class="card-img" alt="Medicação Cloroquina">
        </div>
        <div class="col-md-6">
            <div class="card-body">
                <a href="#"><h5 class="card-title">${not[index].title}
                </h5>
                </a>
            </div>
        </div>
    </div>
</div>
</div>`
    if (dropdown == 'Saúde') {
        if (not[index].category == 'Saúde') {
        text.appendChild(card)
        }
        console.log(not[index].category)
    } else if (dropdown == 'Esportes') {
        if (not[index].category == 'Esportes'){
            text.appendChild(card)
        }
        console.log(not[index].category)
    } else if (dropdown == 'Política') {
        if (not[index].category == 'Política'){
            text.appendChild(card)
        }
    } else if (dropdown == 'Entretenimento') {
        if (not[index].category == 'Entretenimento'){
            text.appendChild(card)
        }  
    } else if (dropdown == 'Religião') {
        if (not[index].category == 'Religião'){
            text.appendChild(card)
        }       
    }
}












