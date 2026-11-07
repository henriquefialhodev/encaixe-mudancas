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
  const destinationPostcode = document.querySelector("#destination-postcode");
  const originFloor = document.querySelector("#origin-floor");
  const destinationFloor = document.querySelector("#destination-floor");
  const distance = document.querySelector("#distance");
  const originLift = document.querySelector("#origin-lift");
  const destinationLift = document.querySelector("#destination-lift");

  for (let i = 0; i < siteQuoteSteps.length; i++) {
    const siteQuoteStep = siteQuoteSteps[i];
    if (i === 0) {
      siteQuoteStep.hidden = false;
    } else {
      siteQuoteStep.hidden = true;
    }
  }

  let currentStep = 0;

  // Checks one field and shows or hides its error message.
  // Returns true when the field is valid and false when it is not.
  function validateField(field) {
    const fieldError = document.querySelector("#" + field.id + "-error");
    const fieldHelp = document.querySelector("#" + field.id + "-help");
    if (field.checkValidity()) {
      field.removeAttribute("aria-invalid");
      fieldError.hidden = true;
      if (fieldHelp === null) {
        field.removeAttribute("aria-describedby");
      } else {
        field.setAttribute("aria-describedby", field.id + "-help");
      }
      return true;
    } else {
      if (fieldHelp !== null) {
        field.setAttribute(
          "aria-describedby",
          field.id + "-help " + field.id + "-error",
        );
      } else {
        field.setAttribute("aria-describedby", field.id + "-error");
      }
      field.setAttribute("aria-invalid", "true");
      fieldError.hidden = false;
      return false;
    }
  }

  // Checks a yes or no group and shows or hides its error message.
  // Returns true when an option is chosen and false when none is.
  function validateLiftField(fieldset) {
    const fieldError = document.querySelector("#" + fieldset.id + "-error");
    const firstOption = fieldset.querySelector("input[type='radio']");
    if (firstOption.checkValidity()) {
      fieldset.removeAttribute("aria-invalid");
      fieldError.hidden = true;
      fieldset.removeAttribute("aria-describedby");
      return true;
    } else {
      fieldset.setAttribute("aria-describedby", fieldset.id + "-error");
      fieldset.setAttribute("aria-invalid", "true");
      fieldError.hidden = false;
      return false;
    }
  }

  // Moves to the next step only when every checked field is valid.
  // Otherwise moves focus to the first field with an error.
  function nextStep() {
    const isOriginPostcodeValid = validateField(originPostcode);
    const isDestinationPostcodeValid = validateField(destinationPostcode);
    const isOriginFloorValid = validateField(originFloor);
    const isDestinationFloorValid = validateField(destinationFloor);
    const isDistanceValid = validateField(distance);
    const isOriginLiftValid = validateLiftField(originLift);
    const isDestinationLiftValid = validateLiftField(destinationLift);
    if (
      isOriginPostcodeValid &&
      isDestinationPostcodeValid &&
      isOriginFloorValid &&
      isDestinationFloorValid &&
      isDistanceValid &&
      isOriginLiftValid &&
      isDestinationLiftValid
    ) {
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
      if (!isOriginPostcodeValid) {
        originPostcode.focus();
      } else if (!isOriginFloorValid) {
        originFloor.focus();
      } else if (!isOriginLiftValid) {
        originLift.querySelector("input[type='radio']").focus();
      } else if (!isDestinationPostcodeValid) {
        destinationPostcode.focus();
      } else if (!isDestinationFloorValid) {
        destinationFloor.focus();
      } else if (!isDestinationLiftValid) {
        destinationLift.querySelector("input[type='radio']").focus();
      } else if (!isDistanceValid) {
        distance.focus();
      }
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
