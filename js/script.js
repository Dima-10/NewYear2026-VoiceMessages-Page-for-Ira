// ===========================
// Swiper (главный + миниатюры)
// ===========================
const mainSwiper = new Swiper('.image-slider', {
  // Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // Навигация (у тебя сейчас пагинация выключена — оставляю как есть)
  pagination: {
    el: '.swiper-pagination',
  },

  // ВАЖНО ДЛЯ МОБИЛОК: не блокируем клики/тапы внутри Swiper
  preventClicks: false,
  preventClicksPropagation: false,
  touchStartPreventDefault: false,

  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,

  slideToClickedSlide: true,

  hashNavigation: {
    watchState: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".image-slider"
  },

  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  centeredSlides: false,
  initialSlide: 0,

  loop: false,
  loopedSlides: 2,

  // Свободный режим
  freeMode: false,

  speed: 800,
  effect: 'slide',

  // Миниатюры
  thumbs: {
    swiper: {
      el: '.image-mini-slider',
      slidesPerView: 6,
    }
  },
});

// чтобы аудио-код мог подписаться на события Swiper
window.mainSwiper = mainSwiper;


// ===========================
// Аудио по тапу на картинку
// ===========================
(() => {
  const slider = document.getElementById('mySlider');
  if (!slider) return;

  const audio = new Audio();
  audio.preload = 'metadata';

  // Панель плеера (одна на все слайды, переносим под активный)
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
    // Swiper-слайд
    const swiperSlide = img.closest('.swiper-slide');
    if (!swiperSlide) return;

    // Вставляем прямо под картинку (в твой контейнер)
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

    // Тап по той же картинке — toggle play/pause
    if (currentImg === img && currentSrc === src) {
      try {
        if (audio.paused) await audio.play();
        else audio.pause();
      } catch (e) {
        console.warn('Audio play blocked:', e);
      }
      updateUI();
      return;
    }

    // Переключаем трек
    currentImg = img;
    currentSrc = src;

    audio.pause();
    audio.currentTime = 0;
    audio.src = src;

    try {
      await audio.play(); // в user gesture (tap) — ок
    } catch (e) {
      console.warn('Audio play blocked:', e);
    }
    updateUI();
  }

  function animateTap(img) {
  img.classList.remove('tap-pop'); // чтобы повторный тап сработал
  // форсим рефлоу
  void img.offsetWidth;
  img.classList.add('tap-pop');

    img.addEventListener('animationend', () => {
      img.classList.remove('tap-pop');
    }, { once: true });
  }


  // ✅ Надёжно для мобилок: слушаем Swiper "tap"
  if (window.mainSwiper) {
    window.mainSwiper.on('tap', (swiper, e) => {
      const img = e.target.closest('img[data-audio]');
      if (!img) return;
      animateTap(img);
      playForImage(img);
    });

    // Останавливаем при смене слайда (если тебе так нужно)
    window.mainSwiper.on('slideChange', () => {
      audio.pause();
      audio.currentTime = 0;
      setBtnIcon(false);
      updateUI();
      bar.style.display = 'none';
      currentImg = null;
      currentSrc = null;
    });
  } else {
    // запасной вариант
    slider.addEventListener('pointerup', (e) => {
      const img = e.target.closest('img[data-audio]');
      if (!img || !slider.contains(img)) return;
      playForImage(img);
    });
  }

  // Кнопка play/pause на панели
  btn.addEventListener('click', async (e) => {
    e.stopPropagation();
    if (!audio.src) return;
    try {
      if (audio.paused) await audio.play();
      else audio.pause();
    } catch (err) {
      console.warn('Audio play blocked:', err);
    }
    updateUI();
  });

  // Перемотка по прогресс-бару
  progress.addEventListener('click', (e) => {
    e.stopPropagation();
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
})();


// ===========================
// (Опционально) фикс vh на мобилках, если нужен full-height без прыжков
// ===========================
(function () {
  function setVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  setVh();
  window.addEventListener('resize', setVh);
})();
