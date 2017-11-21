import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './info.html';
import '../../../../public/js/popper.min.js';
import '../../../../public/js/holder.min.js';
//import '../../../../public/js/bootstrap.min.js';
//import '../../../../public/js/carousel.js';
/*
import '../../../../public/js/collapse.js';
import '../../../../public/js/dropdown.js';
import '../../../../public/js/index.js';
import '../../../../public/js/modal.js';
import '../../../../public/js/popover.js';
import '../../../../public/js/scrollspy.js';
import '../../../../public/js/tab.js';
import '../../../../public/js/tooltip.js';
import '../../../../public/js/util.js';
*/

var http = require('http');
Template.info.onCreated(function () {
  Meteor.subscribe('links.all');
});


Template.info.helpers({
  links() {
    return Links.find({});
  },
  newsItem() {
    var res = Meteor.call('fetchNews');
    //var result = HTTP.call('GET','https://newsapi.org/v1/articles?source=ars-technica&sortBy=top&apiKey=99dff16cf81f435d93867bb769ed80a3');


//HTTP Play
HTTP.call('GET', 'https://newsapi.org/v1/articles?source=ars-technica&sortBy=top&apiKey=99dff16cf81f435d93867bb769ed80a3', {
   headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }
}, (error, result) => {
  if (!error) {
    Session.set('data', result);
  }
});

    console.log("Result of HTTP Call : " + result);
    //return res;
  },
});




Template.info.events({
  'submit .info-link-add'(event) {
    event.preventDefault();
    const username = $('#username').val();
    const email = $('#email').val();
    const passphrase = $('#passphrase').val();
    var newsletterNum = $('#newsletter:checkbox:checked').length;
    var newsletterOpt = String(newsletterNum);

  
    Meteor.call('links.insert', username, email, passphrase,newsletterOpt, (error) => {
      if (error) {
        alert(error.error);
      } else {
        username.value = '';
        email.value = '';
        passphrase.value = '';
        newsletterOpt.value = '';
        Winston.log('info', 'Enteries Logged Successfully');
      }
    });
  },
});
