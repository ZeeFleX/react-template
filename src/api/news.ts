import news from "../mocks/news.json";

export function getNewsAction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(news);
    }, 1000);
  });
}
