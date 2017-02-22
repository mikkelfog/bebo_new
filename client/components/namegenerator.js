import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { allNames } from '../../imports/collections/allNames';
import { rejectNames } from '../../imports/collections/rejectNames';
import { favNames } from '../../imports/collections/favNames';

const namenumber = 34;

class Namegenerator extends Component {
  render() {
    return this.props.names.map(name=> {
      return (
        <div className="list-group-item" key={name._id}>
         {name.name}
       </div>
      );
    });
  }
  // render () {
  //   return (
  //     <div className="">
  //       <input type="text" name="" value="" className="last_name"></input>
  //       <button className="btn btn-danger" onClick={this.generateHelper()}>
  //       Start
  //       </button>
  //       <h5 className="name_holder"></h5>
  //       <button className="reject">Reject</button>
  //       <button className="favorite">Favorite</button>
  //     </div>
  //   );
  // }
}

export default createContainer(() => {
  Meteor.subscribe('allNames', namenumber);
  return { names: allNames.find({ number: namenumber }).fetch() };
}, Namegenerator);

/*

generateHelper() {
  var n = names.length;
  var familyName = $(".last_name").val();
  var r = Math.floor(Math.random() * n);
  var current_name = names.findOne({ number: r}, {fields: {name:true}}).name;
  $(".name_holder").html(current_name + " " + familyName);
}

var multiply = function(x,y) {
  return x*y;
};

var multiply = (x,y) => {return x * y};

onClick={() => this.onBinRemove(bin)}

onClick={ function() {
  this.BinRemove(bin)
}};

// The events that can happen in the namegenerator app
Template.namegenerator.events({
  //Generate a name and set name to current name
  'click .namegenerator': function(){
    var familyName = $(".last_name").val(); //Det sidste jeg tilføjede var '()' bag val. Hvad gjorde den Søren?
    var n = Names.find().count();
    var r = Math.floor(Math.random() * n);
    var current_name = Names.findOne({ number: r}, {fields: {name:true}}).name;
    $(".name_holder").html(current_name + " " + familyName);
    Session.set('current_name', current_name);
  },
  //add to favorite
  'click .favorite': function(){
    var current_name = Session.get('current_name');
    // favoritenamesList.insert({
    //   name: current_name,
    //   owner: Meteor.userId(),
    //   username: Meteor.user().username,
    // });
    Meteor.call('favorite.insert', current_name);
    var familyName = $(".last_name").val();
    var n = Names.find().count();
    var r = Math.floor(Math.random() * n);
    var current_name = Names.findOne({ number: r}, {fields: {name:true}}).name;
    $(".name_holder").html(current_name + " " + familyName);
    Session.set('current_name', current_name);
  },
  //reject function (add to rejected list)
  'click .reject': function(){
    var current_name = Session.get('current_name');
    Meteor.call('reject.insert', current_name);
    // rejectednamesList.insert({
    //   name: current_name,
    //   owner: Meteor.userId(),
    //   username: Meteor.user().username,
    // });
    var familyName = $(".last_name").val();
    var n = Names.find().count();
    var r = Math.floor(Math.random() * n);
    var current_name = Names.findOne({ number: r}, {fields: {name:true}}).name;
    $(".name_holder").html(current_name + " " + familyName);
    Session.set('current_name', current_name);
  }
});
*/
