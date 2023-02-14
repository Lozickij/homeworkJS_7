// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

// const dropdown = document.querySelectorAll('.dropdown-item');

// dropdown.forEach (element  => { 
//     element.classList.add('super-dropdown');
//     console.log(element);
//   });

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

// const button = document.querySelectorAll('.btn'); // Исхожу из того, что элемент может быть не один. Иначе исп. querySelector, и forEach не нужен.

// // button.forEach (element  => { 
// //     console.log(element);
// //   });

// button.forEach (element  => { 
//     element.classList.toggle('btn-secondary');
//     console.log(element);
//   });

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

// const menuEl = document.querySelectorAll('.menu');

// menuEl.forEach(element => {
//     element.classList.remove('dropdown-menu');
//     console.log(element);
// });

// 4. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

// const idEl = document.querySelector('#dropdownMenuButton');

// idEl.setAttribute('id', 'superDropdown');
// console.log(idEl);

// 5. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

// const atributEl = document.querySelector('[aria-labelledby="dropdownMenuButton"]');

// // atributEl.setAttribute('data-dd', 3);
// atributEl.dataset.dd = 3;
// console.log(atributEl);

// 6. Удалите атрибут type у элемента с классом "dropdown-toggle".

const buttonEl = document.querySelector('.dropdown-toggle');

buttonEl.removeAttribute('type');
console.log(buttonEl);