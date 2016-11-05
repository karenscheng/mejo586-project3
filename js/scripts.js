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
  }) //jQuery loop

  // console.log(data1);
  // console.log(data2);
  // console.log(data3);

  buildChart();
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
          // x: {
          //   label: {
          //     text: 'Average hourly wage: Women',
          //     position: 'outer-middle'
          //   },
          //   tick: {
          //     format: d3.format("$,")
          //   }
          // },
          y: {
            label: {
              text: 'Axis Title',
              position: 'outer-middle'
            },
            tick: {
              // count: 100,
              format: d3.format("$,")
            }
          },
        }
    });
}; //buildChart()
