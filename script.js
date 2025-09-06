function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // buscar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem ligh
    img.setAttribute("src", "./assets/avatar2.png")
  } else {
    //se nao tiver light mode, mantem a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
