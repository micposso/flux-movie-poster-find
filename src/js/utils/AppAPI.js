var AppActions = require('../actions/AppActions');
var api = '322c3c23';

module.exports = {
  searchMovies: function(movie){
    $.ajax({
      url: 'http://www.omdbapi.com/?s=' + movie.title + '&apikey=' + '322c3c23',
      dataType: 'json',
      cache: false,
      success: function(data){
        AppActions.receiveMovieResults(data.Search);
      }.bind(this),
      error: function(xhr, status, err){
        alert(err);
      }.bind(this)
    });
  }
}
