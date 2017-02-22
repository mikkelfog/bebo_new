import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { favNames } from '../../imports/collections/favNames';

class favList extends Component {
  renderList() {
    return this.props.names.map(name=> {
      return (
        <li className="list-group-item" key={name._id}>
         {name.name}
       </li>
      );
    });
  }
  render () {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('favNames');
  return { names: favNames.find({}).fetch() };
}, favList);
