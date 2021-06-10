
const notic = JSON.parse(localStorage.getItem('news'));

const getn = document.getElementById('conteudoprinc');


let captura;

function capturar() {
    captura = document.getElementById('valor').value.toLowerCase();
    console.log(captura)

    getn.innerHTML = ''

    for (let index = 0; index < notic.length; index++) {
        const divCol = document.createElement('div');
        divCol.classList.add('col-12');
        divCol.classList.add('col-sm-12');
        divCol.classList.add('col-md-6');
        divCol.classList.add('col-lg-6');
        divCol.onclick = () => {
            localStorage.setItem('currentNews', JSON.stringify({ image: notic[index].image, title: notic[index].title, description: notic[index].description, id: notic[index].id, comments: notic[index].comments }));
        }
        const card = document.createElement('p');
        divCol.innerHTML = ` 
       <div class="card mb-3" style="max-width: 98%;">
           <div class="row no-gutters">
               <div class="col-md-6">
                   <img src="${notic[index].image}" class="card-img" alt="Medicação Cloroquina">
               </div>
               <div class="col-md-6">
                   <div class="card-body">
                       <a href="noticia.html"><h5 class="card-title">${notic[index].title}
                       </h5>
                       </a>
                   </div>
               </div>
           </div>
       </div>
       `
       card.appendChild(divCol);

        if (notic[index].title.toLowerCase().includes(captura)) {
            getn.appendChild(card);
        }


    }



}






