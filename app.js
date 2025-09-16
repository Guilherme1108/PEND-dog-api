'use strict'

//Função do botão
const buttonTrocarRaca = document.getElementById('pesquisarRaca')

function mudarRaca() {
  const nomeRaca = document.getElementById('nomeRaca').value
  return nomeRaca
}
buttonTrocarRaca.addEventListener('click', async () => {
  const nomeRaca = mudarRaca()
  const imagens = await buscarImagens(nomeRaca)
  criarImagens(imagens)
})



async function buscarImagens(nomeRaca) {

let url

  if (!nomeRaca) {
    url = 'https://dog.ceo/api/breeds/image/random/50'
  } else {
    url = `https://dog.ceo/api/breed/${nomeRaca}/images`
  }
    const response = await fetch(url)
    const imagens = await response.json()
    return imagens.message

}

function criarImagens(listaDeImagens) {
  const conjuntoImagens = document.getElementById('divImagens')
  conjuntoImagens.innerHTML = '' // limpa as imagens

  listaDeImagens.forEach(url => {
    const imagemCachorro = document.createElement('img')
    imagemCachorro.classList.add('dogImg')
    imagemCachorro.src = url
    conjuntoImagens.appendChild(imagemCachorro)
  })
}