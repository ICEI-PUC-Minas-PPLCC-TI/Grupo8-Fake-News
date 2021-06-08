
const notic = JSON.parse(localStorage.getItem('news'));

const getn = document.getElementById('conteudoprinc');


let captura;

function capturar() {
    captura = document.getElementById('valor').value.toLowerCase();
    console.log(captura)

    getn.innerHTML = ''
  
        for (let index = 0; index < notic.length; index++) {
            console.log(captura)
            const card = document.createElement('p');
            card.innerHTML = ` <div class="col-12 col-sm-12 col-md-6 col-lg-6">
       <div class="card mb-3" style="max-width: 98%;">
           <div class="row no-gutters">
               <div class="col-md-6">
                   <img src="${notic[index].image}" class="card-img" alt="Medicação Cloroquina">
               </div>
               <div class="col-md-6">
                   <div class="card-body">
                       <a href="#"><h5 class="card-title">${notic[index].title}
                       </h5>
                       </a>
                   </div>
               </div>
           </div>
       </div>
       </div>`
    
            if (notic[index].title.toLowerCase().includes(captura)) {
                getn.appendChild(card);
            }
    
    
        }
    

    
}






