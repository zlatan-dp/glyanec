function scrollToAnchor(event) {
  event.preventDefault(); // Заборонити стандартну дію посилання

  const targetId = event.target.getAttribute('href'); // Отримати ID якорної точки
  const targetElement = document.querySelector(targetId); // Знайти елемент за ID

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
