const menu = [
    {
        name: 'Eggplant Parmesan',
        isVegetarian: true
    },
    {
        name: 'Spaghetti & Meatballs',
        isVegetarian: false
    },
    {
        name: 'Stuffed shells',
        isVegetarian: true
    },
    {
        name: 'Tiramisu',
        isVegetarian: true
    },

];

function vegetarianMenu(menu) {
    const menuNode = document.querySelector('#menu');
    const vegetarianOptions = menu.filter(option => option.isVegetarian === true);

    vegetarianOptions.forEach(option => {
        let dish = document.createElement('li');
        dish.textContent = option.name;
        menuNode.appendChild(dish);
    });
}

vegetarianMenu(menu);







