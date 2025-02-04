// Загружаем списки карт из JSON (упрощенная версия)
const cards = [
  { name: "Шут", meaning: "Начало, спонтанность, приключение." },
  { name: "Маг", meaning: "Сила, мастерство, новые начинания." },
  { name: "Жрица", meaning: "Интуиция, скрытые знания, тайны." }
];

// Начать гадание
function drawCard(count) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '<h3>Ваши карты:</h3>';
  
  // Случайный выбор карты
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];
    resultDiv.innerHTML += `<p>${card.name}: ${card.meaning}</p>`;
  }
}

// Отобразить все карты
window.onload = () => {
  const cardList = document.getElementById('card-list');
  
  cards.forEach(card => {
    cardList.innerHTML += `<p><strong>${card.name}</strong>: ${card.meaning}</p>`;
  });
};
