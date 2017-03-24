import { Meteor } from 'meteor/meteor';
import { allNames } from '../imports/collections/allNames';
import { favNames } from '../imports/collections/favNames';
import { rejectNames } from '../imports/collections/rejectNames.js';

Meteor.startup(() => {
  if (allNames.find().count() === 0) {
      console.log("Importing private/trialnames.json to db")
      var data = JSON.parse(Assets.getText('trialnames.json')); //meteor looks for this file in the "private" folder
      data.forEach(function (item, index, array) {
          allNames.insert(item);
      });
  };
  var numberofallnames = allNames.find().count();
  console.log(numberofallnames);
  var numberoffavnames = favNames.find().count();
  console.log(numberoffavnames);
  var numberofrejectnames = rejectNames.find().count();
  console.log(numberofrejectnames);
  Meteor.publish('allNames', function(NAME_START, NAME_END) {
    return allNames.find({ number: { $gt: NAME_START, $lt: NAME_END }});
  });
  Meteor.publish('favNames', function() {
    return favNames.find({ owner: this.userId });
  });
  Meteor.publish('rejectNames', function() {
    return rejectNames.find({ owner: this.userId });
  });
});

// create a publication called "allNames" that publishes all names in the allNames collection
// create a publication called "favNames" that publishes all names in the favNames collection that belongs to the current user
// create a publication called "rejectNames" that publishes all names in the rejectNames collection that belongs to the current user


// Meteor.publish('rejectNames', function() {
//   return rejectNames.find({ownerId: this.userId});
// });
