import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { allNames } from '../../imports/collections/allNames';

class AllNames extends Component {
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
  Meteor.subscribe('allNames');
  return { names: allNames.find({ number: 34}).fetch() };
}, AllNames);
