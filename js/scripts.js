var data1;
var data2;
var data3;
var data4;
var data5;

$( document ).ready(function() {

  loadData("wages_info_original.json");

  $('#example').DataTable({
      "ajax": "../wages_info.json"
  });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

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
  data4 = ["Female Longevity"];
  data5 = ["Male Longevity"];

  $.each(data.wages, function(i, item){

    data1.push(parseFloat(item.femaleRate));  //concatenates to the end of data1
    data2.push(parseFloat(item.maleRate));
    data3.push(item.jobtitle);
    data4.push(parseFloat(item.femaleLongevity));
    data5.push(parseFloat(item.maleLongevity));
  }); //jQuery loop

  buildChart();
}

function buildChart(){

    var chart = c3.generate({
        bindto: '#chart1',
        size: {
          height: 480
        },
        data: {
          x: 'femaleRate',
          columns: [
            ["femaleRate", "30.58", "38.75", "34.48", "43.1", "22.56", "23.98", "24.19", "26.69", "22.35", "22.43", "22.56", "24.32", "24.25", "24.35", "26.1", "25.94", "35.59", "30.86", "20.3", "27.58", "27.78", "17.11", "24.32", "26.53", "23.88", "26.26", "32.52", "28.75", "33.09", "27.78", "36.37", "31.02", "27.27", "32.6", "25.77", "36.45", "27.34", "28.85", "39.96", "41.56", "42.51", "49.33", "46.98", "30.28", "31.57", "16.62", "19.38", "46.28", "41.14", "41.14", "49.2", "36.72", "36.3", "54.51", "39.7", "49.61", "45.51", "38.06", "29.41", "29.05", "34.91", "43.08", "31.19", "36.3", "5.53", "36.3", "35.21", "42.47", "32.39", "31.76", "30.49", "32.01", "45.96", "57.07", "29.4", "24.66", "27.04", "25.04", "28.83", "36.3", "33.69", "24.21", "30.35", "21.36", "15.66", "33.93", "36.72", "27.56", "23.98", "28.09", "29.81", "33.89", "34.32", "47.26", "44.28", "36.25", "41.14", "41.14", "46.28", "46.28", "55.04", "39.36", "30.85", "50.69", "44.41", "37.12", "29.05", "42.85", "38.37", "43.06", "51.93", "54.42", "55.08", "60.11", "45.25", "31.79", "35.37", "39.95", "86.34", "40.74", "24.69", "41.39", "49.56", "35.57", "45.96", "33.69", "35.05", "42.85", "31.74", "29.99", "36.3", "36.3", "23.8", "27.54", "41.56", "44.03", "63.87", "57.91", "63.18", "73.05", "72.13", "26.5", "26.5", "27.48", "39.66", "59.25", "48.11", "57.39", "27.25", "42.42", "43.81", "52.09", "35.68", "38.11", "43.58", "37.46", "40.71", "42.69", "45.89", "41.21", "29.41", "24.33", "27.14", "18.12", "35.35", "32.43", "29.61", "26.5", "34.32", "36.3", "33.69", "37.25", "41.14", "24.22", "31.57", "36.3", "56.11", "47.11", "48.55", "42.03", "41.29", "31.16", "37.93", "25.54", "19.38", "19.38", "20.96", "20.96", "44.63", "48.45", "20.96", "39.2", "41.16", "44.74", "44.74", "33.93", "34.55", "24.9", "32.95", "22.96", "31.89", "16.61", "19.5", "47.67", "47.67", "42.37", "35.17", "27.51", "52.25", "23.38", "25.04", "40.71", "47.33", "43.38", "43.02", "38.55", "40.2", "42.14", "41.37", "45.03", "45.93", "51.07", "49.22", "48.59", "45.03", "50.15", "43.39", "47.66", "49.12", "47.68", "52.14", "51.33", "51.56", "55.58", "60.56", "52.21", "52.7", "56.25", "57.86", "58.24", "30.16", "34.13", "38.2", "33.96", "22.73", "30.07", "50.07", "32.54", "41.14", "46.28", "22.86", "27.31", "35.4", "47.26", "31.23", "41.79", "64.48", "26.28", "37.7", "14.45", "5.11", "29.44", "30.71", "26.45", "23.42", "24.53", "29.64", "36.05", "25.28", "26.26", "37.7", "42.6", "31.61", "31.84", "26.99", "39.97", "32.39", "26.08", "35.45", "34.17", "37.54", "41.6", "45.74", "33.09", "36.9", "28.1", "25.54", "30.28", "81.65", "25.12", "30.2", "33.99", "40", "37.4", "24.85", "26.55", "62.84", "39.14", "34.09", "45.57", "45.98", "44.55", "47.18", "45.17", "44.35", "45.17", "45.57", "44.15", "43.91", "25.98", "51.53", "51.98", "25.54", "26.46", "35.85", "39.96", "36.07", "39.36", "34.23", "45.51", "48.54", "31.16", "39.2", "35.66", "43.94", "49.84", "40.36", "57.53", "35.88", "41.14", "24.35", "44.84", "16.76", "32.2", "29.54", "23.82", "33.69", "36.3", "28.39", "31.76", "36.3", "22.77", "29.41", "24.97", "27.52", "22.78", "22.81", "34.94", "39.2", "42", "45.51", "46.06", "43.41", "40.74", "19.53", "34.1", "37.06", "32.01", "30.22", "52.4", "49.03", "41.76", "41.61", "40.03", "46.47", "42.34", "41.72", "39.76", "45.13", "43.01", "46.01", "45.3", "49.43", "46.08", "46.3", "48.77", "43.16", "48.09", "50.21", "47.52", "46.41", "50.09", "50.02", "55.65", "52.58", "58.23", "55.58", "33.38", "36", "33.93", "41.14", "45.69", "53.39", "47.44", "31.34", "36.02", "25.28", "34.33", "27.52", "47.67", "37.4", "39.96", "30.55", "43.46", "31.51", "33.69", "35.74", "27.58", "29", "26.81", "29.51", "36.3", "21.2", "26.33", "22.56", "34.74", "37.35", "31.25", "30.31", "36.3", "29.99", "24.08", "30.88", "26.42", "27.67", "30.18", "33.64", "30.46", "33.69", "36.3", "39.2", "41.72", "36.3", "28.22" ],
            ["Male Rate", "30.28", "37.64", "33.89", "42.02", "22.56", "24.35", "24.21", "26.18", "21.76", "22.43", "22.56", "23.9", "24.11", "24.35", "26.26", "25.93", "35", "30.48", "20.61", "27.78", "27.78", "17.11", "24.08", "26.53", "23.88", "26.26", "32.52", "29.17", "32.9", "27.78", "36.3", "31.02", "27.27", "32.6", "24.77", "35.38", "27.26", "28.85", "38.86", "41.04", "49.33", "47.62", "47.12", "30.28", "31.57", "16.6", "18.74", "46.28", "41.14", "41.14", "55.11", "41.8", "32.39", "54.16", "39.91", "50.2", "45.51", "38.06", "28.33", "31.34", "34.73", "42.85", "33.56", "36.33", "5.53", "40.74", "36.3", "43.1", "32.39", "31.76", "30.49", "32.01", "61.42", "56.88", "30.39", "24.55", "27.04", "25.32", "28.58", "36.3", "33.69", "24.32", "30.35", "21.36", "14.8", "33.93", "36.72", "27.42", "23.92", "28.09", "31.31", "34.32", "35.66", "47.26", "43.14", "36.08", "41.14", "41.14", "46.28", "46.28", "54.85", "39.05", "29.95", "50.69", "45.51", "37.52", "27.52", "43.08", "38.37", "43.06", "51.4", "55.22", "55.08", "58.25", "44.27", "32.31", "34.71", "39.95", "86.81", "40.74", "25.99", "41.42", "49.56", "36.59", "45.96", "33.67", "35.93", "42.63", "31.74", "27.78", "31.16", "36.3", "25.03", "27.54", "43.1", "43.14", "64.7", "56.59", "63.94", "70.83", "87.78", "26.5", "26.34", "28.84", "39.09", "57.8", "47.77", "57.39", "27.25", "41.87", "43.85", "51.4", "34.36", "38.41", "43.16", "36.85", "40.26", "42.48", "46.06", "40.77", "29.41", "24", "27.18", "18.12", "39.04", "32.41", "29.99", "26.5", "33.68", "36.3", "33.69", "37.82", "41.14", "24.36", "31.74", "36.3", "55.27", "47.09", "48.12", "40.03", "40.35", "31.76", "37.82", "25.33", "19.38", "19.38", "20.96", "19.38", "44.63", "49.05", "21.08", "37.82", "41.97", "44.74", "44.74", "33.93", "36.3", "23.88", "33.16", "22.96", "33.32", "16.39", "19.46", "47.67", "47.67", "42.37", "35.24", "26.78", "51.27", "23.38", "25.04", "47.3", "34.55", "43.56", "37.62", "39.82", "42.24", "39.19", "47.39", "47.28", "46.85", "50.27", "47.45", "49.86", "49.24", "50.3", "46.42", "51.48", "50.19", "47.5", "51.35", "49.16", "50.07", "56.67", "59.78", "53.8", "52.7", "53.63", "59.36", "57.91", "30.16", "36.09", "38.2", "33.96", "22.74", "28.6", "44.8", "32.54", "41.14", "46.28", "23", "26.72", "34.27", "45.58", "31.28", "41.81", "64.48", "27.78", "37.7", "14.75", "5.11", "29.61", "30.91", "26.79", "23.88", "24.51", "30.27", "36.05", "28.35", "26.26", "37.7", "44.74", "31.59", "31.97", "28.35", "42.25", "33.69", "25.82", "36.3", "34.94", "37.21", "42.32", "46.41", "31.82", "36.9", "28.1", "25.54", "30.28", "80.61", "24.47", "29.82", "33.62", "40", "37.73", "25.06", "26.55", "65.36", "38.45", "33.36", "44.44", "45.47", "44.96", "47.5", "46.33", "44.22", "45.32", "45.2", "43.55", "44.14", "25.98", "51.52", "52.14", "25.54", "26.42", "36.3", "39.96", "35.07", "38.76", "34.99", "44.71", "48.54", "31.16", "39.2", "36.07", "45.25", "49.63", "39.33", "51.83", "35.88", "41.14", "24.35", "45.02", "16.45", "31.93", "29.54", "24.28", "32.95", "36.3", "28.03", "31.76", "36.3", "21.78", "29.41", "25.28", "27.52", "22.78", "22.81", "34.94", "39.2", "40.9", "43.88", "46.06", "43.41", "39.63", "19.97", "34.1", "37.06", "32.01", "30.05", "47.52", "47.99", "45.64", "46.35", "41.3", "42.61", "44.95", "37.36", "42.38", "45.37", "48", "49.6", "47", "50.84", "45.83", "44.98", "46.12", "49.39", "49.61", "48.74", "49.89", "47.5", "50.46", "50.57", "55.11", "55.38", "50.63", "55.81", "33.04", "36", "33.93", "40.92", "45.69", "53.39", "50.07", "31.34", "36.02", "25.28", "34.31", "27.52", "47.67", "38.09", "38.5", "30.55", "42.85", "28.88", "33.04", "33.73", "27.49", "28.93", "26.92", "29.56", "36.3", "21.03", "26.71", "22.56", "34.74", "37.35", "32.07", "30.55", "35.43", "29.99", "24.08", "30.88", "26.4", "27.67", "30.18", "33.64", "29.94", "33.69", "36.3", "39.2", "41.72", "36.3", "27.52" ],
          ],
          type: 'scatter',
          labels: true
        },
        legend: {
          show: false
        },
        axis: {
          x: {
            label: {
              text: 'Female Average Hourly Wage',
              position: 'outer-middle'
            },
            tick: {
              format: d3.format("$,"),
              values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
            }
          },
          y: {
            label: {
              text: 'Male Average Hourly Wage',
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

    var chart4 = c3.generate({
      bindto: '#chart2',
      data: {
        columns: [
          ['Hours worked', 8.9, 8.2, 8.6]
        ],
        type: 'bar'
      },
      axis: {
        x: {
            type: 'category',
            categories: ['Men Full Time Hours', 'Women Full Time Hours', 'Total Full Time Hours']
        }
      },
      bar: {
          width: {
              ratio: 0.5 // this makes bar width 50% of length between ticks
          }
      },
      legend: {
        show: false
      },
    });
}; //buildChart(

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

        if (! text) {
            title = titleFormat ? titleFormat(d[i].x) : d[i].x;
            // text = "hey";
            text = "<table class='" + $$.CLASS.tooltip + "'>" + (title || title === 0 ? "<tr><th colspan='2'>" + "Female Rate: " + title + "</th></tr>" : "");
        }

        name = nameFormat(d[i].name);
        value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);
        bgcolor = $$.levelColor ? $$.levelColor(d[i].value) : color(d[i].id);

        text += "<tr class='" + $$.CLASS.tooltipName + "-" + d[i].id + "'>";
        text += "<td class='name'><span style='background-color:" + bgcolor + "'></span>" + name + "</td>";
        text += "<td class='value'>" + value + "</td>";
        text += "</tr>";
    }
    return text + "</table>";
}
