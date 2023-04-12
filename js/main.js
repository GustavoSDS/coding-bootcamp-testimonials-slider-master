'use strict';
/* card containers */
const DETAILS = document.querySelector("#details");
const IMAGE = document.querySelector("#image");
const TEXT = document.querySelector("#text");
const NAME = document.querySelector("#name");
const PROFESSION = document.querySelector("#profession");

/* buttons next and prev */
const BTNEXT = document.querySelector("#button-next");
const BTNPREV = document.querySelector("#button-prev");

/* icons buttons next and prev */
const ICONEXT = document.querySelector("#icon-next");
const ICONPREV = document.querySelector("#icon-prev");

fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        addDatatoCard(data[1].image, data[1].text, data[1].name, data[1].profession);

        BTNEXT.addEventListener('click', () => {
            addDatatoCard(data[0].image, data[0].text, data[0].name, data[0].profession);
            ICONPREV.src = '../images/icon-prev-hover.svg'; 
            ICONEXT.src = '../images/icon-next.svg'; 
        })
        BTNPREV.addEventListener('click', () => {
            addDatatoCard(data[1].image, data[1].text, data[1].name, data[1].profession);
            ICONEXT.src = '../images/icon-next-hover.svg'; 
            ICONPREV.src = '../images/icon-prev.svg'; 
        })

    })
    .catch(error => console.error(error));

function addDatatoCard(image, text, name, profession) {
    IMAGE.style.backgroundImage = `url(${image})`;
    TEXT.innerHTML = `${text}`;
    NAME.innerHTML = `${name}`;
    PROFESSION.innerHTML = `${profession}`;
}