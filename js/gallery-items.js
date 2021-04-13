import gallery from "./gallery-items.js";
const KEYCODE_ESC = 27;


const galleryImages = document.querySelector('.js-gallery')
const lightbox = document.querySelector('.lightbox');
const lightboxContent = document.querySelector('.lightbox__content');
const lightboxImg = document.querySelector('.lightbox__image');
const lightboxBtn = document.querySelector('.lightbox__button');
console.log(galleryImages);

const GaleryItem = createGaleryItems(gallery)
galleryImages.insertAdjacentHTML('afterbegin', GaleryItem)

function createGaleryItems(gallery) {
  return gallery.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
    class = "gallery__image"
      src = "${preview}"
      data-source = "${original}"
      alt = "${description}"
    />
  </a>
</li>
    
    `
  }).join('')
}

const handleClick = e => {
    
    e.preventDefault();
    const data = e.target.dataset.source;
    const image = lightboxImg.cloneNode(false);
    image.setAttribute("src", data);
    image.setAttribute("alt", e.target.alt);
    lightboxContent.innerHTML = "";
    lightboxContent.append(image);
    lightbox.classList.add("is-open");
    
};
const closeHandler = () => {
    lightbox.classList.remove("is-open");
};

const handleKeyup = e => {
    if (e.keyCode == KEYCODE_ESC) {
        console.log("key ESC pressed");
        closeHandler();
    }
};

const contentClickHandler = e => {
    if (e.target !== e.currentTarget) {
        return;
    }

    closeHandler();
};

galleryImages.addEventListener("click", handleClick);
lightboxBtn.addEventListener("click", closeHandler);
window.addEventListener("keyup", handleKeyup);
lightboxContent.addEventListener("click", contentClickHandler);
