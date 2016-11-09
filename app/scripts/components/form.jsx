// Form React Component

var React = require('react');

var Form = React.createClass({
  getInitialState: function(){
    // initial state form stuff
    return {
      imgUrl: '',
      imgCaption: ''
    };
  },
  handleSubmit : function(e){
    e.preventDefault();
    // singnal up the chain through props
    // that a submit event happened
    var imageModel = {
      imgUrl : this.state.imgUrl,
      imgCaption : this.state.imgCaption
    }
    this.props.addPhoto(imageModel);
  },
  onUrlChange: function(e){
    // when the field changes, update the state prop:
    var urlVal = e.target.value; // get the value of the field on the event
    this.setState({imgUrl: urlVal}); // set the state to the value of the field
  },
  onCaptionChange: function(e){
    var captionVal = e.target.value;
    this.setState({imgCaption: captionVal});
  },
  render: function(){
    return (
      <div id="add-form-container" className="add-form-container">
        <div className="container">

          <div className="row">
            <div className="col-sm-12">

              <form id="add-form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input onChange={this.onUrlChange} value={this.state.ImgUrl} type="text" name="imgUrl" placeholder="Image URL" className="form-control" />
                </div>
                <div className="form-group">
                  <textarea onChange={this.onCaptionChange} value={this.state.imgCaption} type="text" name="imgCaption" placeholder="Image Caption" className="form-control"></textarea>
                </div>
                <div className="form-group right">
                  <button className="btn btn-default">Cancel</button>
                  <input type="submit" value="Add Image" className="btn btn-success" />
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    )
  }

});

module.exports = {
  Form: Form
}