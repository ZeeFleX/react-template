import UserStore from './user';
import UIStore from './ui';

export class RootStore {
    userStore: UserStore;
    UIStore: UIStore;
    constructor () {
      this.userStore = new UserStore(this);
      this.UIStore = new UIStore(this);
    }
}
