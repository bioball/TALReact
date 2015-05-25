const Reflux = require('reflux');
// const request = require('request-promise');
const qs = require('qs');
const Promise = require('bluebird');
const { XmlDocument } = require('xmldoc');

const episodesStore = Reflux.createStore({
  init: function(){
    this.getEpisodes();
  },
  getEpisodes: function(){
    console.log("getting episodes")
    return fetch("http://m.thisamericanlife.org/")
    .then((response) => {
      // console.log(response.text())
      // var xml = new XmlDocument(response.text());
      // console.log(xml.childNamed('li'))
      return [
        "Five Iron Frenzy",
        "Two Saddle Tony"
      ]
    })
      // $(xml)
      //   .find('li.box h4')
      //   .map((index, h4Element) => {
      //     console.log(h4Element)
      //     return $(h4Element).text();
      //   });
      // console.log(episodes)
    .then((episodes) => {
      this.trigger(episodes);
      
    })
    .done();
  }
});

module.exports = episodesStore;