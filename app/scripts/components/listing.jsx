// Listing React Component
var _ = require('underscore');
var React = require('react');

var Form = require('./form.jsx').Form;

var AppWrapper = React.createClass({
  iteratorTest: function(){
    // console.log('succesful call');
    var images = this.props.collection.map(function(image){
      return(
        <div key="_id" className="div">image.get('imgUrl')</div>
      );
    });
    return images;
  },
  render: function(){
    console.log(this.props.collection, 'data passed to appWrapper');
    console.log(this.iteratorTest());
    return( 
      <div className="wrapper">
        <AppHeader />
        <Form />
        <GalleryWrap data={this.props.collection}/>
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
              <i className="add-btn glyphicon glyphicon-plus-sign"></i>
            </div>
          </div>
        </div>
      </header>
    );
  }
});

var GalleryItemFigure = React.createClass({
  render: function(){
    console.log(this.props.data, 'data passed to GalleryItemFigure');
    
    // keeping this in here for now - makes me happy seeing something on screen
    return (
      <figure className="photo-card">
        <img src="http://c1.staticflickr.com/4/3954/15561452832_578a271d8b_h.jpg" alt="Storm in the Desert" className="photo" />
        <figcaption className="caption">
          <h3>
            Storm in the Desert
            <span className="controls">
              <i className="glyphicon glyphicon-pencil"></i>
              <i className="delete glyphicon glyphicon-remove"></i>
            </span>
          </h3>
        </figcaption>
      </figure>
    );
  }
});

// item row and cols
var GalleryItemContainer = React.createClass({
  render: function(){
    var self = this;
    console.log(this.props.data, 'data passed to GalleryItemContainer!');
   
    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          {/* figure, img figcaption, h3, span, i+i */}
          <GalleryItemFigure data={this.props.data} />
        </div>
      </div>
    );
  }
});

// single item container wrap
var GalleryWrap = React.createClass({
  render: function(){
    // console.log(this.props.data, 'data passed to GalleryWrap');

    // return the stuff
    return(
      <section id="image-gallery" className="image-gallery">

        <div className="container">
          <div className="matte">
            {/* row, col, figure, img + img caption, h3, span, i+i */}
            <GalleryItemContainer data={this.props.data} />
          </div>
        </div>
      </section>
    );
  }
});

module.exports = {
  AppWrapper: AppWrapper,
  AppHeader: AppHeader,
  GalleryWrap: GalleryWrap,
  GalleryItemContainer: GalleryItemContainer,
  GalleryItemFigure: GalleryItemFigure
}