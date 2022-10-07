import { techDetails } from "./technologies.js";

export function initCreateModal(screenSize) {
  const tecnologias = document.querySelectorAll(".tecnologia-descricao");

  function createModal(index, screenSize) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.append(modal);

    createModalContent(modal, index, screenSize);
  }

  function createModalContent(modal, index, screenSize) {
    const modalContent = document.createElement("div");
    document.body.append(modalContent);

    if (screenSize === "small-screen") {
      modalContent.classList.add("modal-container-mobile");
    } else {
      modalContent.classList.add("modal-container");
    }

    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");
    modalContent.appendChild(modalHeader);

    const modalTitle = document.createElement("h4");
    modalTitle.innerHTML = techDetails[index].name;
    modalHeader.appendChild(modalTitle);

    const modalExit = document.createElement("img");
    modalExit.classList.add("modal-exit");
    modalExit.src = "../assets/img/close.png";
    modalExit.alt = "Exit";
    modalHeader.appendChild(modalExit);

    const modalDescription = document.createElement("div");
    modalDescription.innerHTML = techDetails[index].description;
    modalContent.appendChild(modalDescription);

    const descriptionSource = document.createElement("span");
    const sourceLink = document.createElement("a");
    sourceLink.innerHTML = techDetails[index].sourceName;
    sourceLink.href = techDetails[index].sourceLink;
    sourceLink.target = "external";
    sourceLink.rel = "_blank";

    descriptionSource.innerHTML = "Fonte: ";
    descriptionSource.appendChild(sourceLink);
    modalContent.appendChild(descriptionSource);

    modal.addEventListener("click", () => removeModal(modal, modalContent));
    modalExit.addEventListener("click", () => removeModal(modal, modalContent));
  }

  function removeModal(modal, modalContent) {
    modal.remove();
    modalContent.remove();
  }

  tecnologias.forEach((tech, index) => {
    const techName = tech.querySelector("h3").innerHTML;
    tech.addEventListener("click", () => createModal(index, screenSize));
  });
}
