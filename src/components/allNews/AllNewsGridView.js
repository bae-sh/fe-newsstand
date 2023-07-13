import { shufflePressOrder } from '../../utils/index.js';
import Component from '../core/Component.js';
import ArrowButton from './ArrowButton.js';

export default class AllNewsGridView extends Component {
  setup() {
    this.state = { pressOrder: shufflePressOrder(), page: 0 };
  }

  template() {
    return `<div class='news-list-wrapper'>
              <button class='left-button'></button>
              <ul class='news-list-grid border-default'></ul>
              <button class='right-button'></button>
            </div>`;
  }

  mounted() {
    const logoMode = document.body.className === 'dark' ? 'logodark' : 'logo';

    let innerHTML = '';
    for (let i = this.state.page * 24; i < 24 * (this.state.page + 1); i++) {
      innerHTML += `<li class='border-default'><img class='press-logo' src='src/assets/${logoMode}/${this.state.pressOrder[i]}.png'/></li>`;
    }
    this.$target.querySelector('.news-list-grid').innerHTML = innerHTML;

    new ArrowButton(this.$target.querySelector('.left-button'), {
      name: 'left-button',
      isVisible: this.state.page !== 0,
      action: this.goPreviousPage.bind(this),
    });

    new ArrowButton(this.$target.querySelector('.right-button'), {
      name: 'right-button',
      isVisible: this.state.page !== 3,
      action: this.goNextPage.bind(this),
    });
  }

  goNextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  goPreviousPage() {
    this.setState({ page: this.state.page - 1 });
  }
}
