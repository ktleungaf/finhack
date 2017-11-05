var data = {
    "0": {
        "name": "香港科技大學 HKUST",
        "sub": {
            "1": {
                "name": "學術大樓 Academic Building",
                "sub": {
                    "2": {
                        "name": "7/F"
                    },
                    "3": {
                        "name": "6/F"
                    },
                    "4": {
                        "name": "5/F"
                    },
                    "5": {
                        "name": "4/F"
                    },
                    "6": {
                        "name": "3/F"
                    },
                    "7": {
                        "name": "2/F"
                    },
                    "8": {
                        "name": "1/F"
                    },
                    "9": {
                        "name": "G/F"
                    },
                    "10": {
                        "name": "LG1"
                    },
                    "11": {
                        "name": "LG3"
                    },
                    "12": {
                        "name": "LG4"
                    },
                    "13": {
                        "name": "LG5"
                    },
                    "14": {
                        "name": "LG7"
                    }
                }
            },
            "15": {
                "name": "李兆基大樓 LSK Building",
                "sub": {
                    "16": {
                        "name": "7/F"
                    },
                    "17": {
                        "name": "6/F"
                    },
                    "18": {
                        "name": "5/F"
                    },
                    "19": {
                        "name": "4/F"
                    },
                    "20": {
                        "name": "3/F"
                    },
                    "21": {
                        "name": "2/F"
                    },
                    "22": {
                        "name": "1/F"
                    },
                    "23": {
                        "name": "G/F"
                    }
                }
            },
            "24": {
                "name": "高等研究所 IAS",
                "sub": {
                    "25": {
                        "name": "5/F"
                    },
                    "26": {
                        "name": "4/F"
                    },
                    "27": {
                        "name": "3/F"
                    },
                    "28": {
                        "name": "2/F"
                    },
                    "29": {
                        "name": "1/F"
                    },
                    "30": {
                        "name": "G/F"
                    }
                }
            },
            "31": {
                "name": "室外 Outdoor"
            }
        }
    },
    "32": {
        "name": "彩明商場 Choi Ming Shopping Centre",
        "sub": {
            "33": {
                "name": "3/F"
            },
            "34": {
                "name": "2/FE"
            },
            "35": {
                "name": "2/F"
            },
            "36": {
                "name": "1/F"
            },
            "37": {
                "name": "G/F"
            }
        }
    },
    "38": {
        "name": "多媒體技術研究中心 MTRec"
    },
    "39": {
        "name": "K11 Hong Kong Art Mall",
        "sub": {
            "40": {
                "name": "G/F"
            },
            "41": {
                "name": "L1/F",
                "sub": {
                    "42": {
                        "name": "Shop 101"
                    },
                    "43": {
                        "name": "Shop 102"
                    },
                    "44": {
                        "name": "Shop 103"
                    },
                    "45": {
                        "name": "Shop 104"
                    },
                    "46": {
                        "name": "Shop 105"
                    },
                    "47": {
                        "name": "Shop 106"
                    },
                    "48": {
                        "name": "Shop 107"
                    },
                    "49": {
                        "name": "Shop 108"
                    },
                    "50": {
                        "name": "Shop 109"
                    },
                    "51": {
                        "name": "Shop 110"
                    },
                    "52": {
                        "name": "Shop 111"
                    },
                    "53": {
                        "name": "Shop 112"
                    },
                    "54": {
                        "name": "Shop 113"
                    },
                    "55": {
                        "name": "Shop 114"
                    },
                    "56": {
                        "name": "Shop 115"
                    },
                    "57": {
                        "name": "Shop 116"
                    },
                    "58": {
                        "name": "Shop 117"
                    },
                    "59": {
                        "name": "Shop 118"
                    },
                    "60": {
                        "name": "Shop 119"
                    },
                    "61": {
                        "name": "Shop 120"
                    },
                    "62": {
                        "name": "Shop 121"
                    },
                    "63": {
                        "name": "Shop 122"
                    }
                }
            },
            "64": {
                "name": "L2/F"
            }
        }
    },
    "65": {
        "name": "K11上海藝術購物中心 K11 Art Mall Shanghai",
        "sub": {
            "66": {
                "name": "1/F"
            },
            "67": {
                "name": "B1/F"
            },
            "68": {
                "name": "B2/F"
            }
        }
    },
    "69": {
        "name": "大本營 The Base"
    },
    "70": {
        "name": "京信 Comba",
        "sub": {
            "71": {
                "name": "Comba Hong Kong"
            },
            "72": {
                "name": "NWC"
            }
        }
    },
    "73": {
        "name": "Altai Altai"
    },
    "74": {
        "name": "香港國際機場 Hong Kong International Airport",
        "sub": {
            "75": {
                "name": "7F2"
            },
            "76": {
                "name": "7F1"
            }
        }
    },
    "77": {
        "name": "GAGA鮮語京基",
        "sub": {
            "78": {
                "name": "1/F"
            }
        }
    }
};

$( document ).ready(function() {

	var inputs = $('input.autoCompleteInput');
	var svgObject = $('object.floorPlan').extendedSVG({
		onSelectedPath: function(path) {
			var names = $(path).closest('div.floor-plan-markers').attr('name').split(', ');
				names.push($(path).attr('name'));

			var base = $(path).closest('div.mapSearch').find('div.auto-complete-result').children('ul');
			var a;
			var matched = false;
			
			for(var i in names)
			{
				a = base.children('li').children('a[name="' + $.trim(names[i]) + '"]');

				matched = a.length > 0;

				if(!matched) { break; }
				
				base = a.next();		
			}
				
			if(matched)
			{
				a.trigger('click');
			}
		}
	});
	
	inputs.each(function(index)
	{
		var input = $(this).autoComplete({
			data: data,
			autoExpand: false,
			onSelectItem: function(item)
			{
				var name = $(item).children('a').attr('name');
				svgObject[index].select(name);
			}
		});
	});
	
	var button = $('button[data-target="#searchPanel"]');
	
	$('div#searchPanel').on('shown.bs.collapse', function (event) {
		button.text('Compare');
		button.prop('disabled', false);
	});
	
	$('div#searchPanel').on('hidden.bs.collapse', function (event) {
		button.text('Revise Search');
		button.prop('disabled', false);
		UpdateAllCharts();
	})
	
	$('button[data-target="#searchPanel"]').click(function(event) {	
		$('div#searchPanel').collapse('toggle');
		$('div#resultPanel').collapse('toggle');
		$(this).prop('disabled', true);
		
		//ajax request;
		
		event.stopPropagation();
	});
	
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
		$('div.calendar-picker span').html(start.format('MMMM D, YYYY h:mm A') + ' - ' + end.format('MMMM D, YYYY h:mm A'));
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
		var data = [{
			values: genData(),
			key: 'Location A',
			color: '#00B19D',
			area: false
		}, {
			values: genData(),
			key: 'Location B',
			color: '#777777',
			area: false
		}];
			
        lineChart.useInteractiveGuideline(true);
        lineChart.xAxis.axisLabel('Date').scale(1).tickFormat(function(d) { return d3.time.format('%b %d')(new Date('Jan ' + d)); });
        lineChart.yAxis.axisLabel('Number of Visistors').scale(100).tickFormat(d3.format('d'));
        d3.select('.line-chart svg').attr('perserveAspectRatio', 'xMinYMid').datum(data).transition().duration(500).call(lineChart);
		d3.select('.nv-legendWrap').attr('transform', 'translate(25, -30)');
        nv.utils.windowResize(lineChart.update);
        return lineChart;
    });
	
    nv.addGraph(function() {
		var data = [{
			values: genData(),
			key: 'Location A',
			color: '#00B19D',
			area: false
		},{
			values: genData(),
			key: 'Location B',
			color: '#00B19D',
			area: false
		}];
		
        lineChart_Second.useInteractiveGuideline(true);
        lineChart_Second.xAxis.axisLabel('Date').scale(1).tickFormat(function(d){return d3.time.format('%b %d')(new Date('Jan ' + d));});
        lineChart_Second.yAxis.axisLabel('Average Dwell Time (seconds)').scale(1).tickFormat(d3.format('d'));
        d3.select('.line-chart-second svg').attr('perserveAspectRatio', 'xMinYMid').datum(data).transition().duration(500).call(lineChart_Second);
		d3.select('.nv-legendWrap').attr('transform', 'translate(25, -30)');
        nv.utils.windowResize(lineChart_Second.update);
        return lineChart_Second;
    });
	
	var barChart = nv.models.multiBarChart();
	charts.push(barChart);
	
	var barChart_Second = nv.models.discreteBarChart();
	charts.push(barChart_Second);

	var genDwellTimeData = function() {
        var values = [];
        for (var i = 1; i <= 24; i+=4) {
            values.push({
                x: i,
                y: i * Math.random()
            });
        }
        return values;
    }
	
    nv.addGraph(function() {
		var data = [{
			values: genData(),
			key: 'Nike',
			color: '#00b19d'
		}];
		
		barChart.stacked(false).showControls(false);
        barChart.xAxis.axisLabel('Date').scale(1).tickFormat(function(d){return d3.time.format('%b %d')(new Date('Jan ' + d));});
        barChart.yAxis.axisLabel('Average People Count').scale(1).tickFormat(d3.format('.2f'));
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
		
        barChart_Second.xAxis.axisLabel('Time').scale(1).tickFormat(function(d){return d3.time.format('%b %d')(new Date('Jan ' + d));});
        barChart_Second.yAxis.axisLabel('Average Dwell Time').scale(1).tickFormat(d3.format('.2f'));
        d3.select('.bar-chart-second svg').attr('perserveAspectRatio', 'xMinYMid').datum(data).transition().duration(500).call(barChart_Second);
		d3.select('.nv-legendWrap').attr('transform', 'translate(25, -30)');
        nv.utils.windowResize(barChart_Second.update);
        return barChart_Second;
    });
	
});