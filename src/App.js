import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/header/Header';
import SideMenu from './components/sidemenu/SideMenu';
import Content from './components/content/Content';

class App extends Component {
  render() {
    const { match: { params: { context } } } = this.props;
    return (
      <Fragment>
        <Header />
        <SideMenu />
        <Content context={context} />
      </Fragment>
    );
  }
}

export default App;
