// Inicializa a navegação por tab da seção Animais
function initNavTab() {
    // Seleciona todos os itens dos animais e das descrições
    const tabMenu = document.querySelectorAll('.js-tabMenu li');
    const tabContent = document.querySelectorAll('.js-tabContent section');

    // Constante para determinar a classe de ativo
    const activeClass = 'active';

    // Executa apenas se houver os itens de animais e as descrições
    if (tabMenu.length && tabContent.length) {
        // Primeiro item começa ativo
        tabContent[0].classList.add(activeClass);

        // Altera a classe de ativo pelo index
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove(activeClass);
            });

            tabContent[index].classList.add(activeClass);
        }

        // Adiciona evento de clique em cada item de animais
        tabMenu.forEach((li, index) => {
            li.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}
initNavTab();

// Inicializa o accordion da seção
function initAccordionList() {
    // Seleciona todos os títulos e descrições do accordion
    const accordionTermo = document.querySelectorAll('.js-accordion dt');
    const accordionDesc = document.querySelectorAll('.js-accordion dd');
    const activeClass = 'active';

    // Executa apenas se houver dt e dd
    if (accordionTermo.length && accordionDesc.length) {
        // Primeiro item começa aberto
        accordionDesc[0].classList.add(activeClass);

        // Abre ou fecha o conteúdo pelo índice
        function activeAccordion(index) {
            accordionDesc[index].classList.toggle(activeClass);
        }

        // Adiciona evento de clique em cada dt
        accordionTermo.forEach((dt, index) => {
            dt.addEventListener('click', () => {
                activeAccordion(index);
            });
        });
    }
}
initAccordionList();

// Inicializa o scroll suave para links internos do menu
function initScrollSuave() {
    // Seleciona links que possuem âncoras (#)
    // dentro do menu com classe .js-navMenu
    const linksInternos = document.querySelectorAll('.js-navMenu a[href^="#"]');

    // Executa apenas se houver "linksInternos"
    if (linksInternos) {
        function scrollToSection(event) {
            // Impede o comportamento padrão do link
            event.preventDefault();

            // Obtém o valor do href do link clicado
            const href = event.currentTarget.getAttribute('href');

            // Seleciona a seção correspondente ao href
            const section = document.querySelector(href);

            // Realiza scroll suave até a seção
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            // Alternativa usando scrollTo()
            // Utilizada quando é necessário maior controle
            // da posição do scroll
            /*
            const topo = section.offsetTop;

            window.scrollTo({
                top: topo,
                behavior: 'smooth',
            });
            */
        }

        // Adiciona evento de clique em cada link interno
        linksInternos.forEach((link) => {
            link.addEventListener('click', scrollToSection);
        });
    }
}
initScrollSuave();
