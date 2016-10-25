// Router
var _ = require('underscore');
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
    this.collection = new models.ImageCollection();
    this.collection.fetch();
  },
  routes: {
    '': 'index'
  },
  index: function(){
    // do index stuff
    // get the component, pass a collection
    // select the dom node
    ReactDOM.render(
      React.createElement(appWrapper, {collection: this.collection}),
        document.getElementById('app')
    );

    // this.collection.add([
    //   {
    //     'imgUrl': 'http://c1.staticflickr.com/4/3954/15561452832_578a271d8b_h.jpg',
    //     'imgCaption': 'Cool Views'
    //   }
    // ]);
  }
});

var router = new AppRouter();

module.exports = router;
