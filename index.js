const subBtn = document.querySelector("#Btn");
const input = document.querySelector("input");

subBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const newInput = input.value.trim();

  const bodyList = document.querySelector(".body-list");

  const div = document.createElement('div');
  div.classList.add('items');

  div.innerHTML = `
  <li class="listItem">${newInput}</li>
  <i class="fa fa-trash"></i>
  `
  const dlt = div.querySelector('.fa');
  dlt.addEventListener('click', () => {
    div.remove();
  })
  
div.addEventListener('click', () => {
    div.classList.toggle('completed');
  })

  bodyList.appendChild(div);

  input.value = '';
});
