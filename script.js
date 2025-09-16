/* === CÓDIGO DO MENU (JÁ EXISTE) === */
const menuToggleButton = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggleButton.addEventListener('click', () => {
    navList.classList.toggle('is-active');
    const isExpanded = navList.classList.contains('is-active');
    menuToggleButton.setAttribute('aria-expanded', isExpanded);
});

/* === CÓDIGO DE EXPANSÃO DE PROJETOS (VERSÃO TELA CHEIA) === */

const expandTriggers = document.querySelectorAll('[data-expand-trigger]');
const pageOverlay = document.getElementById('page-overlay');

expandTriggers.forEach(trigger => {
    trigger.addEventListener('click', (event) => {
        event.preventDefault();
        const targetCard = trigger.closest('.projeto-card');
        if (!targetCard) return;

        // Adiciona a classe para expandir o card e mostrar o overlay
        targetCard.classList.add('is-expanded');
        pageOverlay.classList.add('is-visible');
        // Trava o scroll do body
        document.body.style.overflow = 'hidden';
    });
});

// Função para fechar o card
function closeExpandedCard() {
    const expandedCard = document.querySelector('.projeto-card.is-expanded');
    if (expandedCard) {
        expandedCard.classList.remove('is-expanded');
        pageOverlay.classList.remove('is-visible');
        // Liberta o scroll do body
        document.body.style.overflow = '';
    }
}

// Clica no overlay para fechar
pageOverlay.addEventListener('click', closeExpandedCard);

// Futuramente, podemos adicionar um botão "Fechar" que também chame closeExpandedCard()

