// Listing React Component
var _ = require('underscore');
var React = require('react');

var EditForm = React.createClass({
  getInitialState: function(){
    var model = this.props.model;
    return {
      model: model
    }
  },

  handleSave: function (e) {
    e.preventDefault();
    var model = this.state.model;
    model.save();

    this.setState({model: model});
    this.props.toggleEdit(e);
  },

  handleChange: function(e){
    var model = this.state.model;

    var name = e.target.name;
    var value = e.target.value;

    model.set(name, value);

    this.setState({model: model});
  },

  render: function(){
    var model = this.state.model;
    return(
      <div>
        <form id="edit-form" onSubmit={this.handleSave}>
          <div className="form-group">
            <input onChange={this.handleChange} type="text" name="imgUrl" defaultValue={model.get('imgUrl')}
              placeholder="Image URL" className="form-control" />
          </div>
          <div className="form-group">
            <textarea onChange={this.handleChange} type="text" name="imgCaption" defaultValue={model.get('imgCaption')}
              placeholder="Image Caption" className="form-control">
            </textarea>
          </div>
          <div className="form-group right">
            <button onClick={this.props.toggleEdit} className="btn btn-default">Cancel</button>
            <input type="submit" value="Update Image" className="btn btn-success" />
          </div>
        </form>
      </div>
    );
  }
});



var FigureInfo = React.createClass({
  render: function(){
    var model = this.props.model;
      return(
      <h3>
        <div>
          {model.get('imgCaption')}
          <span className="controls">
            <a onClick={this.props.toggleEdit}>
              <i className="glyphicon glyphicon-pencil"></i>
            </a>
            <a onClick={this.props.handleRemoveClick} href="">
              <i className="delete glyphicon glyphicon-remove"></i>
            </a>
          </span>
        </div>
      </h3>
    )
  }
});

var GalleryItemFigure = React.createClass({
  getInitialState: function(){
    return {
      isEditing: false
    }
  },
  handleRemoveClick: function(e){
    e.preventDefault();
    this.props.removePhoto(this.props.data);
  },

  toggleEdit: function(e){
    e.preventDefault();
    // switch flipper for edit mode
    this.setState({isEditing: !this.state.isEditing})
  },
  render: function(){
    // console.log(this.props.data, 'data passed to GalleryItemFigure');
    var model = this.props.data;
    return (
      <figure className="photo-card">
        <img src={model.get('imgUrl')} alt={model.get('imgCaption')} className="photo" />
        <figcaption className="caption">

          {this.state.isEditing ? 
            <EditForm model={model} toggleEdit={this.toggleEdit} /> :
            <FigureInfo model={model} toggleEdit={this.toggleEdit} 
              handleRemoveClick={this.handleRemoveClick} /> }

        </figcaption>
      </figure>
    );
  }
});

// item row and cols
var GalleryItemContainer = React.createClass({
  render: function(){
    self = this;
    // console.log(this.props.data, 'data passed to GalleryItemContainer!');
    var imgBoards = this.props.data.map(function(model){
      return <GalleryItemFigure 
              key={model.get('_id') || model.cid} 
              data={model}
              removePhoto={self.props.removePhoto}
              editPhoto={self.props.editPhoto}
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
            <GalleryItemContainer data={this.props.data} 
              removePhoto={this.props.removePhoto} 
              editPhoto={this.props.editPhoto} />
          </div>
        </div>
      </section>
    );
  }
});

module.exports = {
  GalleryWrap: GalleryWrap
}

// http://c2.staticflickr.com/4/3934/15476676449_97c944c961_b.jpg
// Golden Gate Bridge