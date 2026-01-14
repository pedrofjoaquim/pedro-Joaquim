/* -----------------------------------------
   1. Destacar link ativo no menu
----------------------------------------- */
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

/* -----------------------------------------
   2. Scroll suave para âncoras internas
----------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* -----------------------------------------
   3. Fade-in ao rolar a página
----------------------------------------- */
const fadeElements = document.querySelectorAll(
  ".text-block, .project-section, .contact-wrapper, .photo-wrapper"
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));

/* -----------------------------------------
   4. Modo Escuro (Dark Mode)
----------------------------------------- */
const toggle = document.getElementById("darkModeToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.textContent = document.body.classList.contains("dark-mode")
      ? "☀️"
      : "🌙";
  });
}

/* -----------------------------------------
   5. Feedback no formulário de contato
----------------------------------------- */
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const button = form.querySelector(".submit-button");
    button.textContent = "Enviando...";
    button.disabled = true;

    setTimeout(() => {
      alert("Mensagem enviada com sucesso!");
      button.textContent = "Enviar";
      button.disabled = false;
      form.reset();
    }, 1200);
  });
}

/* -----------------------------------------
   6. Microinterações em botões e links
----------------------------------------- */
document.querySelectorAll("button, .submit-button").forEach(btn => {
  btn.addEventListener("mousedown", () => btn.classList.add("pressed"));
  btn.addEventListener("mouseup", () => btn.classList.remove("pressed"));
});

document.querySelectorAll("nav a, .social-icons a").forEach(link => {
  link.addEventListener("mouseover", () => link.classList.add("hovered"));
  link.addEventListener("mouseout", () => link.classList.remove("hovered"));
});

const imagens = [
  "pedro1.jpg",
  "pedro2.jpg",
  "pedro3.jpg",
  "pedro4.jpg",
  "pedro5.jpg",
  "pedro6.jpg",
  "pedro7.jpg",
  "pedro8.jpg",
  "pedro9.jpg",
  "pedro10.jpg",
];

const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];
document.getElementById("foto-pedro").src = imagemAleatoria;


