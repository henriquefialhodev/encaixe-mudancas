// Shows only the first step and hides the others.
// JavaScript hides them, so without JavaScript all four steps stay visible.
function initSteps() {
  const siteQuoteSteps = document.querySelectorAll(".site-quote-step");
  const siteQuoteSummary = document.querySelector(".site-quote-order-summary");
  const siteQuoteBtnNext = document.querySelector(".site-quote-btn-next");
  const siteQuoteBtnPrev = document.querySelector(".site-quote-btn-prev");
  const siteQuoteBtnSubmit = document.querySelector(".site-quote-btn-submit");
  const siteQuoteStepsList = document.querySelectorAll(".site-quote-steps li");
  const siteQuoteStepLabel = document.querySelector(".site-quote-step-label");
  const siteQuoteStepHiddenLabel = document.querySelector(
    ".site-quote-step-hidden-label",
  );
  const originPostcode = document.querySelector("#origin-postcode");
  const originPostcodeError = document.querySelector("#origin-postcode-error");

  for (let i = 0; i < siteQuoteSteps.length; i++) {
    const siteQuoteStep = siteQuoteSteps[i];
    if (i === 0) {
      siteQuoteStep.hidden = false;
    } else {
      siteQuoteStep.hidden = true;
    }
  }

  let currentStep = 0;
  // Moves to the next step only when the origin postcode is valid.
  // Otherwise shows its error message and moves focus to the field.
  function nextStep() {
    if (originPostcode.checkValidity()) {
      originPostcode.removeAttribute("aria-invalid");
      originPostcodeError.hidden = true;
      originPostcode.setAttribute("aria-describedby", "origin-postcode-help");
      if (currentStep < siteQuoteSteps.length - 1) {
        siteQuoteSteps[currentStep].hidden = true;
        currentStep++;
        siteQuoteSteps[currentStep].hidden = false;
      }
      togglePrevBtn();
      updateFinalStep();
      toggleStepsList();
      updateStep();
      focusStepHeading();
    } else {
      originPostcode.setAttribute("aria-invalid", "true");
      originPostcodeError.hidden = false;
      originPostcode.setAttribute(
        "aria-describedby",
        "origin-postcode-help origin-postcode-error",
      );
      originPostcode.focus();
    }
  }
  siteQuoteBtnNext.addEventListener("click", nextStep);

  // Hides the current step and shows the previous one. Stops at the first step.
  function prevStep() {
    if (currentStep > 0) {
      siteQuoteSteps[currentStep].hidden = true;
      currentStep--;
      siteQuoteSteps[currentStep].hidden = false;
    }
    togglePrevBtn();
    updateFinalStep();
    toggleStepsList();
    updateStep();
    focusStepHeading();
  }
  siteQuoteBtnPrev.addEventListener("click", prevStep);

  // Hides the previous button on the first step and shows it on the others.
  function togglePrevBtn() {
    if (currentStep > 0) {
      siteQuoteBtnPrev.hidden = false;
    } else {
      siteQuoteBtnPrev.hidden = true;
    }
  }
  togglePrevBtn();

  // On the last step, the submit button replaces the next button and the order summary appears.
  function updateFinalStep() {
    if (currentStep >= siteQuoteSteps.length - 1) {
      siteQuoteBtnSubmit.hidden = false;
      siteQuoteBtnSubmit.disabled = false;
      siteQuoteSummary.hidden = false;
      siteQuoteBtnNext.hidden = true;
    } else {
      siteQuoteBtnSubmit.hidden = true;
      siteQuoteBtnSubmit.disabled = true;
      siteQuoteSummary.hidden = true;
      siteQuoteBtnNext.hidden = false;
    }
  }
  updateFinalStep();

  // Marks the current step with aria-current and the steps before it with is-completed.
  // The CSS reads both to style each step.
  function toggleStepsList() {
    for (let i = 0; i < siteQuoteStepsList.length; i++) {
      const siteQuoteStepItemList = siteQuoteStepsList[i];
      if (i === currentStep) {
        siteQuoteStepItemList.setAttribute("aria-current", "step");
      } else {
        siteQuoteStepItemList.removeAttribute("aria-current");
      }
      if (i < currentStep) {
        siteQuoteStepItemList.classList.add("is-completed");
      } else {
        siteQuoteStepItemList.classList.remove("is-completed");
      }
    }
  }
  toggleStepsList();

  // Updates the step text, both the visible label and the one for screen readers.
  function updateStep() {
    const stepNumber = currentStep + 1;
    siteQuoteStepLabel.textContent = "Passo 0" + stepNumber + " / 04";
    siteQuoteStepHiddenLabel.textContent = "Passo " + stepNumber + " de 4";
  }
  updateStep();

  // Moves focus to the heading of the new step, so screen readers announce it
  // and the next Tab goes into that step.
  function focusStepHeading() {
    const currentStepCard = siteQuoteSteps[currentStep];
    const stepHeading = currentStepCard.querySelector("h2");
    stepHeading.focus();
  }
}

initSteps();
