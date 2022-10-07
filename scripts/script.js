import { initCreateModal } from "./techModal.js";
import { projects } from "./projects.js";

function addProject(projeto) {
  const projectContainer = document.querySelector(".projects-container");

  createProjectCard(projectContainer, projeto);
}

function createProjectCard(projectContainer, projeto) {
  const cardProject = document.createElement("div");
  cardProject.classList.add("projeto-item");
  projectContainer.appendChild(cardProject);

  const cardImg = document.createElement("img");
  cardImg.src = projeto.url;
  cardImg.alt = projeto.name;
  cardProject.appendChild(cardImg);

  createProjectContent(cardProject, projeto);
}

function createProjectContent(cardProject, projeto) {
  const cardProjectContent = document.createElement("div");
  cardProjectContent.classList.add("projeto-item-descricao");
  cardProject.appendChild(cardProjectContent);

  createProjectDetails(cardProjectContent, projeto);
}

function createProjectDetails(cardProjectContent, projeto) {
  const projectDetails = document.createElement("div");
  cardProjectContent.appendChild(projectDetails);

  const projectTitle = document.createElement("h3");
  projectTitle.innerHTML = projeto.name;
  projectDetails.appendChild(projectTitle);

  const projectDescription = document.createElement("p");
  projectDescription.innerHTML = projeto.description;
  projectDetails.appendChild(projectDescription);

  createProjectLinks(projectDetails, projeto);
  createProjectTools(cardProjectContent, projeto);
}

function createProjectLinks(projectDetails, projeto) {
  const projectLinks = document.createElement("div");
  projectLinks.classList.add("projetos-links");
  projectDetails.appendChild(projectLinks);

  const testLink = document.createElement("a");
  testLink.innerHTML = "Testar →";
  testLink.href = projeto.test;
  testLink.target = "_blank";
  testLink.rel = "external";
  projectLinks.appendChild(testLink);

  const githubLink = document.createElement("a");
  githubLink.href = projeto.github;
  githubLink.innerHTML = "Respositório";
  githubLink.target = "_blank";
  githubLink.rel = "external";
  projectLinks.appendChild(githubLink);
}

function createProjectTools(cardProjectContent, projeto) {
  const projectTools = document.createElement("div");
  cardProjectContent.appendChild(projectTools);

  const toolsTitle = document.createElement("h4");
  toolsTitle.innerHTML = "Ferramentas";
  projectTools.appendChild(toolsTitle);

  const toolsContainer = document.createElement("div");
  toolsContainer.classList.add("projetos-tecnologias");
  projectTools.appendChild(toolsContainer);

  projeto.technologies.forEach((tool) => {
    const toolName = document.createElement("span");
    toolName.innerHTML = tool;
    toolsContainer.appendChild(toolName);
  });
}

projects.forEach((projeto) => {
  addProject(projeto);
});

if (window.outerWidth >= 600) {
  initCreateModal("normal-screen");
} else {
  initCreateModal("small-screen");
}
