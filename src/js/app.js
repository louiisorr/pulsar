// Next Project Card - Clickable //



// Next Project Card - Clickable //
document.querySelectorAll('.next-project').forEach((block) => {
    block.addEventListener('click', () => {
        const link = block.querySelector('.wp-block-button__link');
        if (link) {
            window.location.href = link.href;
        }
    });
});

// Page Navigation Block - Clickable //

document.querySelectorAll('.page-navigation-block').forEach((block) => {
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

  // Calculate a dynamic threshold based on section height and viewport height
  const observerOptions = {
    root: null, // Viewport as the root
    threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Fine-grained thresholds
  };

  let activeSectionId = null; // Track the currently active section

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Check if a sufficient percentage of the section is in the viewport
      const sectionHeight = entry.target.offsetHeight;
      const visibleHeight = entry.intersectionRect.height;
      const viewportHeight = window.innerHeight;

      // Set a custom percentage to trigger the active state (e.g., 50% of the section visible or occupies 30% of the viewport)
      const percentageVisible = visibleHeight / sectionHeight;
      const percentageOfViewport = visibleHeight / viewportHeight;

      if (percentageVisible >= 0.5 || percentageOfViewport >= 0.3) {
        const sectionId = entry.target.getAttribute("id");

        // Update active state for the currently visible section
        activeSectionId = sectionId;
        navBlocks.forEach((block) => block.classList.remove("active"));
        const targetBlock = document.querySelector(
          `.page-navigation-block a[href="#${sectionId}"]`
        )?.closest(".page-navigation-block");
        if (targetBlock) targetBlock.classList.add("active");
      }
    });
  }, observerOptions);

  // Observe each section
  sections.forEach((section) => observer.observe(section));

  // Scroll listener for page-navigation visibility check
  window.addEventListener("scroll", () => {
    const pageNavDistanceFromTop = pageNavigation.getBoundingClientRect().top;

    if (pageNavDistanceFromTop > 400) {
      // Disable all active states if .page-navigation is >400px from top
      navBlocks.forEach((block) => block.classList.remove("active"));
    } else {
      // Restore active state based on current section
      if (activeSectionId) {
        navBlocks.forEach((block) => block.classList.remove("active"));
        const targetBlock = document.querySelector(
          `.page-navigation-block a[href="#${activeSectionId}"]`
        )?.closest(".page-navigation-block");
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
        navContainer.style.top = "24px";
        navContainerInner.style.boxShadow = "none";
      }

    if (window.scrollY < 100) {
        navContainer.style.top = "24px";
        navContainerInner.style.boxShadow = "none";
    }
  
      lastScrollY = currentScrollY;
    });
  });



