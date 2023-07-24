import { getLocalStorage, setLocalStorage } from '../api/index.js';
import { KEY, TEXT } from '../src/constants/index.js';
import { Observable } from './observable.js';

export class ViewModeStore extends Observable {
  constructor() {
    super();
    this.viewType = TEXT.LIST;
    this.option = TEXT.SUBSCRIBE_EN;
    this.colorMode = getLocalStorage(KEY.COLOR_MODE) || TEXT.LIGHT;

    document.body.className = this.colorMode;
  }

  toggleViewType(type) {
    this.viewType = type;
    this.notify();
  }

  toggleOption(type) {
    this.option = type;
    this.notify();
  }

  toggleColorMode() {
    this.colorMode = this.colorMode === TEXT.LIGHT ? TEXT.DARK : TEXT.LIGHT;
    document.body.className = this.colorMode;
    setLocalStorage(this.colorMode);
  }

  isDarkMode() {
    return this.colorMode === TEXT.DARK;
  }
}
