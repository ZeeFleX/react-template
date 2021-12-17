import { makeAutoObservable } from 'mobx';
import { RootStore } from './';

export default class UserStore {
  rootStore?: RootStore;
  user?: string;
  constructor (rootStore?: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  changeName () {
    this.user = Math.random().toFixed(5);
  }
}
