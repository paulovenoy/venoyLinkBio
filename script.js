function toogleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    
    // Pegar TAG <IMG>
    const img = document.querySelector("#profile img")

    // Substituir a IMG
    if(html.classList.contains('light')) {
        // IF Light = IMG Light
        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute("alt", "Foto de Perfil - Modo Claro")
    } else {
        // IF S/Light = IMG Dark
        img.setAttribute("src", "./assets/avatar.png")
        img.setAttribute("alt", "Foto de Perfil - Modo Escuro")
    }
}
