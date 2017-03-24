import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { favNames } from '../../imports/collections/favNames';

class Favlist extends Component {
  onFavRemove(name) {
    Meteor.call('fav.remove', name);
  }
  renderList() {
    return this.props.names.map(name=> {
      return (
        <li className="list-group-item" key={name._id}>
         <span>{name.name}</span>
         <span className="pull-right">
          <button
            className="btn btn-danger"
            onClick={() => this.onFavRemove(name)}>
            Remove
          </button>
         </span>
       </li>
      );
    });
  }
  render () {
    return (
      <div className="mainpage">
        <h4>
          Favorite List
        </h4>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('favNames');
  return { names: favNames.find({}).fetch() };
}, Favlist);
