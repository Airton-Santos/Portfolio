window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-8S7C1HMNSB');

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault(); // evita reload da página
      const targetId = link.getAttribute("data-section");

      // esconde todas as sections
      sections.forEach(sec => sec.style.display = "none");

      // mostra a escolhida
      document.getElementById(targetId).style.display = "block";
    });
  });
});
