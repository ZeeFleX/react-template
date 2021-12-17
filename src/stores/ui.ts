import { makeAutoObservable } from 'mobx';
import { RootStore } from './';

export default class UIStore {
  theme: 'light' | 'dark';
  rootStore?: RootStore;

  constructor (rootStore?: RootStore) {
    this.rootStore = rootStore;
    this.theme = 'light';
    makeAutoObservable(this);
  }

  toggleTheme () {
    console.log('Меняем');
    console.log(this.theme);
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }
}
