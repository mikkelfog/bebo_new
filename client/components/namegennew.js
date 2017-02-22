import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { allNames } from '../../imports/collections/allNames';

const NAME_NUM = 40;

class Namegen extends Component {
  renderList() {
    return this.props.names.map(name=> {
      return (
        <span className="list-group-item" key={name._id}>
         {name.name}
       </span>
      );
    });
  }
  render () {
    return (
      <div>
        {this.renderList()}
        <button onClick={() =>
          Meteor.subscribe('allNames', 30) }
          className="btn btn-danger">
          New Name
        </button>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('allNames', NAME_NUM);
  return { names: allNames.find({ number: NAME_NUM }).fetch() };
}, Namegen);
