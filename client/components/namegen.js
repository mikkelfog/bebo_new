import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { allNames } from '../../imports/collections/allNames';
import { favNames } from '../../imports/collections/favNames';

NAME_START = Math.floor(Math.random() * 375);
NAME_END = NAME_START+3
window.NAME_INDEX = 0

class Namegen extends Component {
  // props.names => an array of name objects.
  // props.name => our name model
  render () {
    return (
      <div className="mainpage">
        <div className="col-xs-0 col-md-3">
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="headercontainer">
            <h1>Bebonomo</h1>
          </div>
          <div className="welcometext">
            <p>Hej!</p>
            <p>Denne side er lavet til at give dig inspiration til dit barns navn.</p>
            <p>Tryk på startknappen for at se forslag til navne sammen med dit efternavn.</p>
            <p>Hvis du logger ind kan du gemme en liste med dine favoritnavne.</p>
            <p>God fornøjelse!</p>
          </div>
          <div className="nameGenerator">
            <div>
              <button onClick={() => {
                const current_name = this.props.names[NAME_INDEX].name;
                console.log(current_name);
                $(".name_holder").html(current_name);
                }
              }
              className="start-btn btn">
                Start!
              </button>
            </div>
            <div className="name_holder">
            </div>
            <button onClick={() => {
              //favorites the current
              event.preventDefault();
              const current_name = this.props.names[NAME_INDEX].name;
              Meteor.call('reject.insert', current_name);
              //adds another name from the database to the subscription - til at starte med loader den tre navne, fordi den åbenbart første gang overskriver den oprindelige subscription
              NAME_START = Math.floor(Math.random() * 375);
              if ( NAME_INDEX === 0 ) {
                NAME_END = NAME_START+4;
                }
                else {
                NAME_END = NAME_START+2;
                };
              Meteor.subscribe('allNames', NAME_START, NAME_END);
              //updates the current name and puts it in the current name box
              window.NAME_INDEX = NAME_INDEX+1;
              const newname = this.props.names[NAME_INDEX].name;
              $(".name_holder").html(newname);
              }
            }
            className="btn reject-btn">
              Afvis
            </button>
            <button onClick={() => {
              //favorites the current
              event.preventDefault();
              const current_name = this.props.names[NAME_INDEX].name;
              Meteor.call('favorite.insert', current_name);
              //adds another name from the database to the subscription - til at starte med loader den tre navne, fordi den åbenbart første gang overskriver den oprindelige subscription
              NAME_START = Math.floor(Math.random() * 375);
              if ( NAME_INDEX === 0 ) {
                NAME_END = NAME_START+4;
                }
              else {
                NAME_END = NAME_START+2;
              };
              Meteor.subscribe('allNames', NAME_START, NAME_END);
              //updates the current name and puts it in the current name box
              window.NAME_INDEX = NAME_INDEX+1;
              const newname = this.props.names[NAME_INDEX].name;
              $(".name_holder").html(newname);
              }
            }
            className="btn favorite-btn">
              Favorit
            </button>
          </div>
        </div>
        <div className="col-xs-0 col-md-3">
        </div>
      </div>
    );
  }
};



export default createContainer( function() {
  //sets up subscription
  Meteor.subscribe('allNames', NAME_START, NAME_END);
  //returns what's inside the subscription to the component as props
  return { names: allNames.find({}).fetch()};
}, Namegen);
