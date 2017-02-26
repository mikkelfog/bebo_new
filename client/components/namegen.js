import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { allNames } from '../../imports/collections/allNames';
import { favNames } from '../../imports/collections/favNames';

window.NAME_NUM = Math.floor(Math.random() * 375);

const Namegen = function(props) {
  // props.names => an array of name objects.
  // props.name => our name model
  return (
    <div>
      <span className="name_holder"></span>
      <div>
        <button onClick={function() {
          console.log(NAME_NUM);
          const nameslength = props.names.length;
          console.log("names length now= "+props.names.length);
          const lastname = props.names[nameslength-1].name;
          console.log(lastname);
          $(".name_holder").html(lastname);
          }
        }
        className="btn favorite-btn">
          Start!
        </button>
        <button onClick={function() {
          console.log(NAME_NUM);
          const nameslength = props.names.length;
          console.log("names length now= "+props.names.length);
          const lastname = props.names[nameslength-1].name;
          console.log(lastname);
          }
        }
        className="btn favorite-btn">
          Length
        </button>
      </div>
      <button onClick={function() {
        event.preventDefault();
        console.log("name length at start ="+props.names.length);
        const current_name = allNames.findOne({ number: NAME_NUM}, {fields: {name:true}}).name;
        console.log(current_name);
        Meteor.call('favorite.insert', current_name);
        window.NAME_NUM = Math.floor(Math.random() * 375);
        console.log(NAME_NUM);
        Meteor.subscribe('allNames', NAME_NUM);
        const nameslength = props.names.length;
        console.log("names length now= "+props.names.length);
        const lastname = props.names[nameslength-1].name;
        console.log(lastname);
        $(".name_holder").html(lastname);
        }
      }
      className="btn favorite-btn">
        Favorite
      </button>
      <button onClick={function() {
        event.preventDefault();
        const current_name = allNames.findOne({ number: NAME_NUM}, {fields: {name:true}}).name;
        Meteor.call('reject.insert', current_name);
        window.NAME_NUM = Math.floor(Math.random() * 375);
        console.log(NAME_NUM);
        Meteor.subscribe('allNames', NAME_NUM);
        const nameslength = props.names.length;
        const lastname = props.names[nameslength-1].name;
        console.log(lastname);
        $(".name_holder").html(lastname);
        }
      }
      className="btn reject-btn">
        Reject
      </button>
  </div>
);
};


export default createContainer( function() {
  //sets up subscription
  Meteor.subscribe('allNames', NAME_NUM);
  //returns what's inside the subscription to the component as props
  return { names: allNames.find({}).fetch()};
}, Namegen);
