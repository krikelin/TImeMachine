require([
  '$api/models',
  '$views/list#List',
  '$api/search'
], function(models, List, search) {
  'use strict';

  var Epoch = function(start, end, options) {
    var self = this;
    document.querySelector('#playlist').innerHTML = "";
    start = Math.round(start);
    end = Math.round(end);
    var q ='year:' + start;
    console.log(q);
    var mySearch = search.Search.search(q);
    mySearch.load('tracks').done(function (mySearch) {
      console.log(mySearch.tracks);
      var list = List.forCollection(mySearch.tracks);
      document.querySelector('#playlist').appendChild(list.node, {'header': 'fixed'});
      list.init();
    });
    

  };
  Epoch.travel = function (start, end, options) {
    return new Epoch(start, end, options);

  }
  exports.Epoch = Epoch;
});
