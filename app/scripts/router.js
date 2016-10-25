// Router

var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
// other project pieces
var models = require('./models/image');
var form = require('./components/form.jsx');
var listing = require('./components/listing.jsx');

var AppRouter = Backbone.Router.extend({
  initialize: function(){
    this.collection = new models.ImageCollection();
    this.collection.fetch();
    // console.log(this.collection);
  },
  routes: {
    '': 'index'
  },
  index: function(){
    // do index stuff
    console.log('index!');
  }
});

var router = new AppRouter();

module.exports = router;
