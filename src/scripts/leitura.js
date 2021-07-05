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
    image: 'assets/messi.jpg',
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
    description: 'Essa notícia É FAKE. Quando saía com sucesso da pandemia graças à vacinação maciça, uma tragédia chocou Israel na madrugada de sexta-feira (hora local). Pelo menos 44 pessoas morreram e dezenas ficaram feridas durante a comemoração do Lag Baomer, a festa judaica do fogo, no monte Meron (norte do país) ao ocorrer uma avalanche humana após uma aparente explosão de pânico em um local em que dezenas de milhares de judeus ultraortodoxos se amontoavam. Era o acontecimento mais multitudinário ocorrido no país desde março do ano passado, quando foi declarada a crise sanitária mundial, apesar da limitação de lotação de 10.000 participantes imposta pelas autoridades.',
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
    description: 'Esse tópico É FAKE. Esse é um boato antigo, que surgiu em 1998, porém, muitos estudos já o desmentiram ao longo desses anos. Em uma pesquisa recente, com mais de 650 mil crianças, comprovou-se que a vacina não causa autismo. A vacinação é uma das melhores formas de estar protegido contra diferentes vírus e bactérias, além de manter a sociedade segura, impedindo que doenças se espalhem e causem uma epidemia.',
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
  {
    image: 'assets/joachin.jpg',
    title: 'Depois de 15 anos, Joachim Löw deixa o comando da seleção da Alemanha?',
    description: 'Essa notícia NÃO É FAKE. A frase eternizada na voz de Galvão Bueno resume o que foi o "7 a 1" para o Brasil na Copa do Mundo de 2014. O maior vexame da nossa seleção e, ao mesmo tempo, o ápice da Alemanha, que seria campeã em cima da Argentina, no Maracanã. Alemanha de Joachim Löw. Essa Alemanha não existe mais. Há alguns anos, em teoria. E na prática, a partir de hoje, inicia uma nova era, depois de 15 anos com Löw. A seleção alemã se despediu da Eurocopa com a derrota para a Inglaterra, encerrando assim o período de seu técnico mais longevo. Também o mais vitorioso. O protagonista de cenas curiosas. O personagem de vários vexames. O homem que transformou o estilo da equipe nacional e entrou para a história do futebol mundial.',
    category:'Esportes',  
    comments: [],
    id: '26'
  },
  {
    image: 'assets/eriksen.jpeg',
    title: 'Eriksen, da Dinamarca, cai desacordado em campo?',
    description: 'Essa notícia NÃO É FAKE. Meia causa preocupação no fim do primeiro tempo contra a Finlândia. Jogo ficou interrompido por mais de uma hora, mas foi retomado após boletim médico indicar estabilidade do jogador. Uma cena muito preocupante marcou o fim do primeiro tempo do jogo entre Dinamarca e Finlândia, neste sábado, em Copenhague, pela Eurocopa. O meia dinamarquês Eriksen, de 29 anos, caiu desacordado no gramado e precisou receber massagem cardíaca durante atendimento médico que durou cerca de 15 minutos. Flagrado de olhos abertos ao deixar o campo, ele foi transferido para um hospital e está em estado estável, de acordo com informações da Uefa. Às 15h05 deste sábado, a Federação Dinamarquesa de Futebol informou que o jogador está bem e a partida foi retomada a partir das 15h30, terminando com vitória finlandesa por 1 a 0.',
    category:'Esportes',  
    comments: [],
    id: '27'
  },
  {
    image: 'assets/lesao.jpg',
    title: 'Giannis sofrem uma lesão assustadora na NBA?',
    description: 'Essa notícia NÃO É FAKE. O jogo 4 da final da Conferência Leste da NBA foi marcado por uma imagem forte na terça-feira. O grego Giannis Antetokounmpo sofreu uma lesão assustadora no joelho esquerdo e não pôde ajudar o Milwaukee Bucks. A noite ainda teve uma cesta incrível de Clint Capela por trás da tabela, um dos destaques da vitória do Atlanta Hawks, que empatou a série. Confira o melhor da rodada da liga americana de basquete. Em uma disputa com Clint Capela no terceiro quarto, Giannis Antetokounmpo não aterrissou bem e sofreu uma hiperextensão do joelho esquerdo. A cena assustou os fãs dos Bucks. O astro grego deixou a quadra caminhando, mas vai passar por uma ressonância magnética nesta quarta-feira para saber a gravidade da lesão. Ele saiu com 14 pontos e 8 rebotes em 24 minutos.',
    category:'Esportes',  
    comments: [],
    id: '28'
  },
  {
    image: 'assets/cruyf.jpg',
    title: 'Cruyff boicotou a copa?',
    description: 'Essa notícia É FAKE. Maior nome da história do futebol holandês, Johan Cruyff só disputou uma Copa do Mundo, em 1947. Quatro anos depois, ele decidiu não ir ao mundial na Argentina em boicote a ditadura militar do país-sede. Bem, essa é a versão que se popularizou no planeta. No entando, em 2010, o craque revelou o verdadeiro motivo da sua ausência na copa: depois de um assalto a sua casa, em que bandidos chegaram a colocar uma arma em sua cabeça, ele decidiu que não queria passar mais longos periodos longe da família.',
    category:'Esportes',  
    comments: [],
    id: '29'
  },
  {
    image: 'assets/eriksen2.jpg',
    title: 'Eriksen passou mal por causa da vacina?',
    description: 'Essa notícia É FAKE. A cena de Christian Eriksen desabando no gramado após mal súbito no confronto entre Dinamarca e Finlândia, válido pela primeira rodada do grupo B na Eurocopa, chocou o mundo. Uma rede de apoio ao atleta formou-se com orações e homenagens tanto em campo como fora vindas de jogadores. No entanto, falsas informações assustaram torcedores, como a de que Eriksen teria tomado a vacina contra a Covid-19 e, por isso mal no jogo. Então, saiba o que realmente aconteceu com o jogador da Dinamarca. No último sábado (12), em partida da Dinamarca e FInlândia pela primeira rodada da fase de grupos da Eurocopa em 2021, o jogador dinamarquês, Christian Eriksen, desabou aos 40 minutos de partida e deixou torcedores instantaneamente preocupados. No mesmo momento, a equipe médica entrou em campo para socorrer o atleta, fazendo massagem cardíaca para trazer Eriksen de volta.',
    category:'Esportes',  
    comments: [],
    id: '30'
  },
  {
    image: 'assets/tecnico.jpeg',
    title: 'Técnico Alberto Valentim teria saído com a esposa do presidente do clube?',
    description: 'Essa notícia É FAKE. No Ultimo mês uma noticia que pegou muitos torcedores de surpresa, foi o anuncio da demissão do técnico Alberto Valentim do time do Cuiabá na 2º rodada do brasileirão série A 2021, já que este ano temos uma nova regra onde cada clube só pode contratar 2 treinadores ao longo do campeonato, e o clube mato-grossense teria queimado um dos treinadores muito cedo no campeonato. Então a internet começou a noticiar varias coisas, mas a que mais repercutiu com certeza foi a que teria tido uma discussão interna entre o então técnico Alberto Valentim e o presidente do clube Alessandro Dresch com motivo de que o técnico teria saido com a esposa de Dresch. O própio clube postou em suas redes socias alegando que o motivo da demissão de Valentim, é que eles já estariam insatisfeitos com o trabalho do técnico antes mesmo da primeira do rodada do campeonato, e que após o empate com o juventude a decisão de demiti-lo, apenas tomou forma.',
    category:'Esportes',  
    comments: [],
    id: '31'
  },
  {
    image: 'assets/bolsonaro.jpg',
    title: 'Fanatismo do governo pode levar país à violência?',
    description: 'Essa notícia NÃO É FAKE. A polarização instalada no País envolvendo Lula e Bolsonaro na corrida presidencial de 2022 pode descambar para o estado de violência. A constatação é do ex-ministro do Governo Bolsonaro, general Santos Cruz.“Nessa polarização o Brasil fica no dilema entre o precipício e o abismo. Temos um ex-presidente que já teve sua oportunidade e não tem sentido a volta. E temos um presidente atual que já demonstrou que está mais preocupado com o soldo do que com a administração ou pacificação do País. É uma polarização que não interessa”',
    category:'Política',  
    comments: [],
    id: '32'
  },
  {
    image: 'assets/PT.jpg',
    title: 'O homem que apunhalou Bolsonaro é filiado ao PT e aparece numa foto com Lula?',
    description: 'Essa notícia É FAKE. Depois de ser atacado por um fanático em setembro, começaram a circular correntes de mensagens no Facebook e Whatsapp garantindo que Adélio Bispo de Oliveira, agressor do Bolsonaro, era filiado ao PT. O dado foi reproduzido por vários sites informativos, que contribuíram para espalhar o boato. Segundo o Aos Fatos, nenhuma pessoa com esse nome aparece no registro oficial de filiados do Tribunal Superior Eleitoral.',
    category:'Política',  
    comments: [],
    id: '33'
  },
  {
    image: 'assets/bolsozao.jpg',
    title: 'Partidos, entidades e políticos protocolam superpedido de impeachment de Bolsonaro?',
    description: 'Essa notícia NÃO É FAKE. Partidos políticos, parlamentares, movimentos sociais e entidades da sociedade civil protocolaram nesta quarta-feira (30) na Câmara o chamado "superpedido" de impeachment do presidente Jair Bolsonaro. O "superpedido" tem 45 signatários e consolida argumentos apresentados nos outros 123 pedidos de impeachment já apresentados à Câmara. Entre esses argumentos, está o mais recente — o que aponta prevaricação do presidente no caso da suspeita de corrupção no contrato de compra da vacina indiana Covaxin.',
    category:'Política',  
    comments: [],
    id: '34'
  },
  {
    image: 'assets/levan.jpg',
    title: 'Ricardo Lewandowski encaminha à PGR notícia-crime contra Bolsonaro por incentivar crianças a não usar máscara?',
    description: 'Essa notícia NÃO É FAKE. O ministro do Supremo Ricardo Lewandowski encaminhou à PGR a notícia-crime apresentada por parlamentares do PSOL contra o presidente Jair Bolsonaro por colocar crianças em risco, ao incentivá-las a não usar máscara. Em visita ao Rio Grande do Norte, o presidente fez gesto para uma menina abaixar a máscara, e ela abaixou. E ele mesmo retirou a máscara de uma outra criança, que estava em seu colo.',
    category:'Política',  
    comments: [],
    id: '35'
  },
  {
    image: 'assets/bolsonaro4.jpg',
    title: 'Jair Bolsonaro diz apoiar relações LGBT?',
    description: 'Essa notícia É FAKE. Durante seus quase trinta anos de mandato, Jair Bolsonaro se notabilizou na Câmara dos Deputados e na imprensa por declarações como a defesa da castração química e a preferência por um filho morto a um filho gay. Há algumas semanas, um de seus filhos, Carlos Bolsonaro, republicou em seu perfil no Instagram uma imagem que simulava uma cena de tortura de um jovem gay. Em lives no Facebook, o capitão reformado subiu o tom em seus posicionamentos recentes, defendendo que desapareçam as “minorias” que não se adequem às “maiorias”. Na reta final do segundo turno, avolumam-se em diversas cidades relatos de agressão verbal e física a LGBT por motivação eleitoral. Ameaças como “a sua hora está chegando” e “vamos limpar o Brasil começando por vocês” têm alcançado jovens e casais LGBT na rua, na fila do mercado, na orla da praia e na repartição do trabalho.',
    category:'Política',  
    comments: [],
    id: '36'
  },
  {
    image: 'assets/kitgay.jpg',
    title: 'O "Kit gay" foi distruibuido nas escolas?',
    description: 'Essa notícia É FAKE. Na verdade, trata-se de um projeto chamado Escola Sem Homofobia, que o Ministério da Educação, então sob a gestão de Fernando Haddad, apresentou em 2011 com o apoio de diversas ONGs, mas não chegou a ser implantado. O objetivo do “kit gay”, como foi apelidado por seus detratores, seria oferecer formação aos professores para lidarem com os direitos LGTB, a luta contra a violência e os preconceitos e o respeito à diversidade entre os jovens e adolescentes. De forma alguma propunha “sexualizar as crianças” e “ensinar a ideologia de gênero nas escolas do Brasil”, como afirmou Bolsonaro numa entrevista em que mostrava um exemplar do livro Aparelho Sexual e Cia., de Hélène Bruller e Philippe Chapuis, que foi distribuído pelo Governo em algumas bibliotecas, mas nunca foi incluído no programa e não chegou aos colégios. O programa Escola Sem Homofobia acabou sendo vetado pela então presidenta Dilma Rousseff por pressões da bancada evangélica no Congresso.',
    category:'Política',  
    comments: [],
    id: '37'
  },
  {
    image: 'assets/anazona.jpeg',
    title: 'Ana Maria Braga é hospitalizada após diagnóstico de covid-19?',
    description: 'Essa notícia NÃO É FAKE. Ana Maria Braga, de 72 anos, foi diagnosticada com covid-19 e está hospitalizada em São Paulo, nesta segunda-feira (5). A notícia foi confirmada pela própria apresentadora durante a exibição de seu programa. "Dentro do possível, está tudo ótimo. Estava achando que era uma gripe. Estava assim mais ou menos desde quinta-feira (1º), mas a gente nunca espera. Eu, pelo menos, nunca penso no pior. A gente faz dois testes por semana para apresentar o programa. Na semana passada, eu fiz o exame e deu negativo, mas hoje de manhã fiz de novo e deu positivo. Só vim aqui [ao hospital] para conferir, mas está tudo ótimo", explicou ela.',
    category:'Entretenimento',  
    comments: [],
    id: '38'
  },
  {
    image: 'assets/anazona.jpeg',
    title: 'Ana Maria Braga é hospitalizada após diagnóstico de covid-19?',
    description: 'Essa notícia NÃO É FAKE. Ana Maria Braga, de 72 anos, foi diagnosticada com covid-19 e está hospitalizada em São Paulo, nesta segunda-feira (5). A notícia foi confirmada pela própria apresentadora durante a exibição de seu programa. "Dentro do possível, está tudo ótimo. Estava achando que era uma gripe. Estava assim mais ou menos desde quinta-feira (1º), mas a gente nunca espera. Eu, pelo menos, nunca penso no pior. A gente faz dois testes por semana para apresentar o programa. Na semana passada, eu fiz o exame e deu negativo, mas hoje de manhã fiz de novo e deu positivo. Só vim aqui [ao hospital] para conferir, mas está tudo ótimo", explicou ela.',
    category:'Saúde',  
    comments: [],
    id: '38'
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
