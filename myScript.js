//....Start....
//Function that get the height of the menu list
//and set the height of the dropdown menu accordingly to this height
const fullBlock = document.querySelector('.full-block');
const dropDownMenu = document.querySelector('.link-js');
const menuLink = document.querySelector('.menu__link');
const compStylesDropDownMenu = getComputedStyle(dropDownMenu);

menuLink.addEventListener("mouseenter", function() {
    const dropDownMenuHeight = compStylesDropDownMenu.getPropertyValue('height');
    fullBlock.style.height = `${dropDownMenuHeight}`;
})
//....Finish....


//....Start....
//Function that change the color of the hover effect in Networks menu depending on
//the date-network attribute
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
//....Finish....


//....Start....
//Function that expand/display the sub-markets (Greater Mtl, Greater TOR, etc,) tab for
//each main markets (Quebec, Ontario, etc.)
const mainMarketsBlock = document.querySelectorAll('.main-markets__block');
const expandSelector = document.querySelectorAll('.expand');
const mainMarketsExpanded = document.querySelectorAll('.main-markets-expanded');
const mainMarketsBlockContent = document.querySelectorAll('.main-markets__block__content');

function hideMarkets() {
    mainMarketsExpanded.forEach(mainMarketElem => mainMarketElem.style.display = 'none');
}

mainMarketsBlock.forEach((element) => {
    element.addEventListener("click", function() {
        let dataMarkets = element.getAttribute('data-markets');
        let classToToggle = ".main-markets-expanded." + dataMarkets;
        hideMarkets();

        document.querySelectorAll('.main-markets__block').forEach((item) => {
            item.classList.add("main-markets__block-expanded");
            item.classList.toggle("main-markets__block");
        })

        mainMarketsBlockContent.forEach(item => item.style.minHeight = "45px")

        expandSelector.forEach((item) => item.style.display = "none");

        document.querySelectorAll('.expand-less').forEach((expandLess) => {
            expandLess.addEventListener("click", function() {
                
                expandSelector.forEach(expand => expand.style.display = "flex");

                document.querySelectorAll('.main-markets__block-expanded').forEach((item) => {
                    item.classList.remove("main-markets__block-expanded");
                    item.classList.toggle("main-markets__block");
                })

                mainMarketsBlockContent.forEach(item => item.style.minHeight = "250px");

                hideMarkets();
            })
        })
        
        document.querySelector(classToToggle).style.display = "block";
    })
})

//....Finish....

//....Start....
//Function that change the color of the hover effect in regions gallery depending on
//the date-network attribute
const galleryImage = document.querySelectorAll('.carousel__mid__item-1__image-cards > img');
const galleryImageDiv = document.querySelectorAll('.carousel__mid__item-1__image-cards');
const propertyDisplay = document.querySelectorAll('.image-cards__property-display');

galleryImage.forEach((element) => {
    element.addEventListener("mouseenter", function() {
        const dataNetwork = element.getAttribute('data-network');
        const dataProperty = element.getAttribute('data-property');
        
        galleryImageDiv.forEach((item) => {
            switch (dataNetwork) {
                case "shopping":
                    item.style.backgroundColor = "var(--shopping-color)";
                    break;
                case "on-the-go":
                    item.style.backgroundColor = "var(--otg-color)";
                    break;
                case "fitness":
                    item.style.backgroundColor = "var(--fitness-color)";
                    break;
            }

        })

/*         propertyDisplay.forEach((item) => {
            item.innerHTML = `${dataProperty}`;
            item.style.display = "block"
        }) */

    })
})
//....Finish....

