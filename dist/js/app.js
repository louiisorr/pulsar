/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
// Next Project Card - Clickable //

// Next Project Card - Clickable //
document.querySelectorAll('.next-project').forEach(block => {
  block.addEventListener('click', () => {
    const link = block.querySelector('.wp-block-button__link');
    if (link) {
      window.location.href = link.href;
    }
  });
});

// Page Navigation Block - Clickable //

document.querySelectorAll('.page-navigation-block').forEach(block => {
  block.addEventListener('click', () => {
    const link = block.querySelector('a');
    if (link) {
      window.location.href = link.href;
    }
  });
});

// Page sections toggle active state on page navigation // 

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section"); // All sections with IDs
  const navBlocks = document.querySelectorAll(".page-navigation-block"); // All navigation blocks
  const pageNavigation = document.querySelector(".page-navigation"); // The navigation container

  let activeSectionId = null; // Track the currently active section

  // Observer options with no static threshold
  const observerOptions = {
    root: null,
    // Viewport as the root
    threshold: 0 // Trigger as soon as the section enters the viewport
  };

  const observer = new IntersectionObserver(entries => {
    // Calculate the section closest to the center of the viewport
    let closestEntry = null;
    let minDistance = Infinity;
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const boundingRect = entry.target.getBoundingClientRect();
        const sectionCenter = boundingRect.top + boundingRect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const distanceToCenter = Math.abs(sectionCenter - viewportCenter);
        if (distanceToCenter < minDistance) {
          minDistance = distanceToCenter;
          closestEntry = entry;
        }
      }
    });
    if (closestEntry) {
      const sectionId = closestEntry.target.getAttribute("id");

      // Update active state for the closest section
      if (sectionId !== activeSectionId) {
        activeSectionId = sectionId;
        navBlocks.forEach(block => block.classList.remove("active"));
        const targetBlock = document.querySelector(`.page-navigation-block a[href="#${sectionId}"]`)?.closest(".page-navigation-block");
        if (targetBlock) targetBlock.classList.add("active");
      }
    }
  }, observerOptions);

  // Observe each section
  sections.forEach(section => observer.observe(section));

  // Scroll listener for page-navigation visibility check
  window.addEventListener("scroll", () => {
    const pageNavDistanceFromTop = pageNavigation.getBoundingClientRect().top;
    if (pageNavDistanceFromTop > 400) {
      // Disable all active states if .page-navigation is >400px from top
      navBlocks.forEach(block => block.classList.remove("active"));
    } else {
      // Restore active state based on current section
      if (activeSectionId) {
        navBlocks.forEach(block => block.classList.remove("active"));
        const targetBlock = document.querySelector(`.page-navigation-block a[href="#${activeSectionId}"]`)?.closest(".page-navigation-block");
        if (targetBlock) targetBlock.classList.add("active");
      }
    }
  });
});

// Scroll up behaviour on header // 

document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.querySelector(".page-navigation-container");
  const navContainerInner = document.querySelector(".page-navigation");
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY) {
      // Scrolling up
      navContainer.style.top = `calc(var(--wp--custom--spacing--sticky-height) + 56px)`;
      navContainerInner.style.boxShadow = "0px 10px 15px -3px rgba(203, 203, 203, 0.10), 0px 4px 6px -4px rgba(203, 203, 203, 0.10)";
    } else {
      // Scrolling down
      navContainer.style.top = "48px";
      navContainerInner.style.boxShadow = "none";
    }
    if (window.scrollY < 100) {
      navContainer.style.top = "48px";
      navContainerInner.style.boxShadow = "none";
    }
    lastScrollY = currentScrollY;
  });
});
/******/ })()
;
//# sourceMappingURL=app.js.map