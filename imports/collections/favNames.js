import { Mongo } from 'meteor/mongo';

Meteor.methods({
  // make current name a favorite name
  'favorite.insert'(current_name) {
    // // Make sure the user is logged in before inserting a task
    // if (! this.userId) {
    //   throw new Meteor.Error('not-authorized');
    // }

    favNames.insert({
      name: current_name,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },

  //remove from favorites
  'fav.remove'(name) {
    favNames.remove(name);
  },

});

export const favNames = new Mongo.Collection('favNames');
