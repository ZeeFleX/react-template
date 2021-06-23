import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { createBrowserHistory } from "history";
import { Provider } from "mobx-react";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import { Router } from "react-router";

// stores
import Navigation from "./stores/navigation.store";

const browserHistory = createBrowserHistory();
const routing = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routing);

const stores = {
  routing,
  Navigation
};

test('Renders mainpage header', () => {
  const { getByText } = render(<React.StrictMode>
    <Provider {...stores}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>);
  const element = getByText(/Главная страница/i);
  expect(element).toBeInTheDocument();
});
