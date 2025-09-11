document.getElementById("contact-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    let form = e.target;
    let data = new FormData(form);

    try {
        let response = await fetch("https://formspree.io/f/myzdvgoj", {
            method: "POST",
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            showMessage("Mensagem enviada com sucesso!", "success");
            form.reset();
        } else {
            showMessage("Ocorreu um erro. Tente novamente.", "error");
        }
    } catch (error) {
        showMessage("⚠️ Falha de conexão.", "error");
    }
});

function showMessage(text, type) {
    let messageBox = document.getElementById("form-message");
    messageBox.textContent = text;

    messageBox.classList.remove("hidden", "error");
    if (type === "error") messageBox.classList.add("error");

    messageBox.classList.add("show");

    setTimeout(() => {
        messageBox.classList.remove("show");
    }, 3000);
}
