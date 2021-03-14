const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulIngredients = document.querySelector('#ingredients')
ulIngredients.style.listStyle = 'none';

const elements = ingredients.map(ingredient => {
        const item = document.createElement('li');
        item.textContent = ingredient;
        
        return item;
    })


ulIngredients.append(...elements)
console.log(ulIngredients);
