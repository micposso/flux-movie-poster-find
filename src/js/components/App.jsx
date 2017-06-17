var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore= require('../stores/AppStores');
var SearchForm= require('./searchForm.jsx');
var MovieResults= require('./MovieResults.jsx');

function getAppState(){
  return {

  }
}

var App = React.createClass({
  getInitialState: function(){
    return getAppState();
  },

  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },

  render: function(){
    if(this.state.movies == ''){
      var moviesResults = '';
    } else {
      var moviesResults = <MovieResults movies={this.state.movies} />
    }

    return(
      <div>
        <SearchForm />
        {moviesResults}
      </div>
    )
  },

  _onChange: function(){
    this.setState(getAppState);
  }
});

module.exports = App;
