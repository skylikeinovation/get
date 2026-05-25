document.addEventListener("DOMContentLoaded", () => {
    const downloadButtons = document.querySelectorAll(".btn-download");

    downloadButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const btnText = btn.querySelector(".btn-text");
            const originalText = btnText.textContent;

            // Ativa o feedback visual dinâmico
            btn.classList.add("loading");
            btnText.textContent = "Baixando arquivo...";

            // Restaura o estado normal do botão específico após 4 segundos
            setTimeout(() => {
                btn.classList.remove("loading");
                btnText.textContent = originalText;
            }, 4000);
        });
    });
});