function updateTime() {
    const now = new Date();

    // Formatação do Relógio (ex: 16:30)
    const clockOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
    const clockString = now.toLocaleTimeString('pt-BR', clockOptions);

    // Formatação da Data (ex: 21 de agosto de 2025)
    const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const dateString = now.toLocaleDateString('pt-BR', dateOptions);

    // Atualiza os elementos no HTML
    document.getElementById('clock').textContent = clockString;
    document.getElementById('date').textContent = dateString;
}

// Roda a função uma vez para carregar o tempo imediatamente
updateTime();

// Atualiza a cada segundo
setInterval(updateTime, 1000);
