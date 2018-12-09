import React, { Fragment } from 'react';
import './App.css';
import Header from './components/header/Header';
import SideMenu from './components/sidemenu/SideMenu';
import Content from './components/content/Content';

const App = props => {
  const { match: { params: { context } } } = props;
  return (
    <Fragment>
      <Header />
      <SideMenu />
      <Content context={context} />
    </Fragment>
  );
};

export default App;
