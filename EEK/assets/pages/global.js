/**
* Theme: Minton Admin
* Author: Coderthemes
* Chart Nvd3 chart
*/

var charts = [];

function UpdateAllCharts()
{
	for(var i in charts)
	{
		if(charts[i].update)
		{
			charts[i].update();    
		}
	}
}

(function($) {
    'use strict';

	

})(jQuery);