document.addEventListener("DOMContentLoaded", () => {
    // Efeito de rolagem suave para os links do menu
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Efeito interativo nas capas das obras
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            const bookLink = card.getAttribute("data-link");
            if (bookLink) {
                const confirmRedirect = confirm("Você deseja ir para a página deste livro na Amazon?");
                if (confirmRedirect) {
                    window.open(bookLink, "_blank");
                }
            }
        });
    });

    // Animação da linha do tempo
    const timelineEvents = document.querySelectorAll(".event");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    timelineEvents.forEach(event => observer.observe(event));
});
function toggleMenu() {
    const menu = document.querySelector(".menu-list");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
