
/**
* Theme: Minton Admin Template
* Author: Coderthemes
* Morris Chart
*/

!function($) {
    "use strict";

    var MorrisCharts = function() {};

    //creates line chart
    MorrisCharts.prototype.createLineChart = function(element, data, xkey, ykeys, labels, opacity, Pfillcolor, Pstockcolor, lineColors) {
        Morris.Line({
          element: element,
          data: data,
          xkey: xkey,
          ykeys: ykeys,
          labels: labels,
          fillOpacity: opacity,
          pointFillColors: Pfillcolor,
          pointStrokeColors: Pstockcolor,
          behaveLikeLine: true,
          gridLineColor: '#eef0f2',
          hideHover: 'auto',
          resize: true, //defaulted to true
          lineColors: lineColors
        });
    },
    //creates area chart
    MorrisCharts.prototype.createAreaChart = function(element, pointSize, lineWidth, data, xkey, ykeys, labels, lineColors) {
        Morris.Area({
            element: element,
            pointSize: 0,
            lineWidth: 0,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            resize: true,
            gridLineColor: '#eef0f2',
            lineColors: lineColors
        });
    },
    //creates area chart with dotted
    MorrisCharts.prototype.createAreaChartDotted = function(element, pointSize, lineWidth, data, xkey, ykeys, labels, Pfillcolor, Pstockcolor, lineColors) {
        Morris.Area({
            element: element,
            pointSize: 3,
            lineWidth: 1,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            pointFillColors: Pfillcolor,
            pointStrokeColors: Pstockcolor,
            resize: true,
            gridLineColor: '#eef0f2',
            lineColors: lineColors
        });
    },
    //creates Bar chart
    MorrisCharts.prototype.createBarChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            resize: true, //defaulted to true
            gridLineColor: '#eeeeee',
            barColors: lineColors
        });
    },
    //creates Stacked chart
    MorrisCharts.prototype.createStackedChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            stacked: true,
            labels: labels,
            hideHover: 'auto',
            resize: true, //defaulted to true
            gridLineColor: '#eeeeee',
            barColors: lineColors
        });
    },
    //creates Donut chart
    MorrisCharts.prototype.createDonutChart = function(element, data, colors) {
        Morris.Donut({
            element: element,
            data: data,
            resize: true, //defaulted to true
            colors: colors
        });
    },
    MorrisCharts.prototype.init = function() {

        //create line chart
        var $data  = [
            { y: '201701', a: 27000,  b: 25000, c: 9000 },
            { y: '201703', a: 15000,  b: 15000, c: 3000 },
            { y: '201705', a: 18000,  b: 19000, c: 8000 },
            { y: '201707', a: 25000,  b: 17000, c: 9000 },
            { y: '201709', a: 25000,  b: 40000, c: 10000 },
            { y: '201711', a: 4700, b: 0, c: 0}
          ];
        this.createLineChart('morris-line-example', $data, 'y', ['a', 'b','c'], ['Mr. Mark Steve', 'Mrs. Jane Steve', 'Chris Steve'],['0.1'],['#ffffff'],['#999999'], ["#3bafda", "#dcdcdc", "#80deea"]);

        //creating area chart
        var $areaData = [
                { y: '201701', a: 10, b: 20, c:30 },
                { y: '201703', a: 75, b: 65, c:30 },
                { y: '201705', a: 50, b: 40, c:30 },
                { y: '201707', a: 75, b: 65, c:30 },
                { y: '201709', a: 50, b: 40, c:30 },
                { y: '201711', a: 75, b: 65, c:30 }            ];
        this.createAreaChart('morris-area-example', 0, 0, $areaData, 'y', ['a', 'b','c'], ['Mr. Mark Steve', 'Mrs. Jane Steve', 'Chris Steve'], ["#26c6da", "#80deea","#dcdcdc"]);

        //creating area chart with dotted
        var $areaDotData = [
                { y: '201701', a: 10, b: 20 },
                { y: '201703', a: 75,  b: 65 },
                { y: '201705', a: 50,  b: 40 },
                { y: '201707', a: 75,  b: 65 },
                { y: '201709', a: 50,  b: 40 },
                { y: '201711', a: 75,  b: 65 }            ];
        this.createAreaChartDotted('morris-area-with-dotted', 0, 0, $areaDotData, 'y', ['a', 'b'], ['Series A', 'Series B'],['#ffffff'],['#999999'], ["#26c6da", "#80deea"]);

        //creating bar chart
        var $barData  = [
            { y: '2010', a: 100, b: 90 , c: 40 },
            { y: '2011', a: 75,  b: 65 , c: 20 },
            { y: '2012', a: 50,  b: 40 , c: 50 },
            { y: '2013', a: 75,  b: 65 , c: 95 },
            { y: '2014', a: 50,  b: 40 , c: 22 },
            { y: '2015', a: 75,  b: 65 , c: 56 },
            { y: '2016', a: 100, b: 90 , c: 60 }
        ];
        this.createBarChart('morris-bar-example', $barData, 'y', ['a', 'b', 'c'], ['Series A', 'Series B', 'Series C'], ["#3bafda", "#dcdcdc", "#80deea"]);

        //creating Stacked chart
        var $stckedData  = [
            { y: '2010', a: 100, b: 90 },
            { y: '2011', a: 75,  b: 65 },
            { y: '2012', a: 50,  b: 40 },
            { y: '2013', a: 75,  b: 65 },
            { y: '2014', a: 50,  b: 40 },
            { y: '2015', a: 75,  b: 65 },
            { y: '2016', a: 100, b: 90 }
        ];
        this.createStackedChart('morris-bar-stacked', $stckedData, 'y', ['a', 'b'], ['Series A', 'Series B'], ["#3bafda", "#ededed"]);

        //creating donut chart
        var $donutData = [
                {label: "Education Expense", value: 3500},
                {label: "Necessary Expense", value: 26500},
                {label: "Non-necessary Expense", value: 16500}
            ];
        this.createDonutChart('morris-donut-example', $donutData, ["#3bafda", "#ededed", "#80deea"]);
    },
    //init
    $.MorrisCharts = new MorrisCharts, $.MorrisCharts.Constructor = MorrisCharts
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.MorrisCharts.init();
}(window.jQuery);