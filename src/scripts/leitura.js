const news = [ 
  {
    image: 'assets/cloroquina.jpg',
    title: 'A cloroquina é um antiviral e um anti-inflamatório conhecido pelo Brasil?',
    description: 'Esse trópico É FAKE. O Brasil é único país onde fake news sobre cloroquina ainda circulam com frequência. "A cloroquina foi recomendada pelo Ministério da Saúde na época do surto de chikungunya, em 2016. Por que ela não pode ser usada agora, contra a covid-19?" Esse é um dos questionamentos mais frequentes dos apoiadores do chamado "tratamento precoce". No protocolo do Ministério da Saúde de 2017, chama a atenção o trecho que afirma que "também há potencial ação antiviral" da cloroquina. Então, quer dizer que esse remédio pode atuar contra de doenças causadas por esses agentes infecciosos? Infelizmente, não é bem assim...',
    category: 'Saúde',
    comments: [],
    id: '1'
  },
  {
    image: 'assets/covid.jpg',
    title: 'O Brasil é um dos países que mais imunizaram no mundo?',
    description: 'Esse tópico NÃO É FAKE, mas pode enganar. Em números absolutos, o Brasil sim é um dos países que mais vacinaram no mundo, porém está próximo da 66ª posição entre os países que mais vacinam contra a Covid-19 no mundo na relação por 100 habitantes. Com a campanha iniciada no fim de janeiro, é o quarto no planeta com mais doses aplicadas (números absolutos). Em março, o país ocupava o 73º lugar na escala proporcional e o quinto em números absolutos.',
    category:'Saúde',
    comments: [],
    id: '2'
  },
  {
    image: 'assets/lgbt.jpg',
    title: 'Cartaz que anuncia vacinação prioritária de homossexuais contra a Covid-19?',
    description: 'Essa notícia É FAKE. O boato tem circulado em várias cidades, mas Prefeituras de Jacareí, Belém e Bom Jesus da Lapa desmentem cartaz que circula nas redes sociais. A Prefeitura de Belém igualmente afirma que é falso o cartaz que circula nas redes sociais sobre a vacinação de homossexuais. A prefeitura diz que, assim que tomou conhecimento do caso, produziu um desmentido que fez circular em aplicativos de mensagem instantânea.',
    category:'Saúde',
    comments: [],
    id: '3'
  },
  {
    image: 'assets/Pfizer.jpg',
    title: 'Vacina da Pfizer terá chip da Microsoft para prevenir efeitos colaterais?',
    description: 'Essa notícia É FAKE. A informação analisada pela Lupa é falsa. A farmacêutica Pfizer não anunciou qualquer “atualização da fórmula” de seu imunizante contra a Covid-19 para inclusão de um chip da Microsoft. De acordo com a assessoria de comunicação do laboratório, a informação é falsa. A versão original desta peça de desinformação circulou nos Estados Unidos no começo de abril deste ano. Ela foi inicialmente publicada de forma satírica em um site de humor chamado The Stonk Market.',
    category:'Saúde',
    comments: [],
    id: '4'
  },
  {
    image: 'assets/messi - fk.jpg',
    title: 'O Cruzeiro anuncia Messi?',
    description: 'Essa notícia É FAKE. O site do Cruzeiro foi hackeado nesta sexta-feira e contou com uma matéria anunciando a contratação de Lionel Messi, que está de saída do Barcelona. O clube informou que a nota foi retirada do ar e está investigando o responsável pela invasão.',
    category:'Esportes',  
    comments: [],
    id: '5'
  },
  {
    image: 'assets/vaitcano.jpg',
    title: 'Vaticano ataca lei anti-homofobia na Itália?',
    description: 'Essa notícia NÃO É FAKE. No dia 17, o arcebispo Paul Gallagher, secretário do Vaticano para Relações com os Estados — posto equivalente ao de um ministro das Relações Exteriores —, remeteu uma carta para a embaixada italiana na Santa Sé questionando um projeto de lei que criminaliza a homofobia e a transfobia, em tramitação no governo italiano. Idealizada pelo deputado Alessandro Zan, do centro-esquerdista Partido Democrático, o projeto foi aprovado pela Câmara dos Deputados no ano passado e agora enfrenta resistência, no Senado, de políticos mais conservadores.',
    category:'Religião',  
    comments: [],
    id: '6'
  },
  {
    image: 'assets/mclaren.jpg',
    title: 'Paulinho McLaren Morreu?',
    description: 'Essa notícia É FAKE. Ex-jogador com passagens marcantes por Cruzeiro, Santos e Portuguesa, Paulinho McLaren teve que desmentir um boato cruel nas redes sociais nos últimos dias: o de que teria morrido. A fake news teria começado a circular no whatsapp na quinta-feira, 13, dizendo que o ex-atacante teria falecido em um acidente de carro enquanto viajava de sua cidade natal.',
    category:'Esportes',  
    comments: [],
    id: '7'
  },
  {
    image: 'assets/mulheres.jpg',
    title: 'Mulheres e negros compõem maioria de evangélicos e católicos?',
    description: 'Esse tópico NÃO É FAKE. O perfil de evangélicos e católicos no país é composto em sua maioria por mulheres e negros. Segundo pesquisa Datafolha, divulgada pelo jornal Folha de S.Paulo na manhã desta segunda feira 13, o público feminino corresponde a 58% dos frequentadores de igrejas evangélicas e 51% das católicas. Pretos e pardos também são sua maioria.',
    category:'Religião',  
    comments: [],
    id: '8'
  },
  {
    image: 'assets/israel.jpg',
    title: 'Ninguem se feriu durante a avalanche humana em Israel dia 30 de abril?',
    description: 'Essa notícia É FAKE. O site do Cruzeiro foi hackeado nesta sexta-feira e contou com uma matéria anunciando a contratação de Lionel Messi, que está de saída do Barcelona. O clube informou que a nota foi retirada do ar e está investigando o responsável pela invasão.',
    category:'Religião',  
    comments: [],
    id: '9'
  },
  {
    image: 'assets/doriazao.jpg',
    title: 'Doria decide não incluir atividades religiosas na lista de serviços essenciais?',
    description: 'Essa notícia É FAKE. Governador ressalta que os templos deverão respeitar as recomendações da Vigilância Sanitária; decreto será transformado em lei. O governador de São Paulo, João Doria (PSDB), anunciou nesta segunda-feira, 1º, que as atividades religiosas foram incluídas na lista de serviços essenciais durante a pandemia do coronavírus. Assim como as outros serviços, os templos religiosos deverão respeitar as determinações da Vigilância Sanitária e os protocolos da Secretaria da Saúde. “Esperança, fé e oração”, disse o governador durante o anúncio. O decreto foi assinado por Doria nesta segunda e será publicado no Diário Oficial do Estado na terça-feira, 2. Durante a coletiva de imprensa, ele afirmou que o decreto irá virar uma Lei.',
    category:'Religião',  
    comments: [],
    id: '10'
  },
  {
    image: 'assets/marilia.jpeg',
    title: 'Marília Arraes é contra a bíblia e PT persegue cristãos.',
    description: 'Essa notícia É FAKE. Um panfleto sem assinatura distribuído por pessoas que afirmam ser pagas para isso está espalhando fake news pelas ruas de Recife às vésperas do segundo turno. O material mentiroso ataca Marília Arraes dizendo que “cristão de verdade não vota” nela. Não é verdade que o PT “persegue os cristãos em todo Brasil”. Essa conversa é velha: lá em 1994 diziam que Lula ia fechar e unificar as igrejas evangélicas, mas foram 13 anos de Lula e Dilma na Presidência e nada disso aconteceu, não é mesmo? O PT tem compromisso com a tolerância religiosa e respeita a diversidade de crenças do povo brasileiro.',
    category:'Religião',  
    comments: [],
    id: '11'
  },
  {
    image: 'assets/papazao.jpg',
    title: 'Papa muda legislação do Vaticano sobre abuso sexual?',
    description: 'Essa notícia NÃO É FAKE. Sistema jurídico da Igreja Católica agora criminaliza abuso sexual também de adultos e permite punição de leigos que ocupam cargos religiosos e responsabilização por omissão e negligência. O Papa Francisco mudou nesta terça-feira (1º) a legislação do Código de Direito Canônico do Vaticano, o sistema jurídico interno da Igreja Católica, para tipificar e criminalizar explicitamente o abuso sexual também de adultos e responsabilizar casos de omissão e negligência. As novas disposições foram divulgadas após 14 anos de estudo e entram em vigor em 8 de dezembro. Elas incluem a possibilidade de punir padres que se envolvem em atos sexuais com qualquer pessoa, não apenas crianças, e leigos que ocupam cargos na Igreja Católica.',
    category:'Religião',  
    comments: [],
    id: '12'
  },
  {
    image: 'assets/igrejazona.jpg',
    title: 'Missas e cultos em Porto Alegre têm baixa presença de fiéis e respeito ao distanciamento social?',
    description: 'Essa notícia NÃO É FAKE. Um cartaz logo na entrada informava que apenas 30 fiéis poderiam se acomodar na Igreja Santa Teresinha, no Bom Fim, em Porto Alegre. A informação estava defasada. Nesta segunda-feira (5), com a permissão, dada no final de semana, para as celebrações religiosas com limite de 25% do público em todo o Brasil, o local já poderia receber até cem pessoas. Ainda assim, pouco mais de 50 fiéis participavam da missa das 18h na Igreja Santa Teresinha, todos usando máscara e espalhados pelos bancos, a uma distância garantida por cordões.',
    category:'Religião',  
    comments: [],
    id: '13'
  },
  {
    image: 'assets/africazona.jpeg',
    title: 'O governo da África do Sul está considerando permitir que as mulheres tenham vários maridos?',
    description: 'Essa notícia NÃO É FAKE. O governo da África do Sul está considerando permitir que as mulheres tenham vários maridos, uma possibilidade que causou alvoroço entre os conservadores do país. A proposta de permitir a poliandria – nome dado à essa prática – foi incluída em um livro verde do Departamento de Assuntos Internos da África do Sul, que espera tornar o casamento mais inclusivo. “A África do Sul herdou um regime de casamento baseado nas tradições calvinistas cristãs e ocidentais”, observa o documento, acrescentando que as atuais leis de casamento “não são baseadas em uma política abrangente embasada nos valores constitucionais e na compreensão da dinâmica da sociedade moderna”. O documento destaca que a lei atual permite o casamento de menores e não contabiliza casais que mudam de sexo e desejam permanecer casados sem passar pelo divórcio, entre outras falhas.',
    category:'Política',  
    comments: [],
    id: '14'
  },
  {
    image: 'assets/fetos.jpg',
    title: 'Vacina contém fetos abortados?',
    description: 'Esse tópico NÃO É FAKE. A partir da década de 1960, cientistas passaram a extrair algumas células de fetos submetidos a abortos legais para replicá-las dentro do laboratório. E sim, essas linhagens que descendem das células.',
    category:'Saúde',  
    comments: [],
    id: '15'
  },
  {
    image: 'assets/autismo.jpg',
    title: 'Vacina causa autismo?',
    description: 'Esse tópico É FAKE. Esse é um boato antigo, que surgiu em 1998, porém muitos estudos já o desmentiram ao longo desses anos. Em uma pesquisa, com mais de 650 mil crianças, comprovou-se que a vacina não causa autismo. A vacinação é uma das melhores formas de estar protegido contra diferentes vírus e bactérias, além de manter a sociedade segura impedindo que doenças se espalhem e causem uma epidemia.',
    category:'Saúde',  
    comments: [],
    id: '16'
  },
  {
    image: 'assets/cancermama.jpg',
    title: 'Desodorante causa câncer de mama?',
    description: 'Essa notícia É FAKE. Essa notícia começou a se espalhar a partir da associação de que uma grande parte dos cânceres de mama ocorrem próximos a axila, onde é usado o desodorante. Apesar do produto poder causar alergias e infecções nessa região do corpo, estudos já comprovaram que os desodorantes e antitranspirantes não tem nenhuma relação com o aumento das chances de ter câncer de mama.',
    category:'Saúde',  
    comments: [],
    id: '17'
  },
  {
    image: 'assets/celular.jpg',
    title: 'Usar celular pode causar câncer?',
    description: 'Essa notícia É FAKE. Existem diferentes versões dessa fake news sobre saúde, seja que a radiação da bateria pode causar câncer no cérebro ou que utilizar o aparelho no escuro aumenta as chances de câncer nos olhos. Porém, nenhum estudo mostrou que exista uma relação entre os celulares e o aumento das chances de a pessoa desenvolver qualquer tipo de câncer. O que se sabe é que a luz emitida pelas telas dos aparelhos pode causar dores de cabeça, a sensação de olhos cansados e dores no globo ocular.',
    category:'Saúde',  
    comments: [],
    id: '18'
  },
  {
    image: 'assets/autismo.jpg',
    title: 'Vacina causa autismo?',
    description: 'Esse tópico É FAKE. Esse é um boato antigo, que surgiu em 1998, porém muitos estudos já o desmentiram ao longo desses anos. Em uma pesquisa, com mais de 650 mil crianças, comprovou-se que a vacina não causa autismo. A vacinação é uma das melhores formas de estar protegido contra diferentes vírus e bactérias, além de manter a sociedade segura impedindo que doenças se espalhem e causem uma epidemia.',
    category:'Saúde',  
    comments: [],
    id: '19'
  },
  {
    image: 'assets/doriazao.jpg',
    title: 'Doria decide não incluir atividades religiosas na lista de serviços essenciais?',
    description: 'Essa notícia É FAKE. Governador ressalta que os templos deverão respeitar as recomendações da Vigilância Sanitária; decreto será transformado em lei. O governador de São Paulo, João Doria (PSDB), anunciou nesta segunda-feira, 1º, que as atividades religiosas foram incluídas na lista de serviços essenciais durante a pandemia do coronavírus. Assim como as outros serviços, os templos religiosos deverão respeitar as determinações da Vigilância Sanitária e os protocolos da Secretaria da Saúde. “Esperança, fé e oração”, disse o governador durante o anúncio. O decreto foi assinado por Doria nesta segunda e será publicado no Diário Oficial do Estado na terça-feira, 2. Durante a coletiva de imprensa, ele afirmou que o decreto irá virar uma Lei.',
    category:'Política',  
    comments: [],
    id: '10'
  },
  {
    image: 'assets/covid.jpg',
    title: 'O Brasil é um dos países que mais imunizaram no mundo?',
    description: 'Esse tópico NÃO É FAKE, mas pode enganar. Em números absolutos, o Brasil sim é um dos países que mais vacinaram no mundo, porém está próximo da 66ª posição entre os países que mais vacinam contra a Covid-19 no mundo na relação por 100 habitantes. Com a campanha iniciada no fim de janeiro, é o quarto no planeta com mais doses aplicadas (números absolutos). Em março, o país ocupava o 73º lugar na escala proporcional e o quinto em números absolutos.',
    category:'Política',
    comments: [],
    id: '2'
  },
  {
    image: 'assets/tom.jpeg',
    title: 'É verdade que Tom Cruise sabe pilotar um helicoptero?',
    description: 'Esse tópico NÃO É FAKE. Mesmo tendo a fama de realizar muitos feitos perigosos sem o uso de dublês, os boatos na internet de que o ator Tom Cruise tenha pilotado um helicóptero na gravação do filme "Missão Impossível 6: Efeito Fallout" são absurdos, mesmo para o astro. O astro dos cinemas não só pilotou o helicóptero, como também aprendeu a faze-lo durante as gravações do sexto filme da franquia de Missão Impossível, em um período de três meses. Levando em conta o curto tempo de aprendizado, somado ao risco das gravações das cenas de voo em sí (mesmo para profissionais experientes, devido à proximidade do objeto com as montanhas do ambiente), pode-se dizer que Tom Cruise fez uma das performances mais ousadas dos cinemas.',
    category:'Entretenimento',  
    comments: [],
    id: '20'
  },
  {
    image: 'assets/britney.jpeg',
    title: 'É verdade que Britney Spears continua sob tutela de seu pai?',
    description: 'Essa notícia NÃO É FAKE. Desde 2008, é de conhecimento popular que a cantora Britney Spears se encontra sob tutela do pai, Jamie Spears, devido à diversos incidentes incluindo sua pessoa. Após treze anos, o assunto volta a tona, com diversas alegações de abuso de autoridade e hiper controle vindos do sujeito, além de um processo judicial para que a artista volte a ter controle de sua própria vida. Mas, afinal, será que após todo esse movimento, a cantora continua sob tutela deste homem?. Para a infelicidade de muitas pessoas, sim. Mesmo com as diversas afirmações da artista de que gostaria de ter sua vida de volta, no dia 1 de Julho de 2021, a justiça dos Estados Unidos negou os pedidos de Britney.',
    category:'Entretenimento',  
    comments: [],
    id: '21'
  },
  {
    image: 'assets/ivete.jpeg',
    title: 'É verdade que Ivete Sangalo terá um programa próprio no SBT?',
    description: 'Essa notícia É FAKE. Cantora, multi-instrumentista, empresária, apresentadora e atriz brasileira. É inegável o impacto de Ivete Sangalo no cenário brasileiro e, tendo acumulado vários títulos e ocupações, é perfeitamente plausível os internautas acreditarem que a artista possa ter seu próprio programa de televisão, inclusive no SBT. De fato, a cantora terá seu próprio programa, porém não no SBT. O site oficial da Globo emitiu uma notícia afirmando que Ivete apresentará um novo reality musical da emissora, chado "The Masked Singer", a partir do mês de Agosto.',
    category:'Entretenimento',  
    comments: [],
    id: '22'
  },
  {
    image: 'assets/faustao.jpeg',
    title: 'É verdade que Fausto Silva se aposentou após sua saída da Rede Globo?',
    description: 'Essa notícia É FAKE. Após saída do apresentador do canal de televisão, em Junho de 2021, devido à sua enorme fortuna, avaliada em torno de 900 milhões, e sua idade avançada (71 anos), é extremamente plausível de se crer que Fausto Silva, conhecido como Faustão, irá se aposentar. Engana-se quem pensa que Fausto Silva irá se aposentar. Muito pelo contrário, o apresentador assinou um contrato de 5 anos com a emissora Band, no qual, a partir de 2022, irá apresentar seu próprio programa de televisão todo domingo, às 20 horas. Dessa forma, o astro será um forte concorrente de audiência do Fantástico, programa da Rede Globo.',
    category:'Entretenimento',  
    comments: [],
    id: '23'
  },
  {
    image: 'assets/bigtime.jpeg',
    title: 'É verdade que Logan, ex membro do Big Time Rush, é gay?',
    description: 'Essa notícia É FAKE. Após um vídeo no tiktok do usuário Miles, cuja conta é @animelover6724, no qual os dois aparecem em um vídeo tocando cerveja juntos ao som de "Boyfriend" do Big Time Rush, a internet foi a loucura, acreditando que os dois estavam namorando. Mas, afinal, seria esse namoro verídico ou não? Ao que tudo leva a crer, o namoro entre os dois não é real, tendo em vista que o assunto não voltou a ser muito abordado por ambas as partes e, quando feito, em tom de brincadeira. Além disso, não existem fotos dos dois juntos, como um casal, no Instagram de Logan, e sim dele com uma menina. Tudo isso leva a conclusão de que o ator não seja gay..',
    category:'Entretenimento',  
    comments: [],
    id: '24'
  },
  {
    image: 'assets/john.jpeg',
    title: 'É verdade que ator de Jonh, da série Peaky  Blinders, Joe Cole,  saiu devido a brigas no elenco?',
    description: 'Essa notícia É FAKE. Após morte inesperada do personagens, muitos fãs passaram a questionar o motivo, pois era bastante amado pelo público. Posteriormente, fontes revelam que o ocorrido se deu por causa do pedido de Joe Cole de sair da série. Mas afinal, teria o ator saído em decorrência a brigas no elenco? segundo o próprio ator, não teria sido por causa de brigas. Ele alega que não conseguiria ganhar destaque caso ficasse na serie. “Com Peakly Blinders, eu nunca saí dos portões com o meu personagem. É o show de Cillian, é sério. (…) Passei os últimos anos recusando programas relacionados a gangues, porque quando um programa se sai bem, você recebe muitos deles.”, explica o artista.',
    category:'Entretenimento',  
    comments: [],
    id: '25'
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
