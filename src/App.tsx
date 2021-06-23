import React from "react";
import { Route } from "react-router";
import { inject, observer } from "mobx-react";

// components
import Header from "./components/header";
import Mainpage from "./components/mainpage";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.sass";

type AppComponentProps = {
  routing?: any;
  Navigation?: any;
};

const AppComponent: React.FC<AppComponentProps> = inject(
  "routing",
  "Navigation"
)(
  observer(({ Navigation }: AppComponentProps): JSX.Element => {
    const { menuItems } = Navigation;
    return (
      <div className="App">
        <Header menuItems={menuItems} />
        <Route exact path={`/`} component={Mainpage} />
      </div>
    );
  })
);

export default AppComponent;
