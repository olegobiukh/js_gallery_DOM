'use strict';

const largeImg = document.getElementById('largeImg');

document.querySelectorAll('.gallery__list').forEach((item) => {
  item.style.display = 'flex';
  item.style.flexWrap = 'wrap';
});

document.querySelectorAll('.list-item').forEach((item) => {
  // eslint-disable-next-line no-shadow
  item.onclick = (event) => {
    event.preventDefault();

    const link = item.querySelector('.list-item__link');

    largeImg.src = link.href;
  };
});
