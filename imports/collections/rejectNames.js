import { Mongo } from 'meteor/mongo';

Meteor.methods({
  // make current name a favorite name
  'reject.insert'(current_name) {
    // // Make sure the user is logged in before inserting a task
    // if (! this.userId) {
    //   throw new Meteor.Error('not-authorized');
    // }

    rejectNames.insert({
      name: current_name,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },

  //remove from favorites
  'reject.remove'(name) {
    rejectNames.remove(name);
    // });
  },

});

export const rejectNames = new Mongo.Collection('rejectNames');
