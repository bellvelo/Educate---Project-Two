const ChartView = function(container){
this.container = container
};

console.log(this.container);


ChartView.prototype.render = function (topic) {

const flexContainer = document.createElement('div');
flexContainer.classList.add('flex-container-chart')

const chartContainer = document.createElement('div');
chartContainer.id = "columnchart_material"
flexContainer.appendChild(chartContainer);

this.container.appendChild(flexContainer);

  google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(topic.chart_data.chart_info);

        var options = {
          chart: {
            title: topic.chart_data.chart_title,
            subtitle: topic.chart_data.chart_subtitle,
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
};

module.exports = ChartView;
