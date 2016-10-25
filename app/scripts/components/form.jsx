// Form React Component

var React = require('react');

var Form = React.createClass({
  render: function(){
    return (
      <div id="add-form-container" className="add-form-container">
        <div className="container">

          <div className="row">
            <div className="col-xs-12">

              <form id="add-form">
                <div className="form-group">
                  <input type="text" name="imgUrl" placeholder="Image URL" className="form-control" />
                </div>
                <div className="form-group">
                  <textarea type="text" name="imgCaption" placeholder="Image Caption" className="form-control"></textarea>
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