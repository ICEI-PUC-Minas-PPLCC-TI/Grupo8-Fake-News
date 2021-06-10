 const noticias = JSON.parse(localStorage.getItem('news'));

 const coment = document.getElementById('comentarios');

 const currentzera = JSON.parse(localStorage.getItem('currentNews'));

 const postar = document.getElementById('post');

 const com = document.createElement('p');
 const com2 = document.createElement('p');
 com.style.marginTop = '30px';
 com.style.padding = '5px';
 com.style.border = '2px solid black';
 com.style.borderRadius = '5px'
 com2.style.border = '2px solid grey'
 com2.style.borderRadius = '5px';
 com2.style.padding = '10px';
 com2.style.marginBottom = '70px';

postar.addEventListener('click', () => {
    const nomezera = document.getElementById('nomeUsuario').value;
    const comentario = document.getElementById('comentUsuario').value;
    console.log(nomezera);
    console.log(comentario);
    if(!nomezera || !comentario){
        alert('Preenche ae ou vaza do site tanso ')
    }else{
        
      const novasnoticas = noticias.map(n => {
          if(n.id === currentzera.id){
              com.innerText = nomezera;
              com2.innerText = comentario;
              coment.appendChild(com)
              coment.appendChild(com2)
              n.comments.push({name: nomezera, comment: comentario})
          }
           return n
      }) 
      localStorage.setItem('news',JSON.stringify(novasnoticas));
    }
})

      for(index=0;index<noticias.length;index++){
        if(noticias[index].id === currentzera.id){
           noticias[index].comments.map(c =>{
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            p1.style.marginTop = '30px';
            p1.style.padding = '5px';
            p1.style.border = '2px solid black';
            p1.style.borderRadius = '5px'
            p2.style.border = '2px solid grey'
            p2.style.borderRadius = '5px';
            p2.style.padding = '10px';
            p2.style.marginBottom = '70px';
            p1.innerText = c.name
            p2.innerText = c.comment
            coment.appendChild(p1)
            coment.appendChild(p2)
           })
        }
         
      }





