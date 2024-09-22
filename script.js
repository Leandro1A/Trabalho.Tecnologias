document.addEventListener('DOMContentLoaded', function() {
    // Para a página de prática
    if (window.location.pathname === '/practice.html') {
        const urlParams = new URLSearchParams(window.location.search);
        const language = urlParams.get('language');
        document.getElementById('language-title').textContent = `Prática de ${language}`;

        // Configuração de um exercício simples
        const sentences = {
            'Português': 'Ee tenho um ______.',
        };

        const correctAnswers = {
            'Português': 'Eu tenho um ______.',
            
        };

        document.getElementById('sentence').textContent = sentences[language];
        
        document.getElementById('submit-answer').addEventListener('click', function() {
            const userAnswer = document.getElementById('answer').value;
            const feedback = document.getElementById('feedback');
            if (userAnswer === correctAnswers[language]) {
                feedback.textContent = 'Correto!';
                feedback.style.color = 'green';
            } else {
                feedback.textContent = 'Incorreto. Tente novamente.';
                feedback.style.color = 'red';
            }
        });
    }
});