---
layout: post
title:  "Archiving data in Google Sheet Using Google Apps Script"
date:   2020-08-08 23:19:01 +0800
categories: google-app-script
---
If you ever create per diem data in your sheet, after a while you are going to face a grave issue of too many sheets on the way to find the right one. I propose `archiveSheetByWeek_` to solve your problem.
<!--- Code Block -->
{% highlight JavaScript %}
function archiveSheetByWeek_() {
   var ss = SpreadsheetApp.getActiveSpreadsheet();
   // Sheet[]
   var sheets_ = ss.getSheets();
   // for alert / prompts
   var ui = SpreadsheetApp.getUi();
   // Sheet[] fulfilling criteria
   var sheets_week = new Array()
   
   // map for saving values
   var theMap = {}
   var rowNames = []
   
   var thisWeek = new Date().getWeek();
   var dateNow = new Date(); 
   
   // for all sheets name like 30/07 01/08 etc.
   for (var i = 0, j = 0; i < sheets_.length; i++) {
      var date_ = sheets_[i].getName().split(" ")[0].split("/");
      var dateField = String(date_[0]).padStart(2, '0');
      var monthField = String(date_[1]).padStart(2, '0');
      var dateString = dateNow.getFullYear() + "-" + monthField + "-" + dateField +"T00:00:00+08:00"
      var week_ = new Date(dateString).getWeek(); 
      if(thisWeek == week_) {
        sheets_week[j] = sheets_[i]
        j += 1
      }
      if(week_ < thisWeek) break;
   }
   
   if(sheets_week.length < 1) { 
     ui.alert("No Sheet found for week: " + thisWeek, ui.ButtonSet.OK);
     return
   }
   
   var rowC = 0;
   for (var i = 0; i < sheets_week.length; i++) { 
     // IMPORTANT : always use .getDisplayValues()
     var values = sheets_week[i].getDataRange().getDisplayValues()
     for (var j = 0, k = 0; j < values.length; j++) {
       if(sheets_week[i].getRange(j+1, 1).isBlank()){
         // end of valid data
         break;
       } else {
         if(theMap[values[j][0]]) {
           theMap[values[j][0]]['col_B'] +=  (", " + (values[j][1] ? values[j][1] : "NotFound"));           
           theMap[values[j][0]]['col_C'] +=  (", " + (values[j][2] ? values[j][2] : "NotFound"));           
           theMap[values[j][0]]['col_D'] +=  (", " + (values[j][3] ? values[j][3] : "NotFound"));           
         } else {
           theMap[values[j][0]] = {
              col_B: values[j][1] ? values[j][1] : "NotFound", 
              col_C : values[j][2] ? values[j][2] : "NotFound", 
              col_D : values[j][3] ? values[j][3] : "NotFound",  
            };
           rowNames[rowC] = values[j][0];
           rowC++;
         }
       }
     }
   }
   
   var col_B_rows = new Array()
   var col_C_rows = new Array()
   var col_D_rows = new Array()
   
   for(var n = 0; n < rowC; n++) {
     col_B_rows[n] = theMap[rowNames[n]]['col_B'] 
     col_C_rows[n] = theMap[rowNames[n]]['col_C'] 
     col_D_rows[n] = theMap[rowNames[n]]['col_D'] 
   }
   
   var newSheet = ss.getSheetByName("Week_" + thisWeek);
   if(!newSheet) newSheet = ss.insertSheet("Week_" + thisWeek);
   newSheet.getRange("A1:E1").setValues([["Col_A", "Col_B" ,"Col_C" ,"Col_D"]])
   newSheet.getRange("A2:A"+(rowC+1)).setValues(rowNames.map(function(e){ return [e]; }))
   newSheet.getRange("B2:B"+(rowC+1)).setValues(col_B_rows.map(function(e){ return [e]; }))
   newSheet.getRange("C2:C"+(rowC+1)).setValues(col_C_rows.map(function(e){ return [e]; }))
   newSheet.getRange("D2:D"+(rowC+1)).setValues(col_D_rows.map(function(e){ return [e]; }))
   
   newSheet.getRange("A1:E1").setFontWeight("bold");
   
   // delete sheets from this week
   var response = ui.alert('Are you sure you want to Delete all sheets from week: ' + thisWeek + '?', ui.ButtonSet.YES_NO);
   if (response == ui.Button.YES) {
     for (var i = 0; i < sheets_week.length; i++) {
       ss.deleteSheet(sheets_week[i])
     }
   }
}
{% endhighlight %}
{% if page.content contains "pre" %}
<script src='https://code.jquery.com/jquery-3.2.1.min.js'></script>
<script src='https://cdn.jsdelivr.net/npm/clipboard@1/dist/clipboard.min.js'></script>
<script src='{{site.baseurl}}/assets/js/clipboard.js'></script>
{% endif %}
