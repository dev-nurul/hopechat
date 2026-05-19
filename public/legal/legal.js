/**
 * HopeChat / Hopenity - Public Legal & Privacy Policy Interactions
 * Controls: Language toggling, Active Table of Contents highlighting, and Secure form metadata generation.
 */

document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
  initTableOfContents();
  initPrivacyForm();
});

/**
 * 1. Language Switcher Logic
 * Toggles class on body and updates aria-pressed states.
 * Persists in localStorage and respects URL query parameter `?lang=...`
 */
function initLanguageSwitcher() {
  const body = document.body;
  const toggleEn = document.querySelector('[data-lang-toggle="en"]');
  const toggleBn = document.querySelector('[data-lang-toggle="bn"]');

  if (!toggleEn || !toggleBn) return;

  // Set active language
  function setLanguage(lang) {
    if (lang === "bn") {
      body.classList.remove("lang-en");
      body.classList.add("lang-bn");
      toggleEn.setAttribute("aria-pressed", "false");
      toggleBn.setAttribute("aria-pressed", "true");
    } else {
      body.classList.remove("lang-bn");
      body.classList.add("lang-en");
      toggleEn.setAttribute("aria-pressed", "true");
      toggleBn.setAttribute("aria-pressed", "false");
    }
    // Save to localStorage
    localStorage.setItem("hope_legal_lang", lang);

    // Update form hidden inputs if visible
    const langInput = document.querySelector('input[name="language_mode"]');
    if (langInput) {
      langInput.value = lang;
    }
  }

  // Event Listeners
  toggleEn.addEventListener("click", () => setLanguage("en"));
  toggleBn.addEventListener("click", () => setLanguage("bn"));

  // Check URL params first
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get("lang");
  if (langParam === "bn" || langParam === "en") {
    setLanguage(langParam);
    return;
  }

  // Check LocalStorage
  const cachedLang = localStorage.getItem("hope_legal_lang");
  if (cachedLang === "bn" || cachedLang === "en") {
    setLanguage(cachedLang);
    return;
  }

  // Default to English (set by body class "lang-en" originally)
  setLanguage("en");
}

/**
 * 2. Active Table of Contents (TOC) highlighting on scroll
 */
function initTableOfContents() {
  const tocLinks = document.querySelectorAll(".toc a");
  const sections = Array.from(tocLinks)
    .map(link => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        return document.querySelector(targetId);
      }
      return null;
    })
    .filter(section => section !== null);

  if (tocLinks.length === 0 || sections.length === 0) return;

  // Highlight active TOC item based on scroll position
  function onScroll() {
    let currentActiveSection = sections[0];
    const scrollPosition = window.scrollY + 120; // offset for sticky sidebar/navbar

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      if (section.offsetTop <= scrollPosition) {
        currentActiveSection = section;
      } else {
        break;
      }
    }

    if (currentActiveSection) {
      const activeId = `#${currentActiveSection.getAttribute("id")}`;
      tocLinks.forEach(link => {
        if (link.getAttribute("href") === activeId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  }

  // Run scroll listener
  window.addEventListener("scroll", onScroll);
  onScroll(); // Run initially to highlight the correct section

  // Smooth scroll transitions
  tocLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          window.scrollTo({
            top: targetElement.offsetTop - 80, // smooth scroll with visual padding
            behavior: "smooth"
          });
          // Update URL hash without jumping
          history.pushState(null, null, targetId);
        }
      }
    });
  });
}

/**
 * 3. Privacy Request Form submission & metadata automation
 */
function initPrivacyForm() {
  const form = document.querySelector("[data-privacy-contact-form]");
  if (!form) return;

  const statusEl = form.querySelector("[data-form-status]");
  const submitBtn = form.querySelector('button[type="submit"]');

  // Pre-populate system/context metadata
  function updateMetadata() {
    const pageUrlInput = form.querySelector('input[name="page_url"]');
    const pageTitleInput = form.querySelector('input[name="page_title"]');
    const langInput = form.querySelector('input[name="language_mode"]');
    const userAgentInput = form.querySelector('input[name="user_agent"]');
    const submittedAtInput = form.querySelector('input[name="submitted_at"]');

    if (pageUrlInput) pageUrlInput.value = window.location.href;
    if (pageTitleInput) pageTitleInput.value = document.title;
    if (langInput) langInput.value = document.body.classList.contains("lang-bn") ? "bn" : "en";
    if (userAgentInput) userAgentInput.value = navigator.userAgent;
    if (submittedAtInput) submittedAtInput.value = new Date().toISOString();
  }

  // Handle Submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    updateMetadata();

    const isBn = document.body.classList.contains("lang-bn");
    const msgSending = isBn ? "অনুরোধ পাঠানো হচ্ছে..." : "Sending request...";
    const msgSuccess = isBn 
      ? "আপনার অনুরোধ সফলভাবে পাঠানো হয়েছে! আমাদের টিম দ্রুত আপনার সাথে যোগাযোগ করবে।" 
      : "Your request was submitted successfully! Our privacy handlers will contact you soon.";
    const msgError = isBn 
      ? "দুঃখিত, অনুরোধ পাঠাতে ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।" 
      : "Error submitting request. Please try again or contact us directly at privacy@hopechat.com.";

    if (statusEl) {
      statusEl.className = "form-status";
      statusEl.textContent = msgSending;
    }

    if (submitBtn) submitBtn.disabled = true;

    // Capture form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      // Mock submit or actual API call
      // Since it's a static demo/client-side build mostly, we will mock call with a 1.2s timeout
      await new Promise((resolve) => setTimeout(resolve, 1200));

      console.log("Privacy Request Submitted:", data);

      if (statusEl) {
        statusEl.className = "form-status is-success";
        statusEl.textContent = msgSuccess;
      }
      form.reset();
    } catch (err) {
      console.error(err);
      if (statusEl) {
        statusEl.className = "form-status is-error";
        statusEl.textContent = msgError;
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });

  // Keep metadata fresh
  updateMetadata();
}
