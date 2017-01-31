###hexo-theme-icarus_rtl_jalaali

##RTL Language and Jalaali Calendar support for ICARUS theme

##1-Install moment-jalaali via npm in the root folder of you blog:

npm install moment-jalaali

##2-Add a Hexo helper script (like jalaali.js) to themes/icarus/scripts:
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


##3-Edit layout files to use this helper function to format your date. For example, you can edit themes/icarus/layout/common/post/date.ejs:


<% if (post.date) { %>
    <div class="<%= class_name %>">
        <i class="fa fa-calendar"></i>
        <a href="<%- url_for(post.path) %>">
-            <time datetime="<%= date_xml(post.date) %>" itemprop="datePublished"><%= date(post.date, date_format) %></time>
+            <time datetime="<%= date_xml(post.date) %>" itemprop="datePublished"><%= jalaali(post.date) %></time>
        </a>
    </div>
<% } %>
