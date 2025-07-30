(function() {
  // Создаём стили и вставляем в head
  const style = document.createElement('style');
  style.textContent = `
    #promo-widget-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 12px 20px;
      background: linear-gradient(90deg, #1e3c72 0%, #2a5298 100%);
      color: white;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      z-index: 9999;
      transition: all 0.3s ease;
    }
    #promo-widget-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    }
    #promo-widget-popup {
      position: fixed;
      bottom: 80px;
      right: 20px;
      width: 300px;
      min-height: 240px;
      background: linear-gradient(145deg, #1e3c72 0%, #2a5298 100%);
      border-radius: 12px;
      padding: 25px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      color: white;
      font-family: 'Montserrat', sans-serif;
      z-index: 10000;
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      animation: fadeIn 0.5s ease-out;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    #promo-widget-popup h3 {
      font-size: 1.4rem;
      font-weight: 700;
      margin: 0 0 15px 0;
      text-align: center;
      background: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.3;
    }
    #promo-widget-popup .content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    #promo-widget-popup p {
      font-size: 0.95rem;
      line-height: 1.5;
      margin: 0 0 20px 0;
      text-align: center;
      padding: 0 10px;
    }
    #promo-widget-popup .actions {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    #promo-widget-popup button {
      background: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
      color: white;
      border: none;
      border-radius: 5px;
      padding: 12px 20px;
      cursor: pointer;
      width: 100%;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    #promo-widget-popup button:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    #promo-widget-popup .close-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      background: transparent;
      border: none;
      color: white;
      font-size: 1.2rem;
      cursor: pointer;
      opacity: 0.7;
      transition: opacity 0.2s;
    }
    #promo-widget-popup .close-btn:hover {
      opacity: 1;
    }
    #promo-widget-note {
      font-size: 0.75rem;
      text-align: center;
      margin-top: 10px;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.4;
    }
  `;
  document.head.appendChild(style);

  // Создаём кнопку
  const btn = document.createElement('button');
  btn.id = 'promo-widget-btn';
  btn.textContent = 'ВЫБОР УСПЕШНЫХ!';
  document.body.appendChild(btn);

  // Создаём всплывающее окно (скрытое)
  const popup = document.createElement('div');
  popup.id = 'promo-widget-popup';
  popup.style.display = 'none';
  popup.innerHTML = `
    <button class="close-btn" aria-label="Закрыть">×</button>
    <div class="content">
      <h3>ТВОЙ ДОХОД<br>В USDT</h3>
      <p>Зарегистрируйся сегодня и получи прибыль до 50 000 рублей</p>
    </div>
    <div class="actions">
      <button id="promo-widget-go">Перейти к регистрации</button>
      <div id="promo-widget-note">С нами уже 8,340 успешных клиентов</div>
    </div>
  `;
  document.body.appendChild(popup);

  // Логика открытия/закрытия
  btn.addEventListener('click', () => {
    popup.style.display = 'flex'; // Изменено на flex
    btn.style.display = 'none';
  });

  popup.querySelector('.close-btn').addEventListener('click', () => {
    popup.style.display = 'none';
    btn.style.display = 'block';
  });

  // Кнопка "Перейти" ведёт на твой сайт
  popup.querySelector('#promo-widget-go').addEventListener('click', () => {
    window.location.href = 'https://yourdomain.com/register?source=widget';
  });
})();