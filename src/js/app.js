window.$ = window.jQuery = require('jquery');

require('popper.js');
require('bootstrap');

require('./header');
require('./sticky');
require('./owl-carousel');
require('./scrollreveal');

import Axios from 'axios';
window.axios = Axios;
