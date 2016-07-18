// US_Baby_Names_Choropleth_Slider.js
//
// Author:  Ben Lindsay
// Date:    January 2016

var US;         // US Topo data from bl.ocks.org/mbostock/raw/4090846/us.json
var DATA;       // Data by state and year for current name
var NAME = 'James';
var YEAR = '1910';

var width = 960,
    height = 600;

var rateById = d3.map();

var quantize = d3.scale.quantize()
    .domain([0, 1])
    .range(d3.range(9).map(function(i) { return "q" + i + "-9"; }));

var projection = d3.geo.albersUsa()
    .scale(1280)
    .translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var dropdown = d3.select("body")
    .append("select")
    .attr("name", "Options:")
    .attr("id", "dropdown")
    .attr("onchange", "changeName(this.value)");

d3.csv("data/namelist.csv", function(names) {
    var options = dropdown.selectAll("option")
        .data(names)  
        .enter()
        .append("option");
    options.text(function(d) { return d.name; })
        .attr("value", function(d) { return d.name; });
});

initMap(NAME, YEAR);

d3.select(self.frameElement).style("height", height + "px");

function initMap(name, year) {
    queue()
        .defer(d3.csv, "data/" + name + ".csv")
        .defer(d3.json, "js/us.json")
        .await(drawMap);
}

function changeName(name) {
    queue()
        .defer(d3.csv, "data/" + name + ".csv")
        .await(drawMap);
}

function changeYear(year) {
    YEAR = year;
    document.getElementById('yearText').innerHTML = YEAR;
    var error = false;
    drawMap(error);
}

function drawMap(error, data, us) {
    if (error) throw error;

    var dataUndefined = (typeof data === 'undefined');
    var usUndefined = (typeof us === 'undefined');
    
    if (dataUndefined && usUndefined) {
        // Year change: data and us map data already stored.
    }
    else if (!dataUndefined && usUndefined) {
        // Name change: new data passed in, us map data already stored
        DATA = data;
    }
    else if (!dataUndefined && !usUndefined) {
        // 'data' and 'us' should only be passed once on initialization.
        // Set both global variables.
        DATA = data;
        US = us;
    };

    DATA.forEach(function (d) {
        rateById.set(d.id, +d[YEAR]);
    });

    d3.select("svg").selectAll("*").remove();

    svg.append("g")
        .attr("class", "states")
        .selectAll("path")
        .data(topojson.feature(US, US.objects.states).features)
        .enter().append("path")
        .attr("class", function(d) { return quantize(rateById.get(d.id)); })
        .attr("d", path);

    svg.append("path")
        .datum(topojson.mesh(US, US.objects.states, function(a, b) {
            return a !== b;
        }))
        .attr("class", "state_borders")
        .attr("d", path);
}
