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
//Gallery images variables and functions on market-regions page
let properties = [
    {
        "name" : "Carrefour Industriel Alliance",
        "network" : "shopping",
        "imageSrc" : "digital-spectacular-CIA-2.jpg",
        "altAtt" : "digital advertising screen at Carrefour Industriel Alliance",
        "page" : "1",
        "product" : "Shopping LED Spectacular",
        "category" : "digital",
        "id" : "1",
        "description" : "We now offer several Spectacular products using LED technology. Located in areas with high potential, these units will allow you to capture all the attention by displaying your colors."
    },
    {
        "name" : "Shell Service Station",
        "network" : "otg",
        "imageSrc" : "station-service-loto-quebec.jpg",
        "altAtt" : "digital advertising screen at service station",
        "page" : "1",
        "product" : "Outdoor screens with sound",
        "category" : "digital",
        "id" : "2",
        "description" : "We now offer several Spectacular products using LED technology. Located in areas with high potential, these units will allow you to capture all the attention by displaying your colors."
    },
    {
        "name" : "Galerie d'Anjou",
        "network" : "shopping",
        "imageSrc" : "Digital - Horizontal - Galerie d'Anjou.jpg",
        "altAtt" : "digital advertising screen at Galerie d'Anjou",
        "page" : "1",
        "product" : "Shopping Horizontal",
        "category" : "digital",
        "id" : "3",
        "description" : "We now offer several Spectacular products using LED technology. Located in areas with high potential, these units will allow you to capture all the attention by displaying your colors."
    },
    {
        "name" : "Complexe Desjardins",
        "network" : "shopping",
        "imageSrc" : "Complex Desjardins-DV.jpg",
        "altAtt" : "digital advertising screen at Complexe Desjardins",
        "page" : "1",
        "product" : "Shopping Vertical",
        "category" : "digital",
        "id" : "4",
        "description" : "We now offer several Spectacular products using LED technology. Located in areas with high potential, these units will allow you to capture all the attention by displaying your colors."
    },
    {
        "name" : "Four Seasons",
        "network" : "shopping",
        "imageSrc" : "four-season-backlit.jpg",
        "altAtt" : "Backlit advertising pannel at Four Season",
        "page" : "1",
        "product" : "Shopping Backlit poster",
        "category" : "specialty",
        "id" : "5",
        "description" : "We now offer several Spectacular products using LED technology. Located in areas with high potential, these units will allow you to capture all the attention by displaying your colors."
    },
    {
        "name" : "Convenience Store",
        "network" : "otg",
        "imageSrc" : "c-store.jpg",
        "altAtt" : "digital advertising screen in convenience store",
        "page" : "1",
        "product" : "Indoor Horizontal",
        "category" : "digital",
        "id" : "6",
        "description" : "We now offer several Spectacular products using LED technology. Located in areas with high potential, these units will allow you to capture all the attention by displaying your colors."
    },
    {
        "name" : "CF Carrefour Laval",
        "network" : "shopping",
        "imageSrc" : "Dominance - CF Carrefour Laval.jpg",
        "altAtt" : "high impact advertising at Carrefour Laval",
        "page" : "1",
        "product" : "Shopping Entrance Dominance",
        "category" : "specialty",
        "id" : "7",
        "description" : "We now offer several Spectacular products using LED technology. Located in areas with high potential, these units will allow you to capture all the attention by displaying your colors."
    },
    {
        "name" : "Nautilus Plus Îles-des-Soeurs",
        "network" : "fitness",
        "imageSrc" : "gym-digital-horizontal-nautilus.jpg",
        "altAtt" : "digital advertising screen in gym Nautilus",
        "page" : "1",
        "product" : "Fitness Horizontal",
        "category" : "digital",
        "id" : "8",
        "description" : "We now offer several Spectacular products using LED technology. Located in areas with high potential, these units will allow you to capture all the attention by displaying your colors."
    },
    {
        "name" : "Halifax Shopping Centre",
        "network" : "shopping",
        "imageSrc" : "halifax-shopping-centre-skechers.jpg",
        "altAtt" : "High impact advertising at Halifax Shopping Centre",
        "page" : "1",
        "product" : "Shopping Entrance Dominance",
        "category" : "specialty",
        "id" : "9",
        "description" : "We now offer several Spectacular products using LED technology. Located in areas with high potential, these units will allow you to capture all the attention by displaying your colors."
    },
    {
        "name" : "CF Fairview Mall",
        "network" : "shopping",
        "imageSrc" : "shopping-elevator-wrap-fairview-mall.JPG",
        "altAtt" : "High impact advertising in Fairview Mall",
        "page" : "2",
        "product" : "Shopping Elevator wrap",
        "category" : "specialty",
        "id" : "10",
        "description" : "We now offer several Spectacular products using LED technology. Located in areas with high potential, these units will allow you to capture all the attention by displaying your colors."
    },
    {
        "name" : "Nautilus Plus Ville-Marie",
        "network" : "fitness",
        "imageSrc" : "fitness-nautilus-ville-marie.jpg",
        "altAtt" : "digital advertising screen in gym Nautilus Ville-Marie",
        "page" : "2",
        "product" : "Fitness Horizontal",
        "category" : "digital",
        "id" : "11",
        "description" : "We now offer several Spectacular products using LED technology. Located in areas with high potential, these units will allow you to capture all the attention by displaying your colors."
    },
    {
        "name" : "Alexis Nihon",
        "network" : "shopping",
        "imageSrc" : "digital-vertical-alexis-nihon.jpg",
        "altAtt" : "digital advertising screen in Alexis Nihon",
        "page" : "2",
        "product" : "Shopping Vertical",
        "category" : "digital",
        "id" : "12",
        "description" : "We now offer several Spectacular products using LED technology. Located in areas with high potential, these units will allow you to capture all the attention by displaying your colors."
    },
    {
        "name" : "Petro-Canada Convenience Store",
        "network" : "otg",
        "imageSrc" : "otg-petro-canada-depaneur.jpg",
        "altAtt" : "digital advertising screen in Petro-Canada convenience store",
        "page" : "2",
        "product" : "Indoor Horizontal",
        "category" : "digital",
        "id" : "13",
        "description" : "We now offer several Spectacular products using LED technology. Located in areas with high potential, these units will allow you to capture all the attention by displaying your colors."
    },
    {
        "name" : "Georgian Mall",
        "network" : "shopping",
        "imageSrc" : "shopping-mall-poster-georgian-mall.jpg",
        "altAtt" : "backlit poster in Georgian Mall",
        "page" : "2",
        "product" : "Shopping Backlit poster",
        "category" : "poster",
        "id" : "14",
        "description" : "We now offer several Spectacular products using LED technology. Located in areas with high potential, these units will allow you to capture all the attention by displaying your colors."
    },
    {
        "name" : "Nautilus Plus Îles-des-Soeurs",
        "network" : "fitness",
        "imageSrc" : "fitness-nautilus-ile-des-soeurs.jpg",
        "altAtt" : "digital advertising screen in Nautilus ile-des-soeurs",
        "page" : "2",
        "product" : "Fitness Vertical",
        "category" : "digital",
        "id" : "15",
        "description" : "We now offer several Spectacular products using LED technology. Located in areas with high potential, these units will allow you to capture all the attention by displaying your colors."
    },
    {
        "name" : "Place Vertu",
        "network" : "shopping",
        "imageSrc" : "shopping-banner-place-vertu.JPG",
        "altAtt" : "advertising banner at Place Vertu",
        "page" : "2",
        "product" : "Shopping Banner",
        "category" : "banner",
        "id" : "16",
        "description" : "We now offer several Spectacular products using LED technology. Located in areas with high potential, these units will allow you to capture all the attention by displaying your colors."
    },
    {
        "name" : "Shell Service Station",
        "network" : "otg",
        "imageSrc" : "otg-shell-night-station-service.jpg",
        "altAtt" : "digital advertising screen at service station",
        "page" : "2",
        "product" : "Outdoor screens with sound",
        "category" : "digital",
        "id" : "17",
        "description" : "We now offer several Spectacular products using LED technology. Located in areas with high potential, these units will allow you to capture all the attention by displaying your colors."
    },
    {
        "name" : "Shell Service Station",
        "network" : "otg",
        "imageSrc" : "c-store-vertical-screen.jpg",
        "altAtt" : "digital advertising screen at service station",
        "page" : "2",
        "product" : "Outdoor Vertical",
        "category" : "digital",
        "id" : "18",
        "description" : "We now offer several Spectacular products using LED technology. Located in areas with high potential, these units will allow you to capture all the attention by displaying your colors."
    }
];


const carouselItemOne = document.querySelector('.carousel__mid__item-1');

//Function that generate the gallery of images
function genereteGalleryOfImages(pageNumber) {
    let div;
    let img;
    let property;
    let imagesGaleryCount = 9;

    clearBox();
    addPageNumber();
    hideMap();

    let displayProperties = properties.filter(element => element.page == pageNumber);
    
    imagesGaleryCount = (displayProperties.length < imagesGaleryCount) ? displayProperties.length : imagesGaleryCount;  

    for(let i = 0; i < imagesGaleryCount; i++) {
        property = displayProperties[i];

        div = document.createElement('div');
        div.className = "carousel__mid__item-1__image-cards";
        div.dataset.property = property.name;
        carouselItemOne.appendChild(div);

        img = document.createElement('img');
        img.dataset.network = property.network;
        img.src = `images/${property.imageSrc}`;
        img.alt = property.altAtt;
        div.appendChild(img);
    }

    colorHoverImages();
};

function clearBox() {
    carouselItemOne.innerHTML = "";
}

//Function that change pages of the gallery images
const galleryPageNumberLi = document.querySelectorAll('.carousel__bottom__page-number > li');

galleryPageNumberLi.forEach((element) => {
    element.addEventListener('click', function() {
        const pageNumber = element.getAttribute("data-page");
        genereteGalleryOfImages(pageNumber);
    })
})

//function that display gallery when clicking gallery link
const galleryLink = document.querySelector('#gallery-link');
function generateGalleryLink() {
    galleryLink.addEventListener('click', function() {
        genereteGalleryOfImages(1);
    })
}

//function that display map when clicking map link
const mapLink = document.querySelector('#map-link');
const carouselMap = document.querySelector('.carousel__mid__item-2__map');
const carouselPageNumber = document.querySelector('.carousel__bottom__page-number');

mapLink.addEventListener('click', function() {
    clearBox();
    hidePageNumber();
    carouselMap.classList.add("static");
})

function hidePageNumber() {
    carouselPageNumber.style.display = "none";
}

function addPageNumber() {
    carouselPageNumber.style.display = "flex";
}

function hideMap() {
    carouselMap.classList.remove("static");
}


//Function that change the color of the hover effect in regions gallery depending on
//the date-network attribute
function colorHoverImages() {
    const galleryImage = document.querySelectorAll('.carousel__mid__item-1__image-cards > img');
    const galleryImageDiv = document.querySelectorAll('.carousel__mid__item-1__image-cards');

    galleryImage.forEach((element) => {
        element.addEventListener("mouseenter", function() {
            const dataNetwork = element.getAttribute('data-network');
            
            galleryImageDiv.forEach((item) => {
                switch (dataNetwork) {
                    case "shopping":
                        item.style.backgroundColor = "var(--shopping-color)";
                        break;
                    case "otg":
                        item.style.backgroundColor = "var(--otg-color)";
                        break;
                    case "fitness":
                        item.style.backgroundColor = "var(--fitness-color)";
                        break;
                }
            })
        })
    })
};
//....Finish....

function openMap() {
    const contactUsMap = document.querySelector('.contact-us-map');
    contactUsMap.classList.toggle("show")

}
