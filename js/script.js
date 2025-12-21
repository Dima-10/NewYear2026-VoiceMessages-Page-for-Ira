// Инициализируем Swiper 
new Swiper('.image-slider', {
    // Стрелки 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Навигация
    //Буллеты. текущее пложение, прогресс бар
    pagination: {
        el: '.swiper-pagination',
        /*
        //Буллеты
        clickable: true, 
        //Динамические буллеты
        dynamicBullets: true,
        //кастомные буллеты 
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        */

        
        //Фракция
        /*
        type: 'fraction',
        //Кастомный вывод фракции
        renderFraction: function (currentClass, totalClass) {
            return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
        },
        */

        /*
        //Прогресс бар
        type: 'progressbar'
        */
    },
    //Скролл
    /*
    scrollbar: {
        el: '.swiper-scrollbar',
        // Возможность перетаскивать скролл
        draggable: true
    },
    */


    //Включение отключение
    // перетаскивания на ПК
    simulateTouch: true, 
    // Чувствительность свайпа ( 0 - отключение, увеличение значения - увеличение чувствительности)
    touchRatio: 1,
    //Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    //Курсор перетаскивания
    grabCursor: true,

    // Переключение при клике на слайд
    slideToClickedSlide: true,

    hashNavigation: {
        //Отслеживать состояние
        watchState: true,
    },

    // Управление клавиатурой
    keyboard: {
        // Включить\Выключить
        enabled: true,
        //Включить\выключить только когда слайдер в пределах вьюпорта
        onlyInViewport: true,
        //Включить\выключить управление клавишами pageUp, pageDown
        pageUpDown: true,
    },

    // управление колесом мыши
    mousewheel: {
        //Чувствительность колеса мыши
        sensitivity: 1,
        //Класс обьекта на котором будет срабатывать прокрутка мышью
        eventsTarget: ".image-slider"
    },

    // Автовысота (нужно когда картинки разного рамера), плавно подстраивает высоту слайдера под высоту контента
    autoHeight: true,

    // Колличество слайдов для показа (принимает не только целые но и дробные числа, или значение "auto")
    //slidesPerView: 'auto', // при значении "auto" ширина слайдера формируется шириной контента расположенного в нём
    // так же для корректной работы этого значения в css необходимо написать настройку автоширины для слайдов
    slidesPerView: 1,

    // Отключение функционала (если слайдов меньше чем нужно)
    // watchOverflow: true,
    

    //Отступ между слайдами
    spaceBetween: 30,

    // Колличемтво пролистываемых слайдов
    slidesPerGroup: 1,

    //Активный слайд по центру (true/false)
    centeredSlides: false,

    //Стартовый слайд (где первый слайд это нулевой)
    initialSlide: 0,

    //Мультирядность (для корректной работы нужно отключить автовысоту (и здесь и в CSS), и также установить кол-во рядов параметром "slidesPerView", и установить некоторые стили)
    //slidesPerColumn: 2,

    // Бесконечный слайдер (true/false) (не будет работать с мультирядностью, а также бесконечная прокрутка не подразумевает скролл поэтому стоит его отключать)
    loop: false,

    // Кол-во дублирующих слайдов (чтобы работала бесконечность если у нас "slidesPerView: 'auto'")
    loopedSlides: 2,

    //Свободный режим
    freeMode: false,

    //Автопрокрутка
    /*
    autoplay: {
        //Пауза между прокруткой
        delay: 1000,
        //закончить на последнем слайде
        stopOnLastSlide: true,
        //Отключить полсе ручного переключения
        disableOnInteraction: false
    },
    */
    //скорость прокрутки
    speed: 800,

    // Вертикальный слайдер
    //direction: 'vertical',
    // Горизонтальный слайдер (по умолчанию)
    //direction: 'horizontal',



    //Эффеты переключения слайдов
    // Листание (по умолчанию)
    effect: 'slide',

    /*
    //Смена прозрачности
    effect: 'fade',
    //дополнение к аade
    fadeEffect: {
        // Параллельная смена прозрачности
        crossFade: true
    },
    */
    /*
    //Переворот
    effect: 'flip',

    //дополнение к flip
    flipEffect: {
        //Тень
        slideShadows: true,
        //показ только активного слайда
        limitRotation: true
    },
    */
    /*
    //Куб
    effect: 'cube',

    //Дополнение к cube (также есть доп.стили)
    cubeEffect: {
        //Настройка тени
        slideShadow: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
    },
    */
   /*
   //Эффект потока
   effect: 'coverflow',

   //Дополнение к coverflow
   CoverflowEffect: {
    //угол
    rotate: 20,
    //наложение
    stretch: 50,
    //тень
    slideShadows: true,
   },
   */


   //Брейк поинты (адаптив)
   //ширина экрана
   /*
   breakpoints: {
    320: {
        slidesPerView: 1,
    },
    480: {
        slidesPerView: 2,
    },
    992: {
        slidesPerView: 3,
    }
   },
   */
   //указываем не ширину, а соотношение сторон
   /*
   breakpoints: {
    '@0.75': {
        slidesPerView: 1,
    },
    '@1.00': {
        slidesPerView: 2,
    },
    "@1.50": {
        slidesPerView: 3,
    }
   },
   */

    /*
   // Зум картинки
   zoom: {
    //максимальное увеличение
    maxRatio: 5,
    //минимальное увеличение
    minRatio: 1,
   },

   */

   // Миниатюры (превью)
   thumbs: {
    //свайпер с миниатюрами и его настройки
    swiper: {
        el: '.image-mini-slider',
        slidesPerView: 6,
    }
   },
   
});


(() => {
  const slider = document.getElementById('mySlider');
  if (!slider) return;

  const audio = new Audio();
  audio.preload = 'metadata';

  const bar = document.createElement('div');
  bar.className = 'audio-bar';
  bar.style.display = 'none';
  bar.innerHTML = `
    <button class="audio-btn" type="button" aria-label="Play/Pause">▶</button>
    <div class="audio-progress" role="slider" aria-label="Progress">
      <div class="audio-progress-fill"></div>
    </div>
    <div class="audio-time">0:00 / 0:00</div>
  `;

  const btn = bar.querySelector('.audio-btn');
  const progress = bar.querySelector('.audio-progress');
  const fill = bar.querySelector('.audio-progress-fill');
  const timeEl = bar.querySelector('.audio-time');

  let currentImg = null;
  let currentSrc = null;

  function fmt(sec) {
    if (!Number.isFinite(sec)) return '0:00';
    sec = Math.max(0, sec);
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${String(s).padStart(2, '0')}`;
  }

  function setBtnIcon(isPlaying) {
    btn.textContent = isPlaying ? '❚❚' : '▶';
  }

  function updateUI() {
    const dur = audio.duration || 0;
    const cur = audio.currentTime || 0;
    const pct = dur > 0 ? (cur / dur) * 100 : 0;

    fill.style.width = `${pct}%`;
    timeEl.textContent = `${fmt(cur)} / ${fmt(dur)}`;
    setBtnIcon(!audio.paused);
  }

  function attachBarUnder(img) {
    const swiperSlide = img.closest('.swiper-slide');
    if (!swiperSlide) return;

    const imageBox = swiperSlide.querySelector('.image-slider__image');
    if (!imageBox) return;

    if (bar.parentElement !== imageBox) {
      imageBox.appendChild(bar);
    }
    bar.style.display = 'flex';
  }

  async function playForImage(img) {
    const src = img.dataset.audio;
    if (!src) return;

    attachBarUnder(img);

    if (currentImg === img && currentSrc === src) {
      if (audio.paused) await audio.play();
      else audio.pause();
      updateUI();
      return;
    }

    currentImg = img;
    currentSrc = src;

    audio.pause();
    audio.currentTime = 0;
    audio.src = src;

    try {
      await audio.play();
    } catch (e) {
      console.warn('Audio play blocked:', e);
    }
    updateUI();
  }

  // защита от клика после drag
  let wasDragged = false;
  slider.addEventListener('pointerdown', () => { wasDragged = false; }, { passive: true });
  slider.addEventListener('pointermove', () => { wasDragged = true; }, { passive: true });

  slider.addEventListener('click', (e) => {
    if (wasDragged) return;
    const img = e.target.closest('img[data-audio]');
    if (!img || !slider.contains(img)) return;
    playForImage(img);
  });

  btn.addEventListener('click', async () => {
    if (!audio.src) return;
    if (audio.paused) await audio.play();
    else audio.pause();
    updateUI();
  });

  progress.addEventListener('click', (e) => {
    const dur = audio.duration;
    if (!dur || !Number.isFinite(dur)) return;

    const rect = progress.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = Math.min(1, Math.max(0, x / rect.width));
    audio.currentTime = ratio * dur;
    updateUI();
  });

  audio.addEventListener('timeupdate', updateUI);
  audio.addEventListener('loadedmetadata', updateUI);
  audio.addEventListener('play', updateUI);
  audio.addEventListener('pause', updateUI);
  audio.addEventListener('ended', () => {
    setBtnIcon(false);
    updateUI();
  });

  // Если mainSwiper есть — останавливаем на смене слайда
  if (window.mainSwiper) {
    window.mainSwiper.on('slideChange', () => {
      audio.pause();
      audio.currentTime = 0;
      setBtnIcon(false);
      updateUI();
      bar.style.display = 'none';
      currentImg = null;
      currentSrc = null;
    });
  }
})();
