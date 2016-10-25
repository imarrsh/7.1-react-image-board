// Router
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');


// models
var models = require('./models/image');
// top level component
var appWrapper = require('./components/app.jsx').AppWrapper;

var AppRouter = Backbone.Router.extend({
  initialize: function(){
    // this.collection = new models.ImageCollection();
    // this.collection.fetch();
  },
  routes: {
    '': 'index'
  },
  index: function(){
    // do index stuff
    // get the component, pass a collection
    // select the dom node
    ReactDOM.render(
      React.createElement(appWrapper),
        document.getElementById('app')
    );

  }
});

var router = new AppRouter();

module.exports = router;
