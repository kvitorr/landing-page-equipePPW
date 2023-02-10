const vitor = document.getElementById("vitor")
const adelia = document.getElementById("adelia")
const marcos = document.getElementById("marcos")
const vitorimg = document.getElementById("vitor-img")
const adeliaimg = document.getElementById("adelia-img")
const marcosimg = document.getElementById("marcos-img")

vitorimg.addEventListener("mouseover", () => {
    
    vitor.style.opacity = 0;

    setTimeout(() => {
        vitor.setAttribute('src', './assets/images/perfil-vitor.jpeg')
        vitor.style.opacity = 1;
    }, 500);
})

vitorimg.addEventListener("mouseout", () => {
    vitor.style.opacity = 0;
    setTimeout(() => {
      vitor.setAttribute('src', './assets/images/vitor-desenho.png');
      vitor.style.opacity = 1;
    }, 500);
})



marcosimg.addEventListener("mouseover", () => {
    
    marcos.style.opacity = 0;

    setTimeout(() => {
        marcos.setAttribute('src', './assets/images/perfil-marcos.jpeg')
        marcos.style.opacity = 1;
    }, 500);
})

marcosimg.addEventListener("mouseout", () => {
    marcos.style.opacity = 0;
    setTimeout(() => {
      marcos.setAttribute('src', './assets/images/marcos-desenho.jpg');
      marcos.style.opacity = 1;
    }, 500);
})


adeliaimg.addEventListener("mouseover", () => {
    
    adelia.style.opacity = 0;

    setTimeout(() => {
        adelia.setAttribute('src', './assets/images/perfil-adelia.jpg')
        adelia.style.opacity = 1;
    }, 500);
})

adeliaimg.addEventListener("mouseout", () => {
    adelia.style.opacity = 0;
    setTimeout(() => {
      adelia.setAttribute('src', './assets/images/adelia-desenho.jpeg');
      adelia.style.opacity = 1;
    }, 500);
})