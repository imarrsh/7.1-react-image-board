// Listing React Component
var _ = require('underscore');
var React = require('react');

var GalleryItemFigure = React.createClass({
  render: function(){
    console.log(this.props.data, 'data passed to GalleryItemFigure');
    var model = this.props.data;
    // keeping this in here for now - makes me happy seeing something on screen
    return (
      <figure className="photo-card">
        <img src={model.get('imgUrl')} alt={model.get('imgCaption')} className="photo" />
        <figcaption className="caption">
          <h3>
            {model.get('imgCaption')}
            <span className="controls">
              <a href="">
                <i className="glyphicon glyphicon-pencil"></i>
              </a>
              <a href="">
                <i className="delete glyphicon glyphicon-remove"></i>
              </a>
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
    // console.log(this.props.data, 'data passed to GalleryItemContainer!');
    var imgBoards = this.props.data.map(function(model){
      return <GalleryItemFigure 
              key={model.get('_id')} 
              data={model} 
             />
    });

    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          {/* figure, img figcaption, h3, span, i+i */}
          {imgBoards}
        </div>
      </div>
    );
  }
});

// the whole gallery wrapper
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
  GalleryWrap: GalleryWrap
}