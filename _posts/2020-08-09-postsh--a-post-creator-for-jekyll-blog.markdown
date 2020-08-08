---
layout: post
title:  "Post_.sh : A Post creator for Jekyll Blog"
date:   2020-08-09 02:52:39 +0800
categories: post gh-pages jekyll
---
I use this tool for creating posts in this site. 

<!--- Code Block -->
<script src="https://gist.github.com/rakib-amin/816d9f0eb7ee7d729ce37f179cc59fc4.js"></script>
{% if page.content contains "pre" %}
<script src='https://code.jquery.com/jquery-3.2.1.min.js'></script>
<script src='https://cdn.jsdelivr.net/npm/clipboard@1/dist/clipboard.min.js'></script>
<script src='{{site.baseurl}}/assets/js/clipboard.js'></script>
{% endif %}