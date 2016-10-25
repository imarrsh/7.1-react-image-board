// Form React Component

var React = require('react');

var Form = React.createClass({
  getInitialState: function(){
    // initial state form stuff
    return null;
  },
  handleSubmit : function(e){
    e.preventDefault();
    // singnal up the chain through props
    this.props.addPhoto();
  },
  onUrlChange(){
    console.log('onUrlChange');
  },
  onCaptionChange(){
    console.log('onCaptionChange');
  },
  render: function(){
    return (
      <div id="add-form-container" className="add-form-container">
        <div className="container">

          <div className="row">
            <div className="col-xs-12">

              <form id="add-form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input onChange={this.onUrlChange} type="text" name="imgUrl" placeholder="Image URL" className="form-control" />
                </div>
                <div className="form-group">
                  <textarea onChange={this.onCaptionChange} type="text" name="imgCaption" placeholder="Image Caption" className="form-control"></textarea>
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