import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import '../info/info.html';
import './database.html';

Template.database.onCreated(function () {
  Meteor.subscribe('links.all');
});

Template.database.helpers({
  links() {
    return Links.find({});
  }
 });