function initNavTab() {
    const tabMenu = document.querySelectorAll('.js-tabMenu li');
    const tabContent = document.querySelectorAll('.js-tabContent section');
    const activeClass = 'active';

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add(activeClass);

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove(activeClass);
            });

            tabContent[index].classList.add(activeClass);
        }

        tabMenu.forEach((li, index) => {
            li.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}
initNavTab();

//
function initAccordionList() {
    const accordionTermo = document.querySelectorAll('.js-accordion dt');
    const accordionDesc = document.querySelectorAll('.js-accordion dd');
    const activeClass = 'active';

    if (accordionTermo.length && accordionDesc.length) {
        accordionDesc[0].classList.add(activeClass)

        function activeAccordion(index) {
            accordionDesc[index].classList.toggle(activeClass);
        }

        accordionTermo.forEach((dt, index) => {
            dt.addEventListener('click', () => {
                activeAccordion(index);
            });
        });
    }
}
initAccordionList();
