import { observable, computed, action } from "mobx";
import { getNewsAction } from "../api/news";

interface TNews {
  id: number;
  title: string;
  content: string;
}

class NewsStore {
  // Properties
  @observable items = [] as TNews[];

  // Computed

  // Actions
  @action async getNews() {
    const news = (await getNewsAction()) as TNews[];
    this.items = news;
  }

  @action clearNews() {
    this.items = [];
  }
}

export default new NewsStore();
