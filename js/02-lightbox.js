import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('ul.gallery');

function createMarkupGallery(gallery){
    return gallery.map(({preview, original, description }) => {
       return `
       <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
       </a>
    ` 
    }).join('');
    //return markup;
    }

const markup = createMarkupGallery(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', markup);

galleryRef.addEventListener('click', linkBan);

function linkBan (e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG"){
     return;
  }
 }

 var lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt',captionDelay:250});











console.log(galleryItems);
