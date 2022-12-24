const fullBlock = document.querySelector('.full-block');
const dropDownMenu = document.querySelector('.link-js');
const menuLink = document.querySelector('.menu__link')
const compStylesDropDownMenu = getComputedStyle(dropDownMenu);

menuLink.addEventListener("mouseenter", function() {
    const dropDownMenuHeight = compStylesDropDownMenu.getPropertyValue('height');
    fullBlock.style.height = `${dropDownMenuHeight}`;
})


const dropdownElements = document.querySelectorAll('.dropdown__elements');

dropdownElements.forEach((element) => {
    element.addEventListener("mouseenter", function() {
        const dropDownElementsNetwork = element.getAttribute('data-network');
        switch (dropDownElementsNetwork) {
            case "shopping":
                element.style.borderLeftColor = "var(--shopping-color)";
                break;
            case "on-the-go":
                element.style.borderLeftColor = "var(--otg-color)";
                break;
            case "fitness":
                element.style.borderLeftColor = "var(--fitness-color)";
                break;
            case "mobile":
                element.style.borderLeftColor = "var(--mobile-color)";
                break;
            case "speed":
                element.style.borderLeftColor = "var(--shopping-color)";

        }
    })
})


