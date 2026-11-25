let dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
let dropdownMenus = document.querySelectorAll('.dropdown-menu');

for (let i = 0; i < dropdownTriggers.length; i++) {
    const trigger = dropdownTriggers[i];
    const menu = dropdownMenus[i]
    let text = trigger.firstElementChild.innerHTML;
    if (menu.length <= 1) {
        break
    }

    trigger.addEventListener('click', (e) => {

        if (!trigger.classList.contains('active')) {
            closeAllMenus()
            trigger.firstElementChild.innerHTML = 'x'
            menu.classList.add('active');
            trigger.classList.add('active');
        } else {
            trigger.firstElementChild.innerHTML = text;
            menu.classList.remove('active');
            trigger.classList.remove('active');
        }
    })  
}

function closeAllMenus() {
    dropdownMenus.forEach(menu => {
        menu.classList.remove('active');
    })
    dropdownTriggers.forEach(trigger => {
        trigger.firstElementChild.innerHTML = trigger.firstElementChild.dataset.name;
        trigger.classList.remove('active');
    })
    
}

document.addEventListener('click', (e) => {
    for (let i = 0; i < dropdownTriggers.length; i++) {
        const trigger = dropdownTriggers[i];
        const menu = dropdownMenus[i];

        if (
            trigger.classList.contains('active') &&
            !trigger.contains(e.target) &&
            !menu.contains(e.target)
        ) {
            closeAllMenus()
        }
    }
});
