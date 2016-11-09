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
      collection: images,
      formIsShowing: false 
    }
  },
  toggleForm: function(){
    this.setState({formIsShowing: !this.state.formIsShowing})
  },
  addPhoto: function(imageModel){
    // call create method on the collection with
    // model data from the form
    this.state.collection.create(imageModel);
    // set the collection again to reflect the new
    // changes to the collection 
    this.setState({collection: this.state.collection});
  },
  removePhoto: function(imageModel){
    // console.log('remove photo fired', imageModel);
    imageModel.destroy();
    this.setState({collection: this.state.collection});    
  },
  editPhoto: function(imageModel){
    
  },
  render: function(){
    // console.log(this.props.collection, 'data passed to appWrapper');
    return( 
      <div className="wrapper">
        <AppHeader toggleForm={this.toggleForm} /> { /* app top bar */ }
        {this.state.formIsShowing ? <Form addPhoto={this.addPhoto} /> : null} { /* app submission form */ }
        <GalleryWrap data={this.state.collection} 
         removePhoto={this.removePhoto} editPhoto={this.editPhoto}/> 
      </div>
    );

  }
});

var AppHeader = React.createClass({
  handleFormToggle: function(e){
    e.preventDefault();
    this.props.toggleForm();
  },
  render: function(){
    return (
      <header className="add-bar">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <a href="" onClick={this.handleFormToggle}>
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