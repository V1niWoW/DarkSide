// Exemplo de animação simples ao passar o mouse sobre o botão
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('mouseover', () => {
    ctaButton.style.transform = 'scale(1.1)';
});

ctaButton.addEventListener('mouseout', () => {
    ctaButton.style.transform = 'scale(1)';
});
