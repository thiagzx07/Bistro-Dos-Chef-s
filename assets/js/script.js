function menu() {
    var boxmenu = document.getElementById("boxMenu");
    boxmenu.classList.toggle("aparece");
}

function acceptCookies() {
    // Salvar a preferência do usuário de aceitar os cookies
    localStorage.setItem('cookiesAccepted', 'true');

    // Remover a notificação de cookie
    var cookieNotification = document.querySelector('.cookie-notification');
    cookieNotification.style.display = 'none';
}

// Verificar se o usuário já aceitou os cookies anteriormente
window.addEventListener('load', function() {
    var cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted) {
        var cookieNotification = document.querySelector('.cookie-notification');
        cookieNotification.style.display = 'none';
    }
});
