import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/components/database/database.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/components/weather/weather.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.route('/database', {
  name: 'App.db',
  action() {
    BlazeLayout.render('App_body', { main: 'database' });
  },
});

FlowRouter.route('/weather', {
  name: 'App.db',
  action() {
    BlazeLayout.render('weather');
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
