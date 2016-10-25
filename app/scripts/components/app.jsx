// Listing React Component
var _ = require('underscore');
var React = require('react');

var models = require('../models/image');

// sub components
var Form = require('./form.jsx').Form;
var GalleryWrap = require('./listing.jsx').GalleryWrap;


// parent app component
var AppWrapper = React.createClass({
  // set some initial state here
  // only runs once
  getInitialState: function(){
    var self = this;
    var images = new models.ImageCollection();
    
    images.fetch().then(function(model){
      self.setState({collection: images});
    })

    return {
      collection: images
    }
  },
  addPhoto: function(model){
    // call create method on the collection with
    // model data from the form
    this.state.collection.create(imageModel);
    // set the collection again to reflect the new
    // changes to the collection 
    this.setState({collection: this.state.collection});
  },
  render: function(){
    // console.log(this.props.collection, 'data passed to appWrapper');
    return( 
      <div className="wrapper">
        <AppHeader /> { /* app top bar */ }
        <Form addPhoto={this.addPhoto}/> { /* app submission form */ }
        <GalleryWrap data={this.state.collection}/> { /* app contents */ }
      </div>
    );

  }
});

var AppHeader = React.createClass({
  render: function(){
    return (
      <header className="add-bar">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <a href="">
                <i className="add-btn glyphicon glyphicon-plus-sign"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
});


module.exports = {
  AppWrapper: AppWrapper,
  AppHeader: AppHeader
}