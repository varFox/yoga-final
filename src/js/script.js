require('ie11-scroll-into-view');
require('nodelist-foreach-polyfill');
require('formdata-polyfill');


window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let tabs = require('./tabs.js'),
      scroll = require('./scroll.js'),
      timer = require('./timer.js'),
      modal = require('./modal.js'),
      form = require('./form.js'),
      valid = require('./valid.js'),
      slider = require('./slider.js'),
      calc = require('./calc.js');

  tabs('info-header-tab', 'info-header', 'info-tabcontent');
  scroll();
  timer('2019-06-01');
  modal();
  form();
  valid();
  slider();
  calc();

});

