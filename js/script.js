document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const botao = document.querySelector("button");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if ([...form.elements].some(input => input.value.trim() === "")) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        setTimeout(() => {
            form.reset();
            botao.innerText = "Enviar";
            botao.style.backgroundColor = "#2563eb";
        }, 2000);
    });
});