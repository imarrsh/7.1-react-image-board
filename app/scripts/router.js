// Router

var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

// other project pieces
// models
var models = require('./models/image');
// components
var form = require('./components/form.jsx');
var appWrapper = require('./components/listing.jsx').AppWrapper;

var AppRouter = Backbone.Router.extend({
  initialize: function(){
    this.collection = this.images = new models.ImageCollection();
    this.collection.fetch();
    // console.log(this.collection);
  },
  routes: {
    '': 'index'
  },
  index: function(){
    // do index stuff
    console.log('index!');

    ReactDOM.render(
      // get the component, pass a collection
      // select the dom node
      React.createElement(
        appWrapper,
        {collection: this.images}),
        document.getElementById('app')
      );
  }
});

var router = new AppRouter();

module.exports = router;
