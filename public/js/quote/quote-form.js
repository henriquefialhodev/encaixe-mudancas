// Shows only the first step and hides the others.
// JavaScript hides them, so without JavaScript all four steps stay visible.
function initSteps() {
  const siteQuoteSteps = document.querySelectorAll(".site-quote-step");
  const siteQuoteSummary = document.querySelector(".site-quote-order-summary");
  const siteQuoteBtnNext = document.querySelector(".site-quote-btn-next");
  const siteQuoteBtnPrev = document.querySelector(".site-quote-btn-prev");
  const siteQuoteBtnSubmit = document.querySelector(".site-quote-btn-submit");

  for (let i = 0; i < siteQuoteSteps.length; i++) {
    const siteQuoteStep = siteQuoteSteps[i];
    if (i === 0) {
      siteQuoteStep.hidden = false;
    } else {
      siteQuoteStep.hidden = true;
    }
  }
  siteQuoteSummary.hidden = true;

  let currentStep = 0;
  // Hides the current step and shows the next one. Stops at the last step.
  function nextStep() {
    if (currentStep < siteQuoteSteps.length - 1) {
      siteQuoteSteps[currentStep].hidden = true;
      currentStep++;
      siteQuoteSteps[currentStep].hidden = false;
    }
    togglePrevBtn();
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
}

initSteps();
