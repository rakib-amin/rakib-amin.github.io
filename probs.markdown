---
layout: default
---
{% include probs.html %}
<script src='https://code.jquery.com/jquery-3.2.1.min.js'></script>
<script src='{{site.baseurl}}/assets/js/probs.js'></script>
{% if page.content contains "pre" %}
<script src='https://cdn.jsdelivr.net/npm/clipboard@1/dist/clipboard.min.js'></script>
<script src='{{site.baseurl}}/assets/js/clipboard.js'></script>
{% endif %}
