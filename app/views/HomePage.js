var React = require('react-native');
var Reflux = require('reflux');
var {
  AppRegistry,
  Text,
  View,
  ListView
} = React;
var styles = require('../styles/styles');
var episodesStore = require('../stores/episodesStore');
var EpisodeListing = require('./EpisodeListing');

var HomePage = React.createClass({

  mixins: [Reflux.listenTo(episodesStore, "onNewEpisodes")],

  getInitialState: function(){
    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
    return { 
      episodes: ds.cloneWithRows([]),
      viewStyle: {
        padding: 10
      }
    };
  },

  onNewEpisodes: function(episodes){
    this.setState({ episodes: this.state.episodes.cloneWithRows(episodes) });
  },

  renderRow: function(episode){
    return (
      <EpisodeListing episode={episode} />
    );
  },

  render: function(){
    return (
      <ListView
        style={styles.homeScroll}
        dataSource={this.state.episodes} 
        renderRow={this.renderRow} />
    );
  }
});

module.exports = HomePage;