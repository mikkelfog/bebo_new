import React from 'react';
import Header from './header';
import AllNames from './allnameslist';
import favList from './favlist';
import Namegen from './namegennew';


export default () => {
  return (
    <div>
      <Header />
      <favList />
      <Namegen />
    </div>
  );
};
