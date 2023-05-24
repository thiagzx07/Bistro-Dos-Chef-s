function menu() {
    var boxmenu = document.getElementById("boxMenu");
    boxmenu.classList.toggle("aparece");
    console.log("aqui");
}

function acceptCookies() {
    // Aqui você pode adicionar código para salvar a preferência do usuário em relação aos cookies
    // Por exemplo, usando cookies ou localStorage

    // Adiciona a classe 'hidden' para aplicar a animação de fade-out
    var cookieNotification = document.getElementById('cookie-notification');
    cookieNotification.classList.add('hidden');

    // Remove a notificação de cookie após a conclusão da animação
    setTimeout(function() {
        cookieNotification.parentNode.removeChild(cookieNotification);
    }, 500); // Tempo correspondente à duração da animação (em milissegundos)
}