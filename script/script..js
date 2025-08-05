const container = document.getElementById('select-container');
const title = document.getElementById('select-title');
const options = container.querySelectorAll('.options__item');
const rangeInput = document.getElementById('range');
const valueDisplay = document.querySelector('.range-container-text__info--value');

// Обработчик клика на заголовке
title.addEventListener('click', () => {
    container.classList.toggle('open');
    if (container.classList.contains('open')) {
        title.classList.remove('selected');
  }
});

// Обработчики для элементов списка
options.forEach(item => {
item.addEventListener('click', () => {
    title.textContent = item.textContent;
    title.classList.add('selected');
    container.classList.remove('open');
});
});

// Закрытие при клике вне области
document.addEventListener('click', e => {
if (!container.contains(e.target)) {
    container.classList.remove('open');
}
});

// Обработчик изменения значения
rangeInput.addEventListener('input', function() {
// Обновляем отображаемое значение
valueDisplay.textContent = this.value + '%';
    
});
  
// Инициализация значения при загрузке
valueDisplay.textContent = rangeInput.value + '%';