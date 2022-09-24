const technologies = [
  {
    "name": "HTML5",
    "logo": "../assets/logos/html-logo.svg"
  },
  {
    "name": "CSS3",
    "logo": "../assets/logos/css-logo.svg"
  },
  {
    "name": "JavaScript",
    "logo": "../assets/logos/javascript-logo.svg"
  },
  {
    "name": "TypeScript",
    "logo": "../assets/logos/typescript-logo.svg"
  },
  {
    "name": "React",
    "logo": "../assets/logos/react-logo.svg"
  },
  {
    "name": "Bootstrap 5",
    "logo": "../assets/logos/bootstrap-logo.svg"
  },
  {
    "name": "Git",
    "logo": "../assets/logos/git-logo.svg"
  }
];

function addTechnologie(item) {
  const technologiesContainer = document.querySelector('.tecnologias-logos-container');

  const technologieCard = document.createElement('div');
  const technologie = document.createElement('h3');
  const technologieLogo = document.createElement('img');

  technologieCard.classList.add('tecnologia-descricao');
  technologie.innerHTML = item.name;
  technologieLogo.src = item.logo;
  technologieLogo.setAttribute('alt', item.name);
  technologieLogo.setAttribute('title', item.name);

  technologieCard.append(technologieLogo);
  technologieCard.append(technologie);
  technologiesContainer.appendChild(technologieCard);
}

technologies.forEach((item) => { addTechnologie(item) });