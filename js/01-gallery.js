import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('div.gallery');

function createMarkupGallery(gallery){
return gallery.map(({preview, original, description }) => {
   return `
<div class="gallery__item">
   <a class="gallery__link" href="${original}">
       <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
       />
   </a>
</div>`; 
}).join('');
//return markup;
}

// step 3 add string for HTML
const markup = createMarkupGallery(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', markup)

// step 4 add Listener on gallery

galleryRef.addEventListener('click', onClickImeges);



function onClickImeges (e) {
   e.preventDefault();
   if (e.target.nodeName !== "IMG"){
    return;
   }

   const instance =  basicLightbox.create(`
   <img width="1400" height="900" src="${e.target.dataset.source}">
   `)
   instance.show();

   document.addEventListener("keydown", e =>{
   if(e.code === "Escape"){
      instance.close();
   };
   });

}







