import { Mongo } from 'meteor/mongo';

Meteor.methods({
  // make current name a favorite name
  'favorite.insert'(current_name) {
    //check(current_name, String); - Maybe it's not the most clever thing in the world to comment this out, but since everything that I give them the option to insert is my own data, it's not strictly a necessary check

    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    favNames.insert({
      name: current_name,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },

  //remove from favorites
  'favorite.remove'(selectedchildID) {
    favNames.remove(selectedchildID);
    // rejectednamesList.insert({
    //   name: selectedchildID,
    //   createdAt: new Date(),
    //   owner: this.userId,
    //   username: Meteor.users.findOne(this.userId).username,
    // });
  },

});

export const favNames = new Mongo.Collection('favNames');
