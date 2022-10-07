import { initCreateModal } from "./scripts/techModal.js";
import { initSendEmail } from "./scripts/form.js";
import { initCreateProject } from "./scripts/script.js";

initCreateProject();

if (window.outerWidth >= 600) {
  initCreateModal("normal-screen");
} else {
  initCreateModal("small-screen");
}

initSendEmail();
