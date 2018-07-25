import React, { Component } from 'react';
import './app.css';
import routes from './routes';
import Menu from './components/menu/menu';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      < Router >
        <div className="app">
          <Menu />
          {this.showContentMenu(routes)}
        </div>
      </Router >
    );
  }
  showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      })
    }
    return <Switch>{result}</Switch>
  }
}

export default App;
