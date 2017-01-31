/**
* Moment.js Jalaali Helper
* @description Jalaali Calendar Converter
* @example
*     <%- jalaali(date) %>
*/
var moment = require('moment-jalaali');

hexo.extend.helper.register('jalaali', function (date) {
    return moment(date).format('jYYYY/jM/jD'); // You can change the date format
});
hexo.extend.helper.register('jalaaliyear', function (date) {
    return moment(date).format('jYYYY'); // You can change the date format
});
