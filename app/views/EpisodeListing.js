const React = require('react-native');
const {
  View,
  Text
} = React;

module.exports = React.createClass({
  getInitialState: function(){
    return {
      style: {
        padding: 10
      }
    }
  },

  highlightRow: function(){
    this.setState({
      style: {
        padding: 10,
        backgroundColor: "#ccc"
      }
    })
  },

  unhighlightRow: function(){
    this.setState({
      style: {
        padding: 10,
        backgroundColor: "#fff"
      }
    })
  },

  render: function(){
    return (
      <View style={ this.state.style }
        onStartShouldSetResponder={ () => true }
        onResponderGrant={ this.highlightRow }
        onResponderRelease={ this.unhighlightRow }
        onResponderMove={ this.unhighlightRow }
      >
        <Text>{this.props.episode}</Text>
      </View>
    );
  }
});