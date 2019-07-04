define([
    "jquery",
    "logger",
    "chart",
    "mage/mage"
], function(
    $,
    logger,
    chart,
    mage
) {
    "use strict";
    logger.log('custom.graph is loaded');

    $.widget('custom.graph', {

        _create: function() {
            self = this;

        new Chart(this.element, {
            "type": "line",
            "data": {
                "labels": ["January", "February", "March", "April", "May", "June", "July"],
                "datasets": [{
                    "label": "My First Dataset",
                    "data": [65, 59, 80, 81, 56, 55, 40],
                    "fill": false,
                    "borderColor": "rgb(75, 192, 192)",
                    "lineTension": 0.1
                }]
            },
            "options": {}
        });
        Chart.platform.disableCSSInjection = true;

	    this.element.on('click', function(e){
                    logger.log("You click on element: " + e.target);
                });

        },

    });

    return $.custom.graph;
});
