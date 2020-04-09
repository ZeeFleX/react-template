import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";

// Styles
import styles from "./mainpage.module.sass";

@inject("News")
@observer
export default class Header extends Component<any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.News.getNews();
  }

  componentWillUnmount() {
    this.props.News.clearNews();
  }

  render() {
    const news = this.props.News.items;
    return (
      <div className={styles.mainpage}>
        <h1>Главная страница</h1>
        <h2>Последние новости</h2>
        {news.map((newsItem) => (
          <Card key={newsItem.id}>
            <CardBody>
              <CardTitle>{newsItem.title}</CardTitle>
              <CardText>{newsItem.content}</CardText>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}
