const toggle = document.querySelector(".translate-page .switch #switch");

toggle.addEventListener("change", translatePage);

function translatePage() {
  const route = window.location.pathname;
  if(toggle.checked) {
    // nav bar menu
    const itemsText = ["icon Inicio", "icon Chat", "icon Guía", "icon Ingresar"]
    const itemsIcon = ["<i class='fas fa-home'></i>", "<i class='fas fa-comments'></i>", "<i class='fas fa-circle-info'></i>", "<i class='fas fa-user'></i>"]
    const menuItems = document.querySelectorAll(".header .navbar ul li");
    menuItems.forEach((item, i) => {
      item.querySelector("a").textContent = itemsText[i]
      item.querySelector("a").innerHTML = item.querySelector("a").innerHTML.replace(/icon/g, itemsIcon[i]);
    })
    const itemOut = document.querySelector("#logout");
    if(itemOut) {
      itemOut.textContent = "Cerrar sesión"
    }
    if (route === "/") {
      const h2 = document.querySelector(".home .home-container .text h2");
      h2.textContent = "¡Mejora tu inglés conmigo!";
      const h4 = document.querySelector(".home .home-container .text h4");
      h4.textContent = "Practica tu inglés, chateando con nuestra Inteligencia Artificial en tiempo real. ¡Es como hablar con tus amigos!";
      const a = document.querySelector(".home .home-container .text a");
      a.textContent = "Empieza aquí"
    } else if (route === "/guide") {
      const texts = [
        "Chatea en inglés con Beatrice, una inteligencia artificial",
        "Comunícate a través de mensajes de texto o notas de voz",
        "Puedes escuchar todos sus mensajes",
        "No tengas miedo de cometer errores, ella te entenderá igualmente",
        "Pídele que te traduzca palabras o frases al inglés",
        "También puedes hablar en español, pero las respuestas son en inglésxxxES: oración"
      ]
      const h3 = document.querySelector(".guide .guide-container .banner h3");
      h3.textContent = "GUÍA";
      const cardSections = document.querySelectorAll(".guide .guide-container .card-section");
      const sec1 = cardSections[0].querySelectorAll(".card .card2 p")
      sec1.forEach((p,i) => {
        p.textContent = texts[i];
      })
      const sec2 = cardSections[1].querySelectorAll(".card .card2 p")
      sec2.forEach((p,i) => {
        p.textContent = texts[i+3];
        p.innerHTML = p.innerHTML.replace(/xxx/g, '<br>');
      })
    } else if (route === "/login" || route === "/signup") {
      console.log("funciona")
      const h3 = document.querySelector(".caja__trasera div h3")
      h3.textContent = "¿Ya tienes una cuenta?"
      const p = document.querySelector(".caja__trasera div p")
      p.textContent = "Inicia sesión para entrar en la página"
      const btn = document.querySelector(".caja__trasera button")
      btn.textContent = "Iniciar sesión"
      const h3r = document.querySelector(".caja__trasera .caja__trasera-register h3")
      h3r.textContent = "¿Aún no tienes cuenta?"
      const pr = document.querySelector(".caja__trasera .caja__trasera-register p")
      pr.textContent = "Regístrate para poder iniciar sesión"
      const btnr = document.querySelector(".caja__trasera .caja__trasera-register button")
      btnr.textContent = "Regístrarse"
      
      const h2fl = document.querySelector(".formulario__login h2")
      h2fl.textContent = "Inicio de sesión"
      const btnfl = document.querySelector(".formulario__login button")
      btnfl.textContent = "Entrar"
      
      const h2fr = document.querySelector(".formulario__register h2")
      h2fr.textContent = "Registro"
      const btnfr = document.querySelector(".formulario__register button")
      btnfr.textContent = "Regístrarse"
    }
    const footer = document.querySelector(".copyright p");
    footer.textContent = "Beatrice © 2023 | Diseñado por nombre"
    footer.innerHTML = footer.innerHTML.replace(/nombre/g, '<a href="https://sindromedeluis.netlify.app/" target="_blank" rel="noopener noreferrer">Luis A Sandoval @SindromeDeLuis</a>');
  } else {
    const itemsText = ["icon Home", "icon Chat", "icon Guide", "icon Log In"]
    const itemsIcon = ["<i class='fas fa-home'></i>", "<i class='fas fa-comments'></i>", "<i class='fas fa-circle-info'></i>", "<i class='fas fa-user'></i>"]
    const menuItems = document.querySelectorAll(".header .navbar ul li");
    menuItems.forEach((item, i) => {
      item.querySelector("a").textContent = itemsText[i]
      item.querySelector("a").innerHTML = item.querySelector("a").innerHTML.replace(/icon/g, itemsIcon[i]);
    })
    const itemOut = document.querySelector("#logout");
    if(itemOut) {
      itemOut.textContent = "Log out"
    }
    if (route === "/") {
      const h2 = document.querySelector(".home .home-container .text h2");
      h2.textContent = "Improve your English with me!";
      const h4 = document.querySelector(".home .home-container .text h4");
      h4.textContent = "Practice your English, chatting with our Artificial Intelligence in real time. Is like talking to your friends!";
      const a = document.querySelector(".home .home-container .text a");
      a.textContent = "Start here"
    } else if (route === "/guide") {
      const texts = [
        "Chat in English with Beatrice, an artificial intelligence",
        "Communicate through text messages or voice notes",
        "You can listen all her messages",
        "Don't be afraid to make mistakes, she will still understand you",
        "Ask her for the translation of words or phrases into English",
        "You can also speak in Spanish, but the replies are in EnglishxxxES: oración"
      ]
      const h3 = document.querySelector(".guide .guide-container .banner h3");
      h3.textContent = "GUIDE";
      const cardSections = document.querySelectorAll(".guide .guide-container .card-section");
      const sec1 = cardSections[0].querySelectorAll(".card .card2 p")
      sec1.forEach((p,i) => {
        p.textContent = texts[i];
      })
      const sec2 = cardSections[1].querySelectorAll(".card .card2 p")
      sec2.forEach((p,i) => {
        p.textContent = texts[i+3];
        p.innerHTML = p.innerHTML.replace(/xxx/g, '<br>');
      })
    } else if (route === "/login" || route === "/signup") {
      const h3 = document.querySelector(".caja__trasera div h3")
      h3.textContent = "Do you already have an account?"
      const p = document.querySelector(".caja__trasera div p")
      p.textContent = "Login to enter the page"
      const btn = document.querySelector(".caja__trasera button")
      btn.textContent = "Log In"
      const h3r = document.querySelector(".caja__trasera .caja__trasera-register h3")
      h3r.textContent = "Don't you have an account yet?"
      const pr = document.querySelector(".caja__trasera .caja__trasera-register p")
      pr.textContent = "Register so you can log in"
      const btnr = document.querySelector(".caja__trasera .caja__trasera-register button")
      btnr.textContent = "Register"
      
      const h2fl = document.querySelector(".formulario__login h2")
      h2fl.textContent = "Log In"
      const btnfl = document.querySelector(".formulario__login button")
      btnfl.textContent = "Enter"
      
      const h2fr = document.querySelector(".formulario__register h2")
      h2fr.textContent = "Sign Up"
      const btnfr = document.querySelector(".formulario__register button")
      btnfr.textContent = "Sign Up"
    }
    const footer = document.querySelector(".copyright p");
    footer.textContent = "Beatrice © 2023 | Designed by name"
    footer.innerHTML = footer.innerHTML.replace(/name/g, '<a href="https://sindromedeluis.netlify.app/" target="_blank" rel="noopener noreferrer">Luis A Sandoval @SindromeDeLuis</a>');
  }
}
