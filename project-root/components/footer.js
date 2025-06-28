// footer.js
document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
    <footer class="bg-[#1a1b2f] text-gray-400 text-center py-6 mt-12 shadow-inner select-none">
      <div class="max-w-6xl mx-auto px-6 md:px-16">
        <p class="text-sm">© 2025 Kirna.dev — Placeholder for now!.</p>
      </div>
    </footer>
  `;
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;
});
