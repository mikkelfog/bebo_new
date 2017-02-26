import React from 'react';
import Header from './header';
import AllNames from './allnameslist';
import Favlist from './favlist';
import Rejectlist from './rejectlist';
import Namegen from './namegen';


export default () => {
  return (
    <div>
      <Header />
      <Namegen />
      <Favlist />
      <Rejectlist />
    </div>
  );
};
