/**
* Theme: Minton Admin
* Author: Coderthemes
* Chart Nvd3 chart
*/


(function($) {
    'use strict';

    function sinAndCos() {
        var sin = [],
            sin2 = [],
            cos = [];
        for (var i = 0; i < 100; i++) {
            sin.push({
                x: i,
                y: Math.sin(i / 9)
            });
            sin2.push({
                x: i,
                y: Math.sin(i / 10) * 0.25 + 0.5
            });
            cos.push({
                x: i,
                y: 0.5 * Math.cos(i / 10)
            });
        }
        return [{
            values: sin,
            key: 'Sine Wave',
            color: "#00b19d"
        }, {
            values: cos,
            key: 'Cosine Wave',
            color: "#ef5350"
        }, {
            values: sin2,
            key: 'Custom sine',
            color: "#3DDCF7"
        }];
    }
    nv.addGraph(function() {
        var lineChart = nv.models.lineChart();
        var height = 300;
        lineChart.useInteractiveGuideline(true);
        lineChart.xAxis.tickFormat(d3.format(',r'));
        lineChart.yAxis.axisLabel('Voltage (v)').tickFormat(d3.format(',.2f'));
        d3.select('.line-chart svg').attr('perserveAspectRatio', 'xMinYMid').datum(sinAndCos()).transition().duration(500).call(lineChart);
        nv.utils.windowResize(lineChart.update);
        return lineChart;
    });
    
    var historicalBarChart = [{
        key: 'Cumulative Return',
        values: [{
            'label': '2010',
            'value': -5.5,
            'color': '#ef5350'
        }, {
            'label': '2011',
            'value': 10,
            'color': '#3DDCF7'
        }, {
            'label': '2012',
            'value': 9,
            'color': '#ffaa00'
        }, {
            'label': '2013',
            'value': -1,
            'color': '#81c868'
        }, {
            'label': '2014',
            'value': 25,
            'color': '#dcdcdc'
        }, {
            'label': '2015',
            'value': 75,
            'color': '#333333'
        }, {
            'label': '2016',
            'value': 35,
            'color': '#3bafda'
        }]
    }];
    nv.addGraph(function() {
        var barChart = nv.models.discreteBarChart().x(function(d) {
            return d.label;
        }).y(function(d) {
            return d.value;
        }).staggerLabels(true).tooltips(false).showValues(true).duration(250);
        barChart.yAxis.axisLabel('Percentage Change in HKD');
        d3.select('.bar-chart svg').datum(historicalBarChart).call(barChart);
        nv.utils.windowResize(barChart.update);
        return barChart;
    });
    var i, j;
    nv.utils.symbolMap.set('thin-x', function(size) {
        size = Math.sqrt(size);
        return 'M' + (-size / 2) + ',' + (-size / 2) + 'l' + size + ',' + size + 'm0,' + -(size) + 'l' + (-size) + ',' + size;
    });
    var scatterChart;
    var colors = ['#00b19d', '#ef5350','#3ddcf7', '#ffaa00','#81c868', '#dcdcdc','#555555	', '#fb6d9d','#98a6ad', '#3bafda'];
    //d3.scale.category10().range()
    nv.addGraph(function() {
        scatterChart = nv.models.scatterChart().useVoronoi(true).color(colors).duration(300);
        scatterChart.xAxis.tickFormat(d3.format('.02f'));
        scatterChart.yAxis.axisLabel('Population dynamics').tickFormat(d3.format('.02f'));
        scatterChart.tooltipContent(function(obj) {
            return '<p>' + obj.series[0].key + '</p>';
        });
        d3.select('.scatter-chart svg').datum(randomData(4, 40)).call(scatterChart);
        nv.utils.windowResize(scatterChart.update);
        scatterChart.dispatch.on('stateChange', function(e) {
            ('New State:', JSON.stringify(e));
        });
        return scatterChart;
    });

    function randomData(groups, points) {
        var data = [],
            shapes = ['thin-x', 'circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
            random = d3.random.normal();
        for (i = 0; i < groups; i++) {
            data.push({
                key: 'Group ' + i,
                values: []
            });
            for (j = 0; j < points; j++) {
                data[i].values.push({
                    x: random(),
                    y: random(),
                    size: Math.round(Math.random() * 100) / 100,
                    shape: shapes[j % shapes.length]
                });
            }
        }
        return data;
    }
    var long_short_data = [{
        'key': 'Income',
        'color': "#dcdcdc",
                           'values': [{
                                      'label': '2010',
                                      'value': 0.89
                                      }, {
                                      'label': '2011',
                                      'value':  1.1111143243
                                      }, {
                                      'label': '2012',
                                      'value': 2.777
                                      }, {
                                      'label': '2013',
                                      'value': 0.95
                                      }, {
                                      'label': '2014',
                                      'value': 1.3
                                      }, {
                                      'label': '2015',
                                      'value': 2.5
                                      }, {
                                      'label': '2016',
                                      'value': 1.5
                                      }]
    }, {
        'key': 'Expense',
        'color': "#3bafda",
        'values': [{
            'label': '2010',
            'value': 1
        }, {
            'label': '2011',
            'value': 1
        }, {
            'label': '2012',
            'value': 1
        }, {
            'label': '2013',
            'value': 1
        }, {
            'label': '2014',
            'value': 1
        }, {
            'label': '2015',
            'value': 1
        }, {
            'label': '2016',
            'value': 1
        }]
    }];
    var multiChart;
    nv.addGraph(function() {
        multiChart = nv.models.multiBarHorizontalChart().x(function(d) {
            return d.label;
        }).y(function(d) {
            return d.value;
        }).duration(250);
        multiChart.yAxis.tickFormat(d3.format(',.2f'));
        d3.select('.multi-chart svg').datum(long_short_data).call(multiChart);
        nv.utils.windowResize(multiChart.update);
        return multiChart;
    });
    
    
    //Regular pie chart example
	nv.addGraph(function() {
	  var chart = nv.models.pieChart()
	      .x(function(d) { return d.label })
	      .y(function(d) { return d.value })
	      .showLabels(true);
	
	    d3.select("#chart1 svg")
	        .datum(exampleData)
	      	.transition().duration(1200)
	        .call(chart);
	
	  return chart;
	});
	
	//Donut chart example
	nv.addGraph(function() {
	  var chart = nv.models.pieChart()
	      .x(function(d) { return d.label })
	      .y(function(d) { return d.value })
	      .showLabels(true)     //Display pie labels
	      .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
	      .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
	      .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
	      .donutRatio(0.35)     //Configure how big you want the donut hole size to be.
	      ;
	
	    d3.select("#chart2 svg")
	        .datum(exampleData())
	        .transition().duration(350)
	        .call(chart);
	
	  return chart;
	});
	
	//Pie chart example data. Note how there is only a single array of key-value pairs.
	function exampleData() {
	  return  [
	      { 
	        "label": "One",
	        "value" : 29.765957771107,
	        "color" : "#00b19d"
	      } , 
	      { 
	        "label": "Two",
	        "value" : 60,
	        'color': '#ef5350'
	      } , 
	      { 
	        "label": "Three",
	        "value" : 39.69895,
	        'color': '#3ddcf7'
	      } , 
	      { 
	        "label": "Four",
	        "value" : 160.45946739256,
	        'color': '#ffaa00'
	      } , 
	      { 
	        "label": "Five",
	        "value" : 89.02525,
	        'color': '#81c868'
	      } , 
	      { 
	        "label": "Six",
	        "value" : 98.079782601442,
	        'color': '#dcdcdc'
	      } , 
	      { 
	        "label": "Seven",
	        "value" : 98.925743130903,
	        'color': '#3bafda'
	      } 
	      
	    ];
	}
})(jQuery);
