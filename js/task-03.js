const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

///////////вариант 1///////////

const makeList = images => {
  const {url,  alt} = images;
  return `
<li>
   <img src = '${url}' alt = '${alt}' width = 320 height = 200>

</li>
  `;

};


const makeListImages = images.map(makeList).join('')

const gallery = document.querySelector('#gallery');
gallery.style.listStyle = 'none';
gallery.style.display = 'flex';
gallery.style.justifyContent = 'space-between'



gallery.insertAdjacentHTML('afterbegin', makeListImages)

console.log(gallery);

///////////вариант 2///////////
// const gallery = document.querySelector('#gallery');
// gallery.style.listStyle = 'none';
// gallery.style.display = 'flex';
// gallery.style.justifyContent = 'space-between'


// const imagesList = images.map(image => {
//   const item = document.createElement('li');
//   const imageEL = document.createElement('img');
//   imageEL.src = image.url;
//   imageEL.alt = image.alt;
//   imageEL.width = 320;
//   imageEL.height = 200;

  
//   item.appendChild(imageEL)
//   return item;
// })
    
// gallery.append(...imagesList)
// console.log(gallery);





