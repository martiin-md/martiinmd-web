// Contenido de traducción por idioma
const translations = {
  es: {
    name: "Martin Miroslavov Dimitrov",
    job: "Programador Mobile | Técnico de Redes | Diseñador UI/UX | Freelancer",
    entrepreneur: "<b>Joven Emprendedor</b>",
    aboutTitle: "Sobre mí",
    aboutList: [
      "Graduado en Sistemas MicroInformáticos y Redes.",
      "Desarrollo Web: HTML5, CSS, XML.",
      "Desarrollo Móvil: Android y Juegos Móviles.",
      "Especialista en el mundo del Trading a nivel Experto",
    ],
    projectsTitle: "Proyectos Destacados",
    contactTitle: "Contacto",
  },
  en: {
    name: "Martin Miroslavov Dimitrov",
    job: "Mobile Developer | Network Technician | UI/UX Designer | Freelancer",
    entrepreneur: "<b>Young Entrepreneur</b>",
    aboutTitle: "About Me",
    aboutList: [
      "Graduated in Microinformatics and Networks.",
      "Web Development: HTML5, CSS, XML.",
      "Mobile Development: Android and Mobile Games.",
      "Expert-level Trading Specialist",
    ],
    projectsTitle: "Featured Projects",
    contactTitle: "Contact",
  },
  fr: {
    name: "Martin Miroslavov Dimitrov",
    job: "Développeur Mobile | Technicien Réseau | Designer UI/UX | Freelance",
    entrepreneur: "<b>Jeune Entrepreneur</b>",
    aboutTitle: "À propos de moi",
    aboutList: [
      "Diplômé en micro-informatique et réseaux.",
      "Développement Web : HTML5, CSS, XML.",
      "Développement Mobile : Android et Jeux Mobiles.",
      "Spécialiste du trading au niveau expert",
    ],
    projectsTitle: "Projets en vedette",
    contactTitle: "Contact",
  },
  it: {
    name: "Martin Miroslavov Dimitrov",
    job: "Sviluppatore Mobile | Tecnico di Reti | Designer UI/UX | Freelance",
    entrepreneur: "<b>Giovane Imprenditore</b>",
    aboutTitle: "Su di me",
    aboutList: [
      "Laureato in Microinformatica e Reti.",
      "Sviluppo Web: HTML5, CSS, XML.",
      "Sviluppo Mobile: Android e Giochi per dispositivi mobili.",
      "Specialista nel mondo del trading a livello esperto",
    ],
    projectsTitle: "Progetti in evidenza",
    contactTitle: "Contatto",
  },
};

// Función para cambiar el contenido según el idioma seleccionado
function setLanguage(language) {
  const translation = translations[language];

  if (!translation) {
    console.error(`No hay traducción disponible para el idioma: ${language}`);
    return;
  }

  document.getElementById("name").textContent = translation.name;
  document.getElementById("job").textContent = translation.job;
  document.getElementById("entrepreneur").innerHTML = translation.entrepreneur;
  document.getElementById("about-title").textContent = translation.aboutTitle;
  document.getElementById("projects-title").textContent =
    translation.projectsTitle;
  document.getElementById("contact-title").textContent =
    translation.contactTitle;

  // Reemplazar lista de "Sobre mí"
  const aboutList = document.getElementById("about-list");
  aboutList.innerHTML = "";
  translation.aboutList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    aboutList.appendChild(li);
  });
}

// Hacer la función accesible globalmente
window.setLanguage = setLanguage;
