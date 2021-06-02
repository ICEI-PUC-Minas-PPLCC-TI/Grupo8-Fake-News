
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
const nfil = not.filter((n) => n.category = 'Saúde');


const text = document.getElementById('catContent');
text.innerHTML = ` <div class="col-12 col-sm-12 col-md-6 col-lg-6">
 <div class="card mb-3" style="max-width: 98%;">
     <div class="row no-gutters">
         <div class="col-md-6">
             <img src="${image}" class="card-img" alt="Medicação Cloroquina">
         </div>
         <div class="col-md-6">
             <div class="card-body">
                 <a href><h5 class="card-title">${title}
                 </h5>
                 </a>
             </div>
         </div>
     </div>
 </div>
</div>`








