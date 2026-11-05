---
tags:
  - DiamondSquare
  - ProceduralGeneration
  - ptbr
---
Estou trabalhando em um gerador de terrenos procedural utilizando o algoritmo diamond square para a matéria do mestrado de programação paralela. O objetivo final é ter um programa paralelo para a geração desse mapa de alturas utilizando o MPI.  
  
**Tá. E como funciona?**
O algoritmo precisa de uma matriz quadrada com lado de tamanho (2^L)+1 . Começa-se inicializando os cantos dessa matriz com valores aleatórios, no caso usei valores entre 0 e 255, já que queria transformar tudo isso em uma imagem depois utilizando a biblioteca PIL em Python. Em seguida, faz-se o passo chamado de quadrado (_square step_) que é calcular o valor do centro dessa matriz, ou seja o valor do encontro das diagonais da matriz. Esse valor é definido pela média dos 4 cantos dessa matriz.

Depois é feito o passo diamante (_diamond step_). Esse passo é um pouco mais complicado que o anterior, mas também não é nada absurdo. Graças a um erro de interpretação eu inicialmente implementei esse passo da seguinte forma: Os pontos diamante (que são os pontos centrais da borda da matriz sendo trabalhada) são calculados através da média dos pontos dos cantos. Porém, isto está errado, já que a forma correta é calcular os pontos diamante através da média dos pontos que formam o diamante utilizando o ponto diamante como centro. Eu sei, do jeito que eu digo é confuso, vejam essas imagens que eu acho que facilitam a compreensão:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6CsvuemC3zTN0AUa-Uab9bGwniYMzUyyCRDD4zfUCnA-VMdB0hs5Y8d1sHc0I6a6pDmS4dCCQPfwPMpJ_0tOMg26wik62Eiv15Vr-FaMthJ_nIeckKEouFZmyVWjJRp6Blzy0y3YL1-c/s1600/diamondSquare.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6CsvuemC3zTN0AUa-Uab9bGwniYMzUyyCRDD4zfUCnA-VMdB0hs5Y8d1sHc0I6a6pDmS4dCCQPfwPMpJ_0tOMg26wik62Eiv15Vr-FaMthJ_nIeckKEouFZmyVWjJRp6Blzy0y3YL1-c/s1600/diamondSquare.png)
Em azul temos os pontos que estão sendo trabalhados, em vermelho os que já estão definidos e em verde indicando quais pontos são usados pra calcular o valor. Veja que na implementação errada, os pontos diamantes, os azuis do ultimo quadro, são calculados utilizando apenas os do canto, enquanto na implementação correta são utilizados valores dos centros dos quadrados vizinhos. Nisso um problema surge,  com as bordas do mapa, elas precisam ser tratadas, no meu caso apenas sorteei um valor aleatório para esse centro. Ao final temos uma matriz totalmente preenchida.  
  
**E a mágica?**

Após isso implementei o ruido, acredite aqui é aonde está a mágica desse algoritmo tão simples. Tanto na implementação correta, quanto na errada os mapas ficaram mais interessantes depois de colocar o ruído. O meu ruido basicamente era um valor aleatório  de porcentagem de variação entre as médias, ajustado com o tamanho do mapa.

|   |
|---|
|[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXDvBkeQoN4ffSRNm_YhkmRavlfcYniZPprh7PjaNuTbAIjuj1DFG-_NXATSXCkmMcnvDerKre8slF6lsDkWj3cz7IB_GP_CS2q7r18ulpSaCXycuM8F2Nnj7EoVRY5kACFIm7RYQhR04/s400/mapaFinal+%25284%2529.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXDvBkeQoN4ffSRNm_YhkmRavlfcYniZPprh7PjaNuTbAIjuj1DFG-_NXATSXCkmMcnvDerKre8slF6lsDkWj3cz7IB_GP_CS2q7r18ulpSaCXycuM8F2Nnj7EoVRY5kACFIm7RYQhR04/s1600/mapaFinal+%25284%2529.png)|
|Mapa com a implementação errada e sem ruídos|

|   |
|---|
|[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6kpVeHm9hxUIIUBpTxSbEh7fFg8urViDVwlryU0TCnMxT11mIIPQKMyjsfYUBiIL2bkGY80D7px0mHAd8ZgbvCQ2wUbAYRMSVTMh2490hp_m5zEDd9-KCCGxedKiNsMKzDYlsKaoF86s/s320/mapaFinal.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6kpVeHm9hxUIIUBpTxSbEh7fFg8urViDVwlryU0TCnMxT11mIIPQKMyjsfYUBiIL2bkGY80D7px0mHAd8ZgbvCQ2wUbAYRMSVTMh2490hp_m5zEDd9-KCCGxedKiNsMKzDYlsKaoF86s/s1600/mapaFinal.png)|
|Mapa com a implementação errada e com ruídos|

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAz4_kB-5xHiFSLGoHeF2cWWh0bmMD8lra4_awBSjMhFEwUs20DTVox6qOwUJzCjcTw6-O-1Y1YQwcSpb1uY2mogP_pPprfZG2Q0fg9yx3i5GGoir_FqyMR09hgrarNdHSG5Vlr1m1mwk/s400/mapaFinal.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAz4_kB-5xHiFSLGoHeF2cWWh0bmMD8lra4_awBSjMhFEwUs20DTVox6qOwUJzCjcTw6-O-1Y1YQwcSpb1uY2mogP_pPprfZG2Q0fg9yx3i5GGoir_FqyMR09hgrarNdHSG5Vlr1m1mwk/s1600/mapaFinal.png) |
| Mapa com a implementação correta e com ruídos                                                                                                                                                                                                                                                                                                                                                                                                                    |

|   |
|---|
|[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8cYw2Pmjp33YLBx8ZrK-pHss-j_ufTdCqxXK1ClxANpENpPVLBnzu_vw6eOvtmjO-nAwcxk012tYOlGMoAv-jLnVWH7UUpmySBgJxTn9E4AztSCQdj6779RPIdV8L5jH5MZl51OiOQzU/s1600/mapaFinal.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8cYw2Pmjp33YLBx8ZrK-pHss-j_ufTdCqxXK1ClxANpENpPVLBnzu_vw6eOvtmjO-nAwcxk012tYOlGMoAv-jLnVWH7UUpmySBgJxTn9E4AztSCQdj6779RPIdV8L5jH5MZl51OiOQzU/s1600/mapaFinal.png)|
|Mapa com a implementação correta e sem ruídos. Muito chato não?|

**Então, o errado deve ser descartado por que mesmo?**  

No fim das contas o grande problema do algoritmo implementado errado comparado com o certo é que ele gera umas bordas retas não muito naturais, mas pessoalmente acredito que devo encontrar algum uso pra ele. Uma coisa a ser notada é que esse algoritmo consome muita memória se você trabalhar diretamente com floats, sendo uma escolha muito sensata utilizar chars no lugar, já que você terá valores variando apenas  entre o intervalo de 0 e 255.  
  
Se alguém quiser reimplementar e souber inglês aqui estão os 3 links que mais me ajudaram nisso:  
[http://danielbeard.wordpress.com/2010/08/07/terrain-generation-and-smoothing/](http://danielbeard.wordpress.com/2010/08/07/terrain-generation-and-smoothing/)  
[http://www.gameprogrammer.com/fractal.html](http://www.gameprogrammer.com/fractal.html)  
[http://www.toomuchzerging.com/2012/03/developer-journal-2-diamonds-and-squares-and-algorithms-oh-my/](http://www.toomuchzerging.com/2012/03/developer-journal-2-diamonds-and-squares-and-algorithms-oh-my/)