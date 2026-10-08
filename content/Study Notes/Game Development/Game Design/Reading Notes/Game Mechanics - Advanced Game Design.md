---
tags:
  - GameDesign
  - GameDevelopment
  - GameDevelopmentBook
  - GameMechanics
  - AdvancedGameDesign
  - ptbr
---
Essas são algumas postagens que estou trazendo do meu antigo blog:

# Capítulo 1 Pt1:

Como disse na postagem anterior, o próximo passo no meu projeto é estudar economia em jogos e estratégias de implementação da mesma. Nessa procura de material sobre este assunto acabei encontrando o livro "Game Mechanics: Advanced Game Design" do Ernest Adams e Joris Dormans. No que comecei a ler vi que o livro é muito bom mesmo e que vale a pena ser lido do inicio ao fim. Ele foi publicado em 2009 e, portanto, mesmo quem nunca teve contato com vídeo-games anteriores ao Super Nintendo conhece boa parte das referências citadas.

[](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhi076vksq6mOXBLyQ98aXD0AG0ih7D5LLdM-lHsqaCaEgBQQ-I-TWSCCoYW6PTRJ7JwAXsab8eEVYuax0eUv1JNp3A5bcr7RiJtShHO_jRV3FgafBJzy2FeBdhE79C7Mzn1BgdECAGqWk/s1600/capaLivroThumbnail.png)

É importante destacar que este livro é como se fosse uma continuação não declarada de outro livro, o "Fundamentals of Game Design" que está em sua 3ª edição e também foi escrito pelo Ernest Adams, que ainda não li, mas está na minha lista. Infelizmente reparei em minhas leituras em livros sobre o assunto Game Design é que acabo esquecendo grande parte do conteúdo e acabo tendo que reler o mesmo conteúdo várias vezes ao longo dos anos. Resolvi tentar ao menos minimizar a baixa taxa de absorção de conteúdo deste livro que é fantástico fazendo um "resumo" comentado capítulo por capítulo. Talvez isso seja o inicio de uma série de reviews sobre livros ou talvez só seja esta publicação solitária, sinceramente não sei como vai ser. É bastante trabalhoso, mas acho que ajuda a difundir o assunto e me ajuda com a absorção. Uma característica bem legal destes livros de Game Design é a existência de caixas com outras sugestões de leitura, somente em casos específicos irei comentar sobre já que são como um extra, e portanto entenda como um "Hey, quer saber mais? Vá ler o livro que ele é bem top!!!".

### **Mas vamos ao que interessa...**

Como todo livro que se preze de de game design a primeira ideia apresentada é uma discussão sobre a definição de jogos. Ele apresenta várias definições que foram dadas por outros autores com o objetivo de mostrar como são relevantes as regras presentes no mundo do jogo. As regras são tão importantes que independente de tecnologia e local, se você tiver um oponente, você pode jogar o jogo da velha.

  
_**"In games, rules determine what players can do and how the game will react"**_   
_Game Mechanics: Avanced Game Design_

  
Em seguida, é apresentado que o resultado de um jogo deve ser imprevisível, caso contrário apesar de ser um jogo, vai ser um jogo bem tediante. Não se sabe o time vencedor de uma partida de futebol até que o jogo acabe (exceto quando vemos 7x1). A maneira mais fácil de se deixar algo imprevisível é envolver um elemento de probabilidade, como por exemplo o lançamento de dados. Porém se os jogadores perceberem que as decisões feitas por eles não importam, logo se sentiram frustrados. Minha opinião pessoal sobre isso é que isso está diretamente relacionado ao estado de "fluxo" e que isto é bem óbvio já que é retirado completamente o eixo de habilidade se você utilizar somente probabilidades e nenhuma habilidade do jogador ao longo do tempo. Logo se não há variação conforme a habilidade o jogador rapidamente estará entediado.  Se você não tem a mínima ideia do que estou falando, leia este artigo do [gamasutra](http://www.gamasutra.com/blogs/ToniSala/20131208/206535/Game_Design_Theory_Applied_The_Flow_Channel.php). Outras formas apresentadas pelo autor para aumentar a imprevisibilidade de um jogo é permitir que as escolhas de outros jogadores influenciem o resultado ou ter regras suficientemente complexas. Para a primeira situação o autor exemplifica utilizando um jogo de pedra-papel-tesoura. Para a segunda situação é utilizado o xadrez, já que cada uma das 16 peças se movimentam de maneira simples, mas combinadas as fica difícil fazer uma previsão.

  

Após esta discussão sobre a necessidade de imprevisibilidade de um jogo estar diretamente associada ao quão divertido ele é o autor apresenta como essas regras são transformadas em mecânicas. Gosto de como o autor diferencia o que é 1 regra de o que é uma mecânica na seguinte frase:

  

**_"Rules are considered printed instructions that the player is aware of, while the mechanics of video games are hidden from player, that is, implemened in software for which the player is given no direct user interface."_**

_Game Mechanics: Advanced Game Design_  

  
As mecânicas nucleares (_core mechanics_) são as mecânicas que centrais e que afetam mecânicas de menor importância. As mecânicas nucleares normalmente são aprendidas e compreendidas pelo jogador conforme ele joga. É importante notar que uma mecânica considerada nuclear no contexto de uma parte do jogo pode ser apenas uma mecânica comum em outra sessão.

  

|   |
|---|
|![http://images.nintendolife.com/news/2014/07/takashi_tezuka_mario_maker_wont_move_quite_like_the_original_mario_bros/attachment/0/large.jpg](https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_tQR6CRFvQz5sLHK1nxfisAX9-XSHp2nvolPCwM9WNSeHDxdg00nvkh0ocufYlztSB6GOGuMR_EwyG_nu-l9ZzclpR34HVWNKXRActMLKwim-I4cq0WkaU05Fs2Mc9V3Af1p-WDdh2XmUTbDzNYdUFw9sVvZgDpwAknRKRgpnjFBaY8Hd6IynKRxmUFY6TS2yMmlDLIUMf3k6q4Tf53IflF9cOS0ShHBb0dKBFY1Yw=s0-d)|
|A gravidade é considerada uma mecânica nuclear em jogos do tipo plataforma||

O autor cria 5 categorias de mecânicas que podem ser encontradas dentro de um jogo: Físicas, Economia Interna, Mecanismos de Progressão, Manobras Táticas, Interação Social. Toda vez que uma mecânica é definida pela física do mundo do jogo está mecânica pode ser considerada uma mecânica física. No jogo Portal 2 aquelas amoebas coloridas são um exemplo de uma mecânica físíca. A geleca laranja reduz o atrito nas superfícies em que for colocada, enquanto a geleca azul repele qualquer objeto colocado em cima de uma superficie suja com essa amoeba. Em Portal 2 também temos a geleca branca que permite que o jogador coloque portais em qualquer superfície e a amoeba transparente que remove qualquer outra geleca que tenha sido colocada na superfície.

  

|   |
|---|
|![http://images.akamai.steamusercontent.com/ugc/576704701060165800/AF1337193B4818B9379089B896933A3F6656244F/](https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_uxW54HAVAhlLpFfw6ZAF1_z_m2_z2iOpg3DDLOcNJuwvaXv2xxHw5cb3la__XYAayy2uOc-59K6MzIeqeQJpNTSvAM3GBuZG0IY2EVzgW4iQ43-LnorgerBGUo8kDWNP-USqbAf0tvMNf1dgTKvpEV13V5S0YqWnv6k9LusxQj59o6JWoPndPwN22kIyM=s0-d)|
|Amoebas de Portal 2|

As mecânicas de Economia Interna envolvem transações de elementos dentro do jogo que são coletados, consumidos ou ainda trocados. Normalmente lembramos de recursos dentro do jogo como: energia, munição, dinheiro... Mas essas mecânicas não são limitadas somente a esse tipo de elementos, mesmo as skills de um personagem em um RPG podem ser consideradas como parte da economia de um jogo.

  

Mecanismos de Progressão são as mecânicas que definem como um jogador pode progredir dentro do jogo e normalmente são diretamente ligadas ao level design. Aquela chave que dá acesso a sala do chefe, aquela alavanca que desce a ponte e que permite o jogador passar de um lado pro outro do rio, essas coisas...

  

Toda mecânica que envolve o posicionamento de algum objeto no tela dando vantagem ou desvantagem ao jogador é considerada uma Manobra Tática. A grande maioria dos jogos de estratégia utiliza este tipo de mecânica. Entretanto existem alguns outros exemplos como o jogo SimCity. Em SimCity o jogador deve posicionar as estruturas da cidade considerando os recursos da cidade, como por exemplo deve-se evitar que o aterro sanitário da cidade seja colocado perto da área de moradia da cidade por conta da desvalorização dos terrenos locais. 

  

Por último o autor apresenta as mecânicas de Interações Social como qualquer mecânica que necessite  da interação entre jogadores. Pode ser um jogador dar presentes para outro jogador, convidar um jogador para a partida... Preste atenção em mecânicas utilizadas em RPGs de mesa que favorecem formas dos jogadores interajam entre si, criando alianças ou rivalidades ao longo do jogo. Após todas essas definições o autor apresenta uma tabela que relaciona o gênero de um jogo e exemplos de mecânicas de cada categoria. Estou reproduzindo esta tabela pois acho que ela essencial para consultar como convenções usuais de mecânicas em determinados jogos, ou "Que mecânicas devo prestar atenção e comparar com outros jogo quando estiver fazendo um jogo num gênero que eu nunca mexi antes"

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-QsOvqy7On6R3O_6nF9M_wBN-dkFKa1cM7ASPpHytvEnX1G8d3Qd5ps-RX2cTKlQUnYQH8jrxbOWNaU38BiLi5VT4Xr4vNxlw2hoKnxFCwfKe2IB9_V0ljhoGDy4ySypKp77b_ulFjOM/s1600/generosProgressao.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-QsOvqy7On6R3O_6nF9M_wBN-dkFKa1cM7ASPpHytvEnX1G8d3Qd5ps-RX2cTKlQUnYQH8jrxbOWNaU38BiLi5VT4Xr4vNxlw2hoKnxFCwfKe2IB9_V0ljhoGDy4ySypKp77b_ulFjOM/s1600/generosProgressao.png) |
| Mecânicas e Gêneros em Jogos                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

Vou para com o resumo de hoje por aqui, o capítulo 1 continua tendo muitas novidades sendo apresentadas, mas acho que já tenho muita coisa para digerir até a próxima leitura deste capítulo. Acredito que o resumo deste capítulo terá mais uma parte. O livro é bom e denso como você pode ver, portanto VÁ LER ESSA BAIUCA QUE ELA É BEM TOP.


# Capítulo 1 : PT2

Continuando o resumo do capitulo 1 do livro Game Mechanics: Advanced Game Design que comecei nesta postagem, recomendo que você leia-a antes de continuar a leitura. Vou usar conceitos apresentados na postagem anterior...

[](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhi076vksq6mOXBLyQ98aXD0AG0ih7D5LLdM-lHsqaCaEgBQQ-I-TWSCCoYW6PTRJ7JwAXsab8eEVYuax0eUv1JNp3A5bcr7RiJtShHO_jRV3FgafBJzy2FeBdhE79C7Mzn1BgdECAGqWk/s1600/capaLivroThumbnail.png)

Após a apresentação das 5 classificações de mecânicas (Físicas, Economia Interna, Mecanismos de Progressão, Manobras Táticas, Interação Social) o livro apresenta uma segunda classificação que pode ser utilizada para mecânicas: discreta e continua. O livro não apresenta uma definição final

 sobre o que é uma mecânica que pode ser considerada discreta ou continua, mas gosto do exemplo dado no livro "The Art of Game Design: A book of lenses" que facilita bastante a distinção. O posicionamento do "X" em um jogo da velha é considerada uma posição discreta, não importa onde vc o coloque, contanto que você o coloque em uma das células. Em um jogo de sinuca modificar minimamente a posição de uma das bolas altera completamente o cenário do jogo. O posicionamento do "X" no jogo da velha pode ser considerada uma mecânica discreta, enquanto a posição das bolas na sinuca é uma mecânica contínua. Normalmente mecânicas físicas são mecânicas contínuas. Eu sei, essa classificação é bastante nebulosa e talvez precise de algum tempo para aceita-la, mas é assim que funciona. Um ponto relevante apresentado no livro é que uma mecânica pode hoje ser considerada discreta/continua e futuramente essa classificação ser alterada. A mecânica de pulo implementada no jogo Donkey Kong pode ser considerada discreta se comparada a forma com o pulo é implementado hoje nos jogos de plataforma modernos já que é possível claramente observar os loops para atualização.

  

|   |
|---|
|[![https://media.giphy.com/media/IBiF8j8sasCYw/giphy.gif](https://media.giphy.com/media/IBiF8j8sasCYw/giphy.gif)](https://media.giphy.com/media/IBiF8j8sasCYw/giphy.gif)|
|A mecânica de pulo originalmente em Donkey Kong podia ser considerada discreta|

Após essa diferenciação inicial de mecânicas discretas e contínuas o livro apresenta 2 exemplos de como criar estratégia misturando mecânicas discretas com físicas/contínuas. O primeiro exemplo é o jogo Angry Birds, neste jogo o jogador deve catapultar pássaros com o objetivo de derrubar construções e matar porquinhos. A mecânica de arremessar um pássaro é  discreta e continua já que você só pode arremessar um por vez e tem uma quantia limitada de pássaros, mas o impacto nas estruturas é determinado pela física do jogo

  

|   |
|---|
|![http://resources2.news.com.au/images/2011/05/12/1226054/465990-angry-birds.gif](https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_tGqxYE6eQlz4aBp52yhXdkJBL-26G5RmiZNFl29WpRxAemLiq9c7bk12HhMm6Ap_FEDyAD2rPbEYolobKzTPqvHFgZfL0EpHLheKgyM5eFoPV5QsxmTobm7FGd6QrcrNV0dVpE9aOBjbQ7P-H2Vc-0oA=s0-d)|
|Angry Birds é um jogo que mistura mecânicas discretas com mecânicas contínuas|

  

O segundo exemplo é o jogo World of Goo em que o objetivo do jogador é construir estruturas utilizando um recurso discreto e limitado ("Goos" aka gelequinha preta). Essas estruturas sofrem ação da física (como gravidade, centro de massa e o momentum). O jogador só pode posicionar uma geleca por vez, mas o posicionamento da meleca influencia em toda estrutura e etc, etc, etc... A diferença entre os jogos é como eles encaram a diferença de um pixel: Um pixel errado em Angry Birds pode significar um erro crítico, enquanto o jogo World of Goo perdoa mais o jogador e inclusive mostra as ligações que a geleca fará na estrutura final. Nenhuma das duas abordagens é melhor, apenas são diferentes é importante considerar isso na hora de fazer o game design. Psiu, se você não conhece algum desses jogos, saia debaixo dessa pedra, faça um favor a si mesmo: vá jogar.

  

|   |
|---|
|![http://www.devlounge.net/wp-content/uploads/2009/08/world-of-goo.jpg](https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_tKBaDzmfAU4PWATcVLjkwUDgf0eK5I2mczb5lIyT1UEVUvScHtpumpU3XC0VgX_uCXmpaT_3-TvR7jyUJ6-7Mzvfs_ZMwjQwC1td7Xusb4fdF1Pm-QVnIh0-oHNAlobzQHsHVY0EYO=s0-d)|
|World of Goo também mistura mecânicas discretas e mecânicas contínuas|

  

Normalmente as mecânicas continuas são baseadas na física implementada no jogo e, portanto, tiram bastante do poder de inovação do game designer. Isso é cada vez é mais verdadeiro já que temos mais jogos utilizando bibliotecas prontas de física deixando menos espaço para criação de mecânicas contínuas. Outro ponto a ser considerado é que as mecânicas continuas evoluíram muito mais rapidamente com o avanço da computação que as discretas.

  
_**"Looking back at four decades of computer game history, it's clear that game physics have evolved much faster than any other type of mechanics in games."**_  

__Game Mechanics: Advanced Game Design__ 

  

Em seguida o livro apresenta como é o processo da definição do início ao fim do game design de um jogo utilizando 3 estágios: conceito, elaboração e refinamento. Os estágios são exatamente o que sugerem ser e não há muitas novidades aqui. O estágio de conceito é quando são definidas as mecânicas principais, o publico alvo e o papel do jogador. Quando você definir isso, deve-se documentar as decisões tomadas em um GDD. O livro que explica como criar um GDD do zero e te dá um documento base para ser seguido é o "Design de Games - Uma abordagem prática". [Esse](http://www.gamasutra.com/view/feature/131632/creating_a_great_design_document.php) artigo do gamasutra também ajuda quem quiser seguir o caminho mais formal. Assim como [esse](http://gamedevelopment.tutsplus.com/articles/how-and-why-to-write-a-great-game-design-document--cms-23545) aqui do gamedevtuts. Esse é um assunto que daria uma série sozinho aqui no blog, então sintam-se a vontade para pesquisar/trazer coisas novas sobre.

  

Depois de tanta coisa conceitual e abstrata está na hora de por a mão na massa durante a fase de elaboração. **JUST DO IT!** Aqui os problemas aparecem, o papel aceita tudo que você fizer com ele, o que não vale para o seu jogo. Uma mecânica não funciona como você esperava aqui, um bug aparecendo acolá, o sistema aqui é bruto e os mais fracos podem não resistir. É importante que durante essa fase, que deverá ser divida em ciclos, sejam feitos vários testes com o público alvo final para ver a aceitação e funcionamento de mecânicas combinadas.

  

O termino da fase de elaboração e refinamento não é muito clara a princípio já que basicamente durante a fase de refinamento é polido o que já tem pronto. Ou seja, teoricamente não deve-se adicionar/remover mecânicas do jogo, apenas melhorar as já disponíveis. É o final do desenvolvimento do jogo, respire fundo e não procure alterar muita coisa já que o prazo está chegando. Eu pessoalmente diria que essa é a parte do processo em que você gasta todas suas energias e recursos para adicionar o chamado game-feel ao jogo. Game-Feel é um conceito nebuloso dentro do Game Design, mas que vale a pena dar uma lida sobre. Essa minha apresentação fala um pouco sobre isso e no final, como sempre, existem os links recomendados sobre o assunto.

  

  
É destacado o quão importante definir as mecânicas centrais logo no inicio do projeto por dois motivos. O primeiro que é difícil definir o que é divertido e o que é um saco só olhando pra um texto cheio de regras. E o segundo que talvez as mecânicas gerem conflitos ou ainda tenham um equilíbrio delicado e sensível a ser respeitado. Quanto mais cedo esses problemas forem detectados, mais cedo o barco é abandonado ou consertado. Isso é utilizado como gatilho para o próximo tema desta capítulo que é prototipação. A criação de protótipos ajuda evitando/diminuindo/detectando esses problemas antes mesmo deles aparecerem quando a mecânica é implementada.  
  
  
_**"Gameplay emerges from game mechanics. It is difficult, if not impossible, to tell whether your gameplay will be fun simply looking at the rules."**_  

__Game Mechanics: Avanced Game Design__

  

 Desta vez o resumo foi mais curtinho, mas é que o próximo assunto é bastante complexo e adiciona muitos termos ao dicionário, uma pausa é mais que bem vinda na leitura. Acredito também que há bastante coisa já para ser lida sobre o que foi apresentado até, então: Boa leitura. Novamente reforço se este livro te interessou até aqui, vá lê-lo. Apesar de estar cobrindo somente o que acho relevante acabo colocando muitas informações extras com a minha experiência ou ainda mais referências sobre os assuntos que aparecem durante a leitura. Provavelmente, ler o livro original seja até mais rápido do que ler tudo que mostro nos meus resumos comentados.

# Capítulo 1: PT3


Ultima parte do primeiro capítulo do livro "Game Mechanics:Advanced Game Design"!!! Esse finalzinho trata de um dos assuntos que considero mais importantes durante a criação de um jogo: construção de protótipos. Você terminou de criar um documento descrevendo conjunto de mecânicas, mas será que elas são realmente legais na hora de jogar? Como você tem certeza que na verdade não são apenas 1 monte de regras quebradas e não divertidas? E como identificar o comportamento daquelas mecânicas emergentes? É essa a hora de construir um protótipo. A ideia é construir um modelo para testar sua usabilidade antes de construir uma versão final. Aqui vale qualquer coisa para testar sua ideia contanto que seja fácil e barato implementar, portanto, assim quando os testes terminarem o protótipo possa ser facilmente descartado.

[](https://scontent.fcwb1-1.fna.fbcdn.net/v/t1.0-9/12794572_946382348770652_182626700922482569_n.png?oh=10c296141587569d152561142337caa1&oe=588156E3)

Dependendo do objetivo do modelo que está sendo criado é possível fazer uma fatiar verticalmente ou horizontalmente jogo. Uma fatia vertical mostra um pouco de todos os elementos presentes, enquanto, uma fatia horizontal explora tudo de apenas um tipo elemento, mas nenhum pouco de outros tipos. Normalmente jogos feitos em jams são na realidade protótipos de fatia vertical do que a equipe planejava.

|   |
|---|
|[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjq4Uq_TSxS6_Sx8F1FXPPPehRGwmIjEPAMfzubWn9d2bxcn2g2YXybCsDZg38lIAovih4MOJVDlYoXOT_2JQbQNX0rwsNUW1sBBzkjxDKTmzFXkDM2JqLw2ZLtPA44NXLkRAofsp0pf9A/s320/FatiaVerticalHorizontal.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjq4Uq_TSxS6_Sx8F1FXPPPehRGwmIjEPAMfzubWn9d2bxcn2g2YXybCsDZg38lIAovih4MOJVDlYoXOT_2JQbQNX0rwsNUW1sBBzkjxDKTmzFXkDM2JqLw2ZLtPA44NXLkRAofsp0pf9A/s1600/FatiaVerticalHorizontal.png)|
|Uma fatia horizontal e vertical feita de um projeto.|

Essa fatia do projeto que está sendo analisada é diretamente dependente do foco que vai ser dado ao protótipo. Escolher um propósito único para seus protótipos ajuda a prototipar mais rápido e eficientemente. Lembre-se o objetivo é testar um aspecto e descartar o protótipo em seguida. Quanto menos elementos sendo testados, menos distrações com os bugs ou features irrelevantes deixando o feedback mais preciso. Com o foco definido, o próximo passo é implementar esse modelo através de 3 maneiras: protótipos de software, de papel ou ainda físicos.

  

Para construir esses protótipos você pode utilizar softwares de construção rápida, porém de baixo desempenho em larga escala. Nesse aspecto um queridinho por mim é o [Construct 2](https://www.scirra.com/). O Construct 2 é ótimo para o que se propõe, já que é possível construir jogos inteiros sem digitar uma linha de código sequer, entretanto, dependendo do que você for fazer, o jogo pode rapidamente fica lento e até mesmo injogável dependendo da plataforma. O problema desta abordagem é que ela é bem mais lenta se comparada com as outras, entretanto já é possível fazer alguns testes com a arte e o próprio código. A principal vantagem é que todos na equipe saberem exatamente o que será feito e como deverá ser feito. Outra vantagem desta plataforma é que gera modelos facilmente customizáveis. Mesmo no protótipo é possível fazer alguns ajustes das variáveis mais importantes do jogo. Por exemplo, em um plataformer pode ser importante definir o valor da força da gravidade já no início do projeto.

  

Outra opção bastante utilizada é construir protótipos de papel por serem muito baratos e rápidos de serem criados. A ideia desse tipo de protótipo é criar uma versão não computadorizada, uma versão de tabuleiro mesmo, do seu jogo. Se você tem um jogo não dependente de física, ou sem mecânicas dependentes de tempo e sem muitos cálculos pesados, provavelmente você conseguirá fazer essa versão de tabuleiro. Você pode inclusive utilizar um computador/celular/calculadora para auxiliar durante os testes. Além de ser rápido e barato, é muito fácil alterar regras do jogo para verificar o impacto. Você pode inclusive mudar as regras durante o jogo se elas não estiverem se comportando como o esperado. A grande desvantagem é que algumas mecânicas não são facilmente transportadas para o papel. Partículas e sons são muito legais e a ausência deles pode dificultar o envolvimento dos jogadores durante os testes.  
  

|   |
|---|
|[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6Ec_OTVLBdNMs1HJwjMS4iTSFaTZ702TPhLL9wuxH1RVyxUwbu-qQ1X-46NA5BFV5PoJUvSRR105CBY-aSYGp0cBLjxzFiGuQOBFclsz8csxU4LNKRiJzxhwyAcNoO3l2xpGtrO23b6s/s400/WP_20160328_003.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6Ec_OTVLBdNMs1HJwjMS4iTSFaTZ702TPhLL9wuxH1RVyxUwbu-qQ1X-46NA5BFV5PoJUvSRR105CBY-aSYGp0cBLjxzFiGuQOBFclsz8csxU4LNKRiJzxhwyAcNoO3l2xpGtrO23b6s/s1600/WP_20160328_003.jpg)|
|Esse é o meu kit de prototipação em papel que uso em todas as jams.|

Esse é o kit que utilizo para fazer protótipos de papel. Ele não é muito extenso mas acho que resolve na grande maioria das vezes. Adicionaria apenas alguns dados de lados diferentes, principalmente de 10 lados para ajudar a simular porcentagens. Na foto também não tem, preciso repor, uma cartolina grande branca. Ela é muito eficiente para fazer mapas e tabuleiros. Um kit para prototipação em papel é bastante barato e fácil de ser montado, acho que todo desenvolvedor deveria ter um em casa.

  

_**"A prototype typically zooms in on a particular aspect of the game, and you just might want to zoom in on the internal economy of a game that otherwise erives most of its gameplay from extended physics simulation."**_

_Game Mechanics: Advanced Game Design_

  

Existe a possibilidade de construir protótipos físicos quando o jogo é dependente de muitas mecânicas continuas e físicas. Uma partida de paintball é o suficiente para se entender a sensação que deve ser passada em um first-person shooter. Assim como nos feitos em papel, um protótipo físico é facilmente adaptável e rápido de ser construído. Existe a possibilidade de misturar protótipos físicos com os de papel dependendo do objetivo. Novamente, construir um protótipo físico não é uma tarefa fácil já que é dependente da habilidade tanto do game design quanto dos jogadores.

  

Assim terminamos o primeiro capítulo do livro "Game Mechanics: Advanced Game Design". Acredito que esse capítulo é o mais longo e demorado do livro para resumir por ser bastante teórico e cheio de termos novos. Nos próximos ele cita muitos exemplos que podem ser resumidos com facilidade. Não fiz muitas extensões no texto dos autores desta vez por este ser o assunto que mais abordo em outras postagens. Tive a sensação que era somente necessário formalizar um pouco, mostro bastante como funciona o meu método de prototipagem no blog, então não quis ser muito redundante. Dentro de alguns dias pretendo trazer o resumo do capítulo 2 do livro neste mesmo bat-canal.