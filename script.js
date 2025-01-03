window.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.getElementById("videoContainer");
  const skipButton = document.getElementById("skipButton");
  const introVideo = document.getElementById("introVideo");
  const introVideo1 = document.getElementById("introVideo1");
  const header = document.getElementById("navbar");

  header.style.display = "none";
  introVideo1.style.display = "none";

  const endIntro = () => {
    videoContainer.style.display = "none";
    introVideo1.style.display = "block";
    introVideo.style.overflow = "visible";
    introVideo.style.position = "relative";

    header.style.display = "block";
    document.body.style.overflow = "visible";
  };

  skipButton.addEventListener("click", endIntro);
  introVideo.addEventListener("ended", endIntro);
});

document.addEventListener("DOMContentLoaded", () => {
  const headingWrapper = document.querySelector(".heading-wrapper");
  const steps = [
    document.getElementById("step-1"),
    document.getElementById("step-2"),
    document.getElementById("step-3"),
    document.getElementById("step-4"),
  ];

  let currentStep = 0;

  steps.forEach((step) => {
    step.classList.add("hidden");
    step.style.display = "none";
  });

  const fadeOutHeadingWrapper = () => {
    setTimeout(() => {
      headingWrapper.classList.add("hidden");
      setTimeout(() => {
        headingWrapper.style.display = "none";
        showNextStep();
      }, 1000);
    }, 5000);
  };

  const showTypewriterEffect = (element, callback) => {
    element.style.display = "block";
    element.classList.remove("hidden");
    element.classList.add("visible", "typing");

    element.addEventListener("animationend", () => {
      if (callback) callback();
    });
  };

  const hideStep = (element) => {
    element.classList.remove("visible", "typing");
    element.classList.add("hidden");
    setTimeout(() => {
      element.style.display = "none";
    }, 1000);
  };

  const showNextStep = () => {
    if (currentStep > 0) {
      hideStep(steps[currentStep - 1]);
    }

    if (currentStep < steps.length) {
      showTypewriterEffect(steps[currentStep], () => {
        currentStep++;
        if (currentStep < steps.length) {
          setTimeout(showNextStep, 1000);
        }
      });
    }
  };

  fadeOutHeadingWrapper();
});
