const categories = document.querySelectorAll('#categories .item');
console.log(`В списке  ${categories.length} категории`);

for (const elem of categories) {
    const title = elem.querySelector('h2').textContent;
    const itemEl= elem.querySelector('ul').children.length;
    console.log(`Категории: ${title}; Количество категорий ${itemEl}`);

}
    


