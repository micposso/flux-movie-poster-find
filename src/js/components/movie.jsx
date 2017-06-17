var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore= require('../stores/AppStores');

var Movie = React.createClass({
  render: function(){
    return(
      <div className="well">
        {this.props.movie.Title}
      </div>
    )
  }
});


module.exports = Movie;
