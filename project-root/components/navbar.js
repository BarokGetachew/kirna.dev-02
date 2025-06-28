// navbar.js
document.addEventListener("DOMContentLoaded", () => {
  const navbarHTML = `
    <nav
      class="fixed w-full top-0 left-0 bg-[#1a1b2f] shadow-md backdrop-blur-md z-50 transition-all duration-300 ease-in-out"
      id="main-navbar"
    >
      <div class="max-w-6xl mx-auto px-6 md:px-16 flex items-center justify-between h-16">
        <a href="index.html" class="text-purple-400 font-bold text-xl hover:text-purple-600 transition">
          Kirna.dev
        </a>
        <ul class="hidden md:flex space-x-8 text-gray-300 font-semibold tracking-wide">
          <li><a href="index.html" class="hover:text-purple-400 transition">Home</a></li>
          <li><a href="about.html" class="hover:text-purple-400 transition">About</a></li>
          <li><a href="projects.html" class="hover:text-purple-400 transition">Projects</a></li>
          <li><a href="contact.html" class="hover:text-purple-400 transition">Contact</a></li>
        </ul>
        <!-- Mobile menu button -->
        <button id="mobile-menu-btn" class="md:hidden text-gray-300 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu, hidden by default -->
      <div id="mobile-menu" class="hidden md:hidden bg-[#1a1b2f] px-6 pt-2 pb-4 space-y-2 shadow-inner">
        <a href="index.html" class="block text-gray-300 font-semibold hover:text-purple-400 transition">Home</a>
        <a href="about.html" class="block text-gray-300 font-semibold hover:text-purple-400 transition">About</a>
        <a href="projects.html" class="block text-gray-300 font-semibold hover:text-purple-400 transition">Projects</a>
        <a href="contact.html" class="block text-gray-300 font-semibold hover:text-purple-400 transition">Contact</a>
      </div>
    </nav>
  `;

  // Inject navbar HTML
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  if (navbarPlaceholder) navbarPlaceholder.innerHTML = navbarHTML;

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Smart navbar scroll effect: shrink + shadow
  let lastScrollY = window.scrollY;
  const nav = document.getElementById("main-navbar");
  window.addEventListener("scroll", () => {
    if (!nav) return;
    if (window.scrollY > 50) {
      nav.classList.add("backdrop-blur-lg", "shadow-lg");
      nav.classList.remove("shadow-md");
    } else {
      nav.classList.remove("backdrop-blur-lg", "shadow-lg");
      nav.classList.add("shadow-md");
    }
    lastScrollY = window.scrollY;
  });
});
