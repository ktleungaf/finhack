/**
* Theme: Minton Admin Template
* Author: Coderthemes
* Component: Sparkline Chart
*
*/
$( document ).ready(function() {

	var genData = function()
	{
	   var values = [];
	   
	   for (var i = 0; i <= 24; i++) {
			values.push({
				x: i,
				y: Math.ceil(i * 100 * Math.random())
			});
		}

		return values;
	}

    $('#my_multi_select').multiSelect({
        afterSelect: function (selectedValues) {
            var col = $('#my_multi_select').closest('.row').parent();

			var row = $('<div>').addClass('row');
			var widget = $('<div>').addClass('widget-simple-chart').addClass('text-right').addClass('card-box').attr('key', selectedValues[0]);
			var chart = $('<div>').addClass('circliful-chart').attr('data-dimension', 90).attr('data-text', '35%').attr('data-fontssize', 14).attr('data-percent', 35).attr('data-fgcolor', '#5fbeaa').attr('data-bgcolor', '#ebeff2');
			var counter = $('<h3>').addClass('text-success').addClass('counter').html(2562);
			var p = $('<p>').addClass('text-muted').addClass('text-nowrap').html(selectedValues[0]);
			
			col.append(row);
			row.append(widget);
			widget.append(chart).append(counter).append(p);
			
			counter.counterUp({
				delay: 100,
				time: 1200
			});
			chart.circliful();
			
			var chart = d3.select('.line-chart-multiple svg');
			var data = chart.datum();
				data.push({
					values: genData(),
					key: selectedValues[0],
					color: '#00B19D',
					area: false
				});
			chart.datum(data);
			UpdateAllCharts();	
        },
        afterDeselect: function (deselectedValues) {
			var row = $('#my_multi_select').closest('.row').parent().find('div.widget-simple-chart[key="' + deselectedValues[0] + '"]');
			row.remove();
			
			var chart = d3.select('.line-chart-multiple svg');
			var data = chart.datum();
			
			for(var i = 0; i < data.length; i++)
			{
				if(data[i].key == deselectedValues[0])
				{
					data.splice(i, 1);
					UpdateAllCharts();
					break;
				}
			}
        }
    });
	
	var lineChart_Multiple = nv.models.lineChart();
	charts.push(lineChart_Multiple);
	
    nv.addGraph(function() {
		var data = [{
			values: genData(),
			key: 'People Count',
			color: '#00B19D',
			area: true
		}];
			
        lineChart_Multiple.useInteractiveGuideline(true);
        lineChart_Multiple.xAxis.axisLabel('Time').scale(1).tickFormat(function(d){return d + 'h';});
        lineChart_Multiple.yAxis.axisLabel('Number of Visistors').scale(100).tickFormat(d3.format('d'));
        d3.select('.line-chart-multiple svg').attr('perserveAspectRatio', 'xMinYMid').datum(data).transition().duration(500).call(lineChart_Multiple);
		d3.select('.nv-legendWrap').attr('transform', 'translate(25, -30)');
        nv.utils.windowResize(lineChart_Multiple.update);
        return lineChart_Multiple;
    });
	
});