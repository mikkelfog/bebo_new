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
            className="remove-btn btn"
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
        <div className="col-sm-0 col-md-3">
        </div>
        <div className="favoritelist col-sm-12 col-md-6">
          <div className="headercontainer">
            <h1>
              Favoritliste
            </h1>
          </div>
          <ul className="list-group">
            {this.renderList()}
          </ul>
        </div>
        <div className="col-sm-0 col-md-3">
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('favNames');
  return { names: favNames.find({}).fetch() };
}, Favlist);
