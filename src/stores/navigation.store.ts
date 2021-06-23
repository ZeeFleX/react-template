import { observable } from "mobx";

class NavigationStore {
  // Properties
  @observable menuItems = [
    {
      id: 1,
      text: "Mainpage",
      link: "/",
    },
  ];

  // Computed

  // Actions
}

export default new NavigationStore();
