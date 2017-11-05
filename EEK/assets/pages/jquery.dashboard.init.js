/**
* Theme: Minton Admin Template
* Author: Coderthemes
* Component: Sparkline Chart
*
*/
$( document ).ready(function() {

	$('table.heatTable').heatTable({
		paintHeight: '25px',
		minColor : [65, 105, 225, 1],			//royal blue
		maxColor : [135, 206, 250, 1],			//light sky blue
		hoverColor : [235, 206, 250, 1]
	});


	$('table.retentionTable').retentionTable({
		paintHeight: '40px',
		minColor : [65, 105, 225, 1],			//royal blue
		maxColor : [135, 206, 250, 1],			//light sky blue
		hoverColor : [235, 206, 250, 1]
	});


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
	
	var lineChart = nv.models.lineChart();
	charts.push(lineChart);
		
	var lineChart_Second = nv.models.lineChart();
	charts.push(lineChart_Second);
	
    nv.addGraph(function() {
        var height = 300;
		var data = [{
			values: genData(),
			key: 'People Count',
			color: '#00B19D',
			area: true
		}];
			
        lineChart.useInteractiveGuideline(true);
        lineChart.xAxis.axisLabel('Time').scale(1).tickFormat(function(d){return d + 'h';});
        lineChart.yAxis.axisLabel('Number of Visistors').scale(100).tickFormat(d3.format('d'));
        d3.select('.line-chart svg').attr('perserveAspectRatio', 'xMinYMid').datum(data).transition().duration(500).call(lineChart);
		d3.select('.nv-legendWrap').attr('transform', 'translate(25, -30)');
        nv.utils.windowResize(lineChart.update);
        return lineChart;
    });
	
    nv.addGraph(function() {
        var height = 300;
		var data = [{
			values: genData(),
			key: 'People Count',
			color: '#00B19D',
			area: true
		}];
		
        lineChart_Second.useInteractiveGuideline(true);
        lineChart_Second.xAxis.axisLabel('Time').scale(1).tickFormat(function(d){return d + 'h';});
        lineChart_Second.yAxis.axisLabel('Number of Visistors').scale(100).tickFormat(d3.format('d'));
        d3.select('.line-chart-second svg').attr('perserveAspectRatio', 'xMinYMid').datum(data).transition().duration(500).call(lineChart_Second);
		d3.select('.nv-legendWrap').attr('transform', 'translate(25, -30)');
        nv.utils.windowResize(lineChart_Second.update);
        return lineChart_Second;
    });
	
	var barChart = nv.models.discreteBarChart();
	charts.push(barChart);
	
	var barChart_Second = nv.models.discreteBarChart();
	charts.push(barChart_Second);

	var genDwellTimeData = function() {
        var values = [];
        for (var i = 0; i <= 24; i+=4) {
            values.push({
                x: i,
                y: i * Math.random() 
            });
        }
        return values;
    }
	
    nv.addGraph(function() {
		var data = [{
			values: genDwellTimeData(),
			key: 'People Count',
			color: '#00b19d'
		}];
		
        barChart.xAxis.axisLabel('Time').axisLabelDistance(-10).scale(1).tickFormat(function(d){return d + 'h';});
        barChart.yAxis.axisLabel('Average Dwell Time').scale(1).tickFormat(d3.format('.2f'));
        d3.select('.bar-chart svg').attr('perserveAspectRatio', 'xMinYMid').datum(data).transition().duration(500).call(barChart);
		d3.select('.nv-legendWrap').attr('transform', 'translate(25, -30)');
        nv.utils.windowResize(barChart.update);
        return barChart;
    });
	
    nv.addGraph(function() {
		var data = [{
			values: genDwellTimeData(),
			key: 'People Count',
			color: '#00b19d'
		}];
		
        barChart_Second.xAxis.axisLabel('Time').scale(1).tickFormat(function(d){return d + 'h';});
        barChart_Second.yAxis.axisLabel('Average Dwell Time').scale(1).tickFormat(d3.format('.2f'));
        d3.select('.bar-chart-second svg').attr('perserveAspectRatio', 'xMinYMid').datum(data).transition().duration(500).call(barChart_Second);
		d3.select('.nv-legendWrap').attr('transform', 'translate(25, -30)');
        nv.utils.windowResize(barChart_Second.update);
        return barChart_Second;
    });
	
    var DrawSparkline = function() {
        $('#sparkline1').sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {
            type: 'line',
            width: $('#sparkline1').width(),
            height: '165',
            chartRangeMax: 50,
            lineColor: '#3bafda',
            fillColor: 'rgba(59,175,218,0.3)',
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
        });

        $('#sparkline1').sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], {
            type: 'line',
            width: $('#sparkline1').width(),
            height: '165',
            chartRangeMax: 40,
            lineColor: '#00b19d',
            fillColor: 'rgba(0, 177, 157, 0.3)',
            composite: true,
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
        });

        $('#sparkline2').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
            type: 'bar',
            height: '165',
            barWidth: '10',
            barSpacing: '3',
            barColor: '#3bafda'
        });

        $('#sparkline3').sparkline([20, 40, 30, 10], {
            type: 'pie',
            width: '165',
            height: '165',
            sliceColors: ['#dcdcdc', '#3bafda', '#333333', '#00b19d']
        });


    };


    DrawSparkline();

    var resizeChart;

    $(window).resize(function(e) {
        clearTimeout(resizeChart);
        resizeChart = setTimeout(function() {
            DrawSparkline();
        }, 300);
    });
});