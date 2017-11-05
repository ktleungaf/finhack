(function($) {
    'use strict';

	$(document).ready(function()
	{		
		$('div.calendar-picker span').html('Date and Time');

		$('div.calendar-picker').daterangepicker({
			format: 'MM/DD/YYYY h:mm A',
			startDate: moment().subtract(29, 'days'),
			endDate: moment(),
			minDate: '01/01/2016',
			maxDate: '12/31/2016',
			dateLimit: {
				days: 60
			},
			showDropdowns: true,
			showWeekNumbers: true,
			timePicker: true,
			timePickerIncrement: 30,
			timePicker12Hour: true,
			ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Month': [moment().startOf('month'), moment().endOf('month')],
				'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			},
			opens: 'left',
			drops: 'down',
			buttonClasses: ['btn', 'btn-sm'],
			applyClass: 'btn-success',
			cancelClass: 'btn-default',
			separator: ' to ',
			locale: {
				applyLabel: 'Submit',
				cancelLabel: 'Cancel',
				fromLabel: 'From',
				toLabel: 'To',
				customRangeLabel: 'Custom',
				daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
				monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				firstDay: 1
			}
		}, function (start, end, label) {
			console.log(start.toISOString(), end.toISOString(), label);
			$('div.calendar-picker span').html(start.format('MMMM D, YYYY h:mm A') + ' - ' + end.format('MMMM D, YYYY h:mm A'));
		});
		
		$('.colorpicker-default').colorpicker().on('changeColor', function (e) {
			  $(this)[0].style.backgroundColor = e.color.toHex();
		});
		
		
		var svgObject = $('object.floorPlan').extendedSVG({
			isPlotDataPoints: false,
			isPlotHeatMap: false,
			onSelectedPath: function(path) {

			}
		});
		
		GetWorld().objectList['svgFloorPlan'] = svgObject;
		
		GetWorld().Start();
		
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
		
		nv.addGraph(function() {
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
		
		var dwellTime = function() {
			var values = [];
			for (var i = 0; i <= 24; i+=4) {
				values.push({
					x: i,
					y: i * Math.random() 
				});
			}
			return values;
		}
		
		var barChart = nv.models.discreteBarChart();
		charts.push(barChart);
		
		nv.addGraph(function() {
			var data = [{
				values: dwellTime(),
				key: 'People Count',
				color: "#00b19d"
			}];
		   
			barChart.xAxis.axisLabel('Time').axisLabelDistance(-10).scale(1).tickFormat(function(d){return d.toString() + 'h';});
			barChart.yAxis.axisLabel('Average Dwell Time').scale(1).tickFormat(d3.format('.2f'));
			d3.select('.bar-chart svg').attr('perserveAspectRatio', 'xMinYMid').datum(data).transition().duration(500).call(barChart);
			d3.select('.nv-legendWrap').attr('transform', 'translate(25, -30)');
			nv.utils.windowResize(barChart.update);
			return barChart;
		});
		
	});	

})(jQuery);