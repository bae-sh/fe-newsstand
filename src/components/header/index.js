import Button from '../common/Button.js';

export default class Header {
  constructor() {
    this.$header = document.createElement('header');
    this.init();

    return this.$header;
  }

  init() {
    const $headerName = document.createElement('h1');
    const $date = document.createElement('span');
    const $icon = new Button({ icon: 'newspaper', text: '뉴스스탠드' });

    $headerName.appendChild($icon);

    $date.innerText = '2023.02.10 금요일';
    $date.className = 'date';
    $icon.src = '../../assets/icons/news-stand-simbol.svg';

    this.$header.appendChild($headerName);
    this.$header.appendChild($date);
  }
}