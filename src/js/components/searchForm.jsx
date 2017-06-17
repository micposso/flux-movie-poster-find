var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore= require('../stores/AppStores');

var App = React.createClass({
  render: function(){
    return(
      <div className="search-form">
        <h1 className="text-center">Search For A Movie</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" className="form-control" ref="title" placeholder="Enter a movie title..." />
          <button className="btn bton-block">SUBMIT</button>
        </form>
      </div>
    )
  },

  onSubmit: function(e){
    e.preventDefault();
    var movie = {
      title: this.refs.title.value.trim()
    }
    {/* line below passes the title property of the new movie object to the appactions, appactions will handle this date now */}
    AppActions.searchMovies(movie);
  }

});

module.exports = App;
