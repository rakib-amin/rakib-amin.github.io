$("td").find('div.content:contains("_TBA_")').each(function(){
    $(this).parent().find('button').each(function(){ $(this).css("color", "grey"); });
    $(this).parent().find('button').each(function(){ $(this).prop('disabled', true); });
})

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}