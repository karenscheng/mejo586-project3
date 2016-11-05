var data1;
var data2;
var data3;

$( document ).ready(function() {

  loadData("wages_info_original.json");

  $('#example').DataTable({
        "ajax": "../wages_info.json"
    });
});

function loadData(dataURL){

  $.ajax({
    method: "GET",
    url: dataURL,
    dataType: "json",
    success: parseData
  });
}

function parseData(data){

  console.log(data);
  // console.log((data.wages[0].jobtitle)); //string to int

  data1 = ["Female Rate"];
  data2 = ["Male Rate"];
  data3 = ["Job Title"];

  $.each(data.wages, function(i, item){

    data1.push(parseFloat(item.femaleRate));  //concatenates to the end of data1
    data2.push(parseFloat(item.maleRate));
    data3.push(item.jobtitle);
  }); //jQuery loop

  buildChart();
}

function tooltip_contents(d, defaultTitleFormat, defaultValueFormat, color) {

    var $$ = this, config = $$.config, CLASS = $$.CLASS,
        titleFormat = config.tooltip_format_title || defaultTitleFormat,
        nameFormat = config.tooltip_format_name || function (name) { return name; },
        valueFormat = config.tooltip_format_value || defaultValueFormat,
        text, i, title, value, name, bgcolor;

    // You can access all of data like this:
    // console.log($$.data.targets);

    for (i = 0; i < d.length; i++) {
        if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }

        // ADD
        if (d[i].name === 'data2') { continue; }

        if (! text) {

            console.log(data3);
            //right now it's returning just Job Title.
            title = data3[i];
            text = "<table class='" + CLASS.tooltip + "'>" + (title || title === 0 ? "<tr><th colspan='2'>" + title + "</th></tr>" : "");
        }

        name = nameFormat(d[i].name);
        value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);
        bgcolor = $$.levelColor ? $$.levelColor(d[i].value) : color(d[i].id);

        text += "<tr class='" + CLASS.tooltipName + "-" + d[i].id + "'>";
        text += "<td class='name'><span style='background-color:" + bgcolor + "'></span>" + name + "</td>";
        text += "<td class='value'>" + value + "</td>";
        text += "</tr>";
    }
    return text + "</table>";
}


function buildChart(){

    var chart = c3.generate({
        bindto: '#chart',
        xs: {
          data3
        },
        data: {
          columns: [
            data1,
            data2

          ],
          type: 'scatter',
        },
        axis: {
          y: {
            label: {
              text: 'Axis Title',
              position: 'outer-middle'
            },
            tick: {
              format: d3.format("$,")
            }
          },
        },
        tooltip: {
          contents: tooltip_contents
       }
    });
}; //buildChart()
