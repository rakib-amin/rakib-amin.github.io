var i = 0;
var image_ = '<img src="https://rakib-amin.github.io/assets/images/content_copy-24px.svg" width="16" alt="Copy to clipboard">';
var image_after = '<img src="https://rakib-amin.github.io/assets/images/content_copy-24px-filled.svg" width="16" alt="Copy to clipboard">';
$(".highlight").each(function(i) {
  var currentId = "codeblock" + (i + 1);
  $(this).attr('id', currentId);
  var clipButton = '<button class="btn clipboard" data-clipboard-target="#' + currentId + '">Copy to clipboard ' + image_ + ' </button>';
  $(this).before(clipButton);
 });
new Clipboard('.btn');
$(".btn.clipboard").click(function() {
  $(this).html("Copied! " + image_after);
});

