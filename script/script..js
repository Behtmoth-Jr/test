const container = document.getElementById('select');
const title = document.getElementById('select-title');
const options = container.querySelectorAll('.select-options__item');


const rangeInput = document.getElementById('range');
const valueDisplay = document.querySelector('.range-container__info--value');

// Обработчик клика на заголовке
title.addEventListener('click', () => {
    container.classList.toggle('select--open');
    if (container.classList.contains('select--open')) {
        title.classList.remove('select--selected');
  }
});

// Обработчики для элементов списка
options.forEach(item => {
item.addEventListener('click', () => {
    title.textContent = item.textContent;
    title.classList.add('select--selected');
    container.classList.remove('select--open');
});
});

// Закрытие при клике вне области
document.addEventListener('click', e => {
if (!container.contains(e.target)) {
    container.classList.remove('select--open');
}
});

// Обработчик изменения значения
rangeInput.addEventListener('input', function() {
// Обновляем отображаемое значение
valueDisplay.textContent = this.value + '%';
    
});
  
// Инициализация значения при загрузке
valueDisplay.textContent = rangeInput.value + '%';