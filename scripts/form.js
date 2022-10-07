export function initSendEmail() {
  const submitButton = document.querySelector(".submit-button");

  function sendEmail() {
    const subjectText = document.querySelector(".subject-text").value;
    const bodyText = document.querySelector(".body-text").value;

    if (subjectText !== "" && bodyText !== "") {
      window.open(
        `mailto:filipegallodev@hotmail.com?subject=${subjectText}&body=${bodyText}`
      );
    }
  }

  submitButton.addEventListener("click", () => sendEmail());
}
