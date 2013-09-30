require([
  '$api/models',
  '$views/list#List',
  '$timemachine/timemachine',
  '$views/tabbar#TabBar'
], function(models, List, tm, TabBar) {
  'use strict';

  var setSection = function (id) {
    var sections = document.querySelectorAll('section');
    for(var i = 0; i < sections.length; i++) {
      var section = sections[i];
      if($(section).attr('id') === id)
        $(section).show();
      else
        $(section).hide();
    }
  }
  function init() {
    var tabBar = TabBar.withTabs([
      {id: 'overview', name: 'Overview', active: true}
    ]);
    tabBar.addToDom(document.body, 'prepend');
    $('#picker').ionRangeSlider({
      'type': 'double',
      'from': 1950,
      'hasGrid': true,
      'to': new Date().getFullYear(),
      'onFinish': function (e) {
       setYear(e.fromNumber, e.toNumber);
      }
    });

  }
  function setYear(start, end) {
    console.log(start, end);
    var Epoch = tm.Epoch.travel(start, end);
  }
  init();
});
