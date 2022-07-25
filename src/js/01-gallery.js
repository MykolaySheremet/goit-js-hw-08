// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"

const listOfGallery = document.querySelector('.gallery');


const renderItemsGallery = (pictures) => galleryItems.map(({ original, preview, description }) =>
    `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`).join("");

listOfGallery.insertAdjacentHTML('afterbegin', renderItemsGallery(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    })
console.log(lightbox);
