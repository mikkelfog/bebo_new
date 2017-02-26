import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { rejectNames } from '../../imports/collections/rejectNames';

class Rejectlist extends Component {
  onRejectRemove(name) {
    Meteor.call('reject.remove', name);
  }
  renderList() {
    return this.props.names.map(name=> {
      return (
        <li className="list-group-item" key={name._id}>
         <span>{name.name}</span>
         <span className="pull-right">
          <button
            className="btn btn-danger"
            onClick={() => this.onRejectRemove(name)}>
            Remove
          </button>
         </span>
       </li>
      );
    });
  }
  render () {
    return (
      <div>
        <h4>
          Reject List
        </h4>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('rejectNames');
  return { names: rejectNames.find({}).fetch() };
}, Rejectlist);
