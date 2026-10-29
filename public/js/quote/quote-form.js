// Shows only the first step and hides the others.
// JavaScript hides them, so without JavaScript all four steps stay visible.
function initSteps() {
  const siteQuoteSteps = document.querySelectorAll(".site-quote-step");

  for (let i = 0; i < siteQuoteSteps.length; i++) {
    const siteQuoteStep = siteQuoteSteps[i];
    if (i === 0) {
      siteQuoteStep.hidden = false;
    } else {
      siteQuoteStep.hidden = true;
    }
  }
}

initSteps();
