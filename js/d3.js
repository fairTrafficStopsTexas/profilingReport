var hr_urlB = "https://raw.githubusercontent.com/jkastelan/DAA2018_jlk635/master/searchhr.json";

var county_URLB = "https://raw.githubusercontent.com/TNRIS/tx.geojson/master/counties/tx_counties.geojson";

d3.queue()
.defer(d3.json, hr_urlB)
.defer(d3.json, county_URLB).
await(createChartB)


function createChartB(error, benchmark, county){

  var margin = {'left': 40, 'right': 30,
               'top':10, 'bottom': 20}
  var svg = d3.select('#scatterSvgB').append('svg')
.style("width", 1200)
.style("height", 600);

  var toolx = 150;

  var gChart = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var gMap   = svg.append("g")
                  .attr("transform", "translate(550, 0)");


  createMap(gMap, benchmark, county);
  createScatter(gChart,benchmark, county);


  function createScatter(g, benchmark, county){
      var height = 500;
      var width = 1000;

      var x = d3.scaleLinear().domain([0, .12]).range([0, 500]);
      var y = d3.scaleLinear().domain([0, .12]).range([500, 0]);

      var xAxis = d3.axisBottom(x)
      var yAxis = d3.axisLeft(y)

      var tooltip = d3.select("#scatterSvgB")
        .append("div")
        .attr("class", "tooltip");



    var circle = g.selectAll('circle').data(benchmark).enter()
        .append('circle').attr("cx", function(d){
            return x(d.White);
    })
    .attr("cy", function(d){
        return y(d.Black);
    })
    .attr("r", function(d){
      return  2 + (d.bcount / 150);
    })
    .style('fill', 'orange');


circle =
          g.selectAll('circle').data(benchmark)
      .on("mouseover", function(d){


  var name = d.index,


  // highlight
 // try to draw a shape over the Map
      canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]);

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      var path       = d3.geoPath()
                     .projection(projection);

    var key  = name;
    var matched = county.features.filter(d => d.properties.COUNTY==key);

//   Let's create a path for each (new) county shape
  var hl = gMap.selectAll(".select")
    .data(matched, d => d.properties.COUNTY);

  hl.enter().append("path")
      .attr("class", "select")
      .attr("d", path);

  hl.exit().remove();

          tooltip
              .style("left", d3.event.pageX + toolx + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html(d.index + "<br/> Minorities Searched:" + d.bcount)
        })
    g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)

    g.append("g")
      .attr("class", "y axis")
      .call(yAxis)

    var line = g.append("line")
            .attr("x1", 0)
            .attr("y1", 500)
            .attr("x2", 500)
            .attr("y2", 0)
    .attr("stroke-width", 2)
    .attr("stroke-dasharray", "5")
    .attr("stroke", 'black');

     // text function
var Text = g.append('text')
 .attr("class", "color-bar-label")
  .attr("x", 200)
  .attr('y', 550)
  .attr('font-weight', 'bold')
  .text("White Search Rate")
//  console.log(byCuisine)
   g.exit().style("opacity", 0)
//  console.log(d => )

    var Text = g.append('text')
 .attr("class", "color-bar-label")
  .attr("x", -300)
  .attr('y', -25)
  .attr('font-weight', 'bold')
  .attr('transform', 'rotate(-90)')
  .text("Minority Search Rate")
//  console.log(byCuisine)
   g.exit().style("opacity", 0)
//  console.log(d => )

      d3.select('#hB').on("click", function(){
       updateMap(gMap, benchmark, 1);
    var circle = g.selectAll('circle').data(benchmark)
    .transition().duration(500)
    .attr("cx", function(d){
      return x(d.White);
    })
    .attr("cy", function(d){
      return y(d.Hispanic);
    })
    .attr("r", function(d){
      return  2 + (d.hcount / 300);
    })
    .style("fill", "purple")
    .style("stroke", "purple");




    circle =
          g.selectAll('circle').data(benchmark)
      .on("mouseover", function(d){
      var name = d.index,


  // highlight
 // try to draw a shape over the Map
      canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]);

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      var path       = d3.geoPath()
                     .projection(projection);

    var key  = name;
    var matched = county.features.filter(d => d.properties.COUNTY==key);

//   Let's create a path for each (new) county shape
  var hl = gMap.selectAll(".select")
    .data(matched, d => d.properties.COUNTY);

  hl.enter().append("path")
      .attr("class", "select")
      .attr("d", path);

  hl.exit().remove();

          tooltip
              .style("left", d3.event.pageX + toolx + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html(d.index + "<br/> Minorities Searched:" + d.hcount)
        })
      })


    d3.select('#aB').on("click", function(){
      updateMap(gMap, benchmark, 2);
    var circle = g.selectAll('circle').data(benchmark).
    transition().duration(500).attr("cx", function(d){
      return x(d.White);
    })
    .attr("cy", function(d){
      return y(d.Asian);
    })
    .attr("r", function(d){
      return  2 + (d.acount / 75);
    })
    .style("fill", "green")
    .style("stroke", "green");

      circle =
          g.selectAll('circle').data(benchmark)
      .on("mouseover", function(d){
        var name = d.index,


  // highlight
 // try to draw a shape over the Map
      canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]);

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      var path       = d3.geoPath()
                     .projection(projection);

    var key  = name;
    var matched = county.features.filter(d => d.properties.COUNTY==key);

//   Let's create a path for each (new) county shape
  var hl = gMap.selectAll(".select")
    .data(matched, d => d.properties.COUNTY);

  hl.enter().append("path")
      .attr("class", "select")
      .attr("d", path);

  hl.exit().remove();


          tooltip
              .style("left", d3.event.pageX + toolx + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html(d.index + "<br/> Minorities Searched:" + d.acount)
        })
    })

    d3.select('#bB').on("click", function(){
      updateMap(gMap, benchmark, 0);
    var circle = g.selectAll('circle').data(benchmark).transition()
    .duration(500).attr("cx", function(d){
      return x(d.White);
    })
    .attr("cy", function(d){
      return y(d.Black);
    })
    .attr("r", function(d){
      return  2 + (d.bcount / 150);
    })
    .style("fill", "orange")
    .style("stroke", "orange");

      circle =
          g.selectAll('circle').data(benchmark)
      .on("mouseover", function(d){
        var name = d.index,


  // highlight
 // try to draw a shape over the Map
      canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]);

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      var path       = d3.geoPath()
                     .projection(projection);

    var key  = name;
    var matched = county.features.filter(d => d.properties.COUNTY==key);

//   Let's create a path for each (new) county shape
  var hl = gMap.selectAll(".select")
    .data(matched, d => d.properties.COUNTY);

  hl.enter().append("path")
      .attr("class", "select")
      .attr("d", path);

  hl.exit().remove();


          tooltip
              .style("left", d3.event.pageX + toolx + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html(d.index + "<br/> Minorities Searched:" + d.bcount)
        })
  })
      }




 function createMap(g, benchmark, county){
      let canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]),

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      path       = d3.geoPath()
                     .projection(projection);

//   Let's create a path for each (new) county shape
  g.selectAll(".county")
    .data(county.features)
    .enter().append("path")
      .attr("class", "county")
      .attr("d", path);

        g.append("g")
    .attr("class", "legendB")
    .attr("transform", "translate(285,20)")
    .append("text")
    .attr("class", "axis--map--captionB")
    .attr("y", -16);

  updateMap(g, benchmark, 0);

    }

    function updateMap(g, benchmark, i){
      var data     = benchmark.map(d => [d.Black, d.Hispanic, d.Asian, d.White, d.index]),
      maxCount = d3.max(data, d => d[i]-d[3]),
      minCount = d3.min(data, d => d[i]-d[3]),
      meanCount = d3.mean(data, d => d[i]-d[3]),
      devCount = d3.deviation(data, d => d[i]-d[3]),
//       steps    = 3,
      color = d3.scaleQuantile()
  .domain([-5, -2 * devCount ,2 * devCount, 5])
  .range(['DarkTurquoise', 'LightGrey', 'IndianRed' ]);

var x = d3.scaleQuantile()
          .domain(([-5, -2 * devCount , 2 * devCount  ,5])).range([-100, -40 , 40 , 100]);

//       var x = d3.scaleQuantile().domain([minCount, meanCount - (2 * devCount), meanCount, meanCount + (2 * devCount), maxCount].range(['orange', 'white','blue']))


      var f = d3.precisionRound(minCount, maxCount);


// console.log(data);
  counties = g.selectAll(".county")
                  .data(data, d => (d[4]?d[4]:d.properties.COUNTY));

  counties
    .transition().duration(300)
    .style("fill", d => color(d[i]-d[3]));

     counties.exit()
      .transition().duration(300)
      .style("fill", "none");
  var legend   = d3.select(".legendB");
   // For updating the legends, we get all the 'rect' shapes, and
  // perform an invert map to get the ranges for each color.
  let boxes = legend.selectAll("rect")
    .data(color.range().map(function(d) {

        d = color.invertExtent(d);
        if (d[0]==null) d[0] = x.domain()[0];
        if (d[1]==null) d[1] = x.domain()[1];

        return d;
      }));

  //   // We then create/update all boxes to the appropriate size and color
  boxes
    .enter().append("rect")
    .merge(boxes)
      .attr("height", 10)
      .attr("x", d => x(d[0]))
      .attr("width", d => (x(d[1]) - x(d[0])))
      .attr("fill", d => color(d[0]));

  // Update the tick values
  legend.call(d3.axisBottom(x)
//       .ticks(4)
      .tickSize(10,0)
      .tickValues([-5, -2* devCount, 2* devCount, 5 ])
      .tickFormat(d3.format(".2f")))
      .select(".domain")
      .remove();

       var Category = ['Black', 'Hispanic', 'Asian', 'White'];
  // ... and the title of the legend box
  legend.select(".axis--map--captionB")
    .attr("x", x.range()[0])
    .attr('y', -7)
    .text(`Difference between Search Rate for ${Category[i]} and White Drivers`);
    }

}

var hr_urlO = "https://raw.githubusercontent.com/jkastelan/DAA2018_jlk635/master/contrahr.json";

var county_URLO = "https://raw.githubusercontent.com/TNRIS/tx.geojson/master/counties/tx_counties.geojson";

d3.queue()
.defer(d3.json, hr_urlO)
.defer(d3.json, county_URLO).
await(createChartO)


function createChartO(error, outcome, county){

  var margin = {'left': 40, 'right': 30,
               'top':10, 'bottom': 20}
  var svg = d3.select('#scatterSvgO').append('svg')
.style("width", 1200)
.style("height", 600);

  var toolx = 150;

  var gChart = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var gMap   = svg.append("g")
                  .attr("transform", "translate(550, 0)");


  createMap(gMap, outcome, county);
  createScatter(gChart,outcome, county);


  function createScatter(g, outcome, county){
      var height = 500;
      var width = 1000;

      var x = d3.scaleLinear().domain([0, 1]).range([0, 500]);
      var y = d3.scaleLinear().domain([0, 1]).range([500, 0]);

      var xAxis = d3.axisBottom(x)
      var yAxis = d3.axisLeft(y)

      var tooltip = d3.select("#scatterSvgO")
        .append("div")
        .attr("class", "tooltip");



    var circle = g.selectAll('circle').data(outcome).enter()
        .append('circle').attr("cx", function(d){
            return x(d.White);
    })
    .attr("cy", function(d){
        return y(d.Black);
    })
    .attr("r", function(d){
      return  2 + (d.bcount / 75);
    })
    .style('fill', 'orange');


circle =
          g.selectAll('circle').data(outcome)
      .on("mouseover", function(d){


  var name = d.index,


  // highlight
 // try to draw a shape over the Map
      canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]);

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      var path       = d3.geoPath()
                     .projection(projection);

    var key  = name;
    var matched = county.features.filter(d => d.properties.COUNTY==key);

//   Let's create a path for each (new) county shape
  var hl = gMap.selectAll(".select")
    .data(matched, d => d.properties.COUNTY);

  hl.enter().append("path")
      .attr("class", "select")
      .attr("d", path);

  hl.exit().remove();

          tooltip
              .style("left", d3.event.pageX + toolx + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html(d.index + "<br/> BD Contraband Found:" + d.bcount)
        })
    g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)

    g.append("g")
      .attr("class", "y axis")
      .call(yAxis)

    var line = g.append("line")
            .attr("x1", 0)
            .attr("y1", 500)
            .attr("x2", 500)
            .attr("y2", 0)
    .attr("stroke-width", 2)
    .attr("stroke-dasharray", "5")
    .attr("stroke", 'black');

     // text function
var Text = g.append('text')
 .attr("class", "color-bar-label")
  .attr("x", 200)
  .attr('y', 550)
  .attr('font-weight', 'bold')
  .text("White Hit Rate")
//  console.log(byCuisine)
   g.exit().style("opacity", 0)
//  console.log(d => )

    var Text = g.append('text')
 .attr("class", "color-bar-label")
  .attr("x", -300)
  .attr('y', -25)
  .attr('font-weight', 'bold')
  .attr('transform', 'rotate(-90)')
  .text("Minority Hit Rate")

   g.exit().style("opacity", 0)
//  console.log(d => )

      d3.select('#hO').on("click", function(){
       updateMap(gMap, outcome, 1);
    var circle = g.selectAll('circle').data(outcome)
    .transition().duration(500)
    .attr("cx", function(d){
      return x(d.White);
    })
    .attr("cy", function(d){
      return y(d.Hispanic);
    })
    .attr("r", function(d){
      return  2 + (d.hcount / 75);
    })
    .style("fill", "purple")
    .style("stroke", "purple");




    circle =
          g.selectAll('circle').data(outcome)
      .on("mouseover", function(d){
      var name = d.index,


  // highlight
 // try to draw a shape over the Map
      canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]);

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      var path       = d3.geoPath()
                     .projection(projection);

    var key  = name;
    var matched = county.features.filter(d => d.properties.COUNTY==key);

//   Let's create a path for each (new) county shape
  var hl = gMap.selectAll(".select")
    .data(matched, d => d.properties.COUNTY);

  hl.enter().append("path")
      .attr("class", "select")
      .attr("d", path);

  hl.exit().remove();

          tooltip
              .style("left", d3.event.pageX + toolx + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html(d.index + "<br/> HD Contraband Found:" + d.hcount)
        })
      })


    d3.select('#aO').on("click", function(){
      updateMap(gMap, outcome, 2);
    var circle = g.selectAll('circle').data(outcome).
    transition().duration(500).attr("cx", function(d){
      return x(d.White);
    })
    .attr("cy", function(d){
      return y(d.Asian);
    })
    .attr("r", function(d){
      return  2 + (d.acount / 75);
    })
    .style("fill", "green")
    .style("stroke", "green");

      circle =
          g.selectAll('circle').data(outcome)
      .on("mouseover", function(d){
        var name = d.index,


  // highlight
 // try to draw a shape over the Map
      canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]);

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      var path       = d3.geoPath()
                     .projection(projection);

    var key  = name;
    var matched = county.features.filter(d => d.properties.COUNTY==key);

//   Let's create a path for each (new) county shape
  var hl = gMap.selectAll(".select")
    .data(matched, d => d.properties.COUNTY);

  hl.enter().append("path")
      .attr("class", "select")
      .attr("d", path);

  hl.exit().remove();


          tooltip
              .style("left", d3.event.pageX + toolx + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html(d.index + "<br/> AD Contraband Found:" + d.acount)
        })
    })

    d3.select('#bO').on("click", function(){
      updateMap(gMap, outcome, 0);
    var circle = g.selectAll('circle').data(outcome).transition()
    .duration(500).attr("cx", function(d){
      return x(d.White);
    })
    .attr("cy", function(d){
      return y(d.Black);
    })
    .attr("r", function(d){
      return  2 + (d.bcount / 150);
    })
    .style("fill", "orange")
    .style("stroke", "orange");

      circle =
          g.selectAll('circle').data(outcome)
      .on("mouseover", function(d){
        var name = d.index,


  // highlight
 // try to draw a shape over the Map
      canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]);

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      var path       = d3.geoPath()
                     .projection(projection);

    var key  = name;
    var matched = county.features.filter(d => d.properties.COUNTY==key);

//   Let's create a path for each (new) county shape
  var hl = gMap.selectAll(".select")
    .data(matched, d => d.properties.COUNTY);

  hl.enter().append("path")
      .attr("class", "select")
      .attr("d", path);

  hl.exit().remove();


          tooltip
              .style("left", d3.event.pageX + toolx + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html(d.index + "<br/> BD Contraband Found:" + d.bcount)
        })
  })
      }




 function createMap(g, outcome, county){
      let canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]),

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      path       = d3.geoPath()
                     .projection(projection);

//   Let's create a path for each (new) county shape
  g.selectAll(".county")
    .data(county.features)
    .enter().append("path")
      .attr("class", "county")
      .attr("d", path);

        g.append("g")
    .attr("class", "legendO")
    .attr("transform", "translate(285,20)")
    .append("text")
    .attr("class", "axis--map--captionO")
    .attr("y", -16);

  updateMap(g, outcome, 0);

    }

    function updateMap(g, outcome, i){
      var data     = outcome.map(d => [d.Black, d.Hispanic, d.Asian, d.White, d.index]),
      maxCount = d3.max(data, d => d[i]-d[3]),
      minCount = d3.min(data, d => d[i]-d[3]),
      meanCount = d3.mean(data, d => d[i]-d[3]),
      devCount = d3.deviation(data, d => d[i]-d[3]),
//       steps    = 3,
      color = d3.scaleQuantile()
  .domain([-5, -2 * devCount ,2 * devCount, 5])
  .range(['IndianRed', 'LightGrey', 'DarkTurquoise' ]);

  var x = d3.scaleQuantile()
          .domain(([-5, -2 , 2   ,5])).range([-100, -40 , 40 , 100]);
// var x = d3.scaleLinear()
//           .domain([minCount, maxCount])
//       .rangeRound([-100,203]);

//       var x = d3.scaleQuantile().domain([minCount, meanCount - (2 * devCount), meanCount, meanCount + (2 * devCount), maxCount].range(['orange', 'white','blue']))


      var f = d3.precisionRound(minCount, maxCount);


// console.log(data);
  counties = g.selectAll(".county")
                  .data(data, d => (d[4]?d[4]:d.properties.COUNTY));

  counties
    .transition().duration(300)
    .style("fill", d => color(d[i]-d[3]));

     counties.exit()
      .transition().duration(300)
      .style("fill", "none");
  var legend   = d3.select(".legendO");
   // For updating the legends, we get all the 'rect' shapes, and
  // perform an invert map to get the ranges for each color.
  let boxes = legend.selectAll("rect")
    .data(color.range().map(function(d) {

        d = color.invertExtent(d);
        if (d[0]==null) d[0] = x.domain()[0];
        if (d[1]==null) d[1] = x.domain()[1];

        return d;
      }));

  //   // We then create/update all boxes to the appropriate size and color
  boxes
    .enter().append("rect")
    .merge(boxes)
      .attr("height", 10)
      .attr("x", d => x(d[0]))
      .attr("width", d => (x(d[1]) - x(d[0])))
      .attr("fill", d => color(d[0]));

  // Update the tick values
  legend.call(d3.axisBottom(x)
//       .ticks(4)
      .tickSize(10,0)
      .tickValues([-5, -2* devCount, 2* devCount, 5 ])
      .tickFormat(d3.format(".2f")))
      .select(".domain")
      .remove();

       var Category = ['Black', 'Hispanic', 'Asian', 'White'];
  // ... and the title of the legend box
  legend.select(".axis--map--captionO")
    .attr("x", x.range()[0])
    .attr('y', -7)
    .text(`Difference between Hit Rates for ${Category[i]} and White Drivers`);
    }

}


var thresh_url = "https://raw.githubusercontent.com/jkastelan/DAA2018_jlk635/master/thresh.json";

var county_URLT = "https://raw.githubusercontent.com/TNRIS/tx.geojson/master/counties/tx_counties.geojson";

d3.queue()
.defer(d3.json, thresh_url)
.defer(d3.json, county_URLT).
await(createChartT)


function createChartT(error, threshold, county){

  var margin = {'left': 40, 'right': 30,
               'top':10, 'bottom': 20}

  var svg = d3.select('#scatterSvgT').append('svg')
.style("width", 1200)
.style("height", 600);
  var toolx = 150;

  var gChart = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var gMap   = svg.append("g")
                  .attr("transform", "translate(550, 0)");


  createMap(gMap, threshold, county);
  createScatter(gChart,threshold, county);


  function createScatter(g, threshold, county){
      var height = 500;
      var width = 1000;

      var x = d3.scaleLinear().domain([0, 0.8]).range([0, 500]);
      var y = d3.scaleLinear().domain([0, 0.8]).range([500, 0]);

      var xAxis = d3.axisBottom(x)
      var yAxis = d3.axisLeft(y)

      var tooltip = d3.select("#scatterSvgT")
        .append("div")
        .attr("class", "tooltip");



    var circle = g.selectAll('circle').data(threshold).enter()
        .append('circle').attr("cx", function(d){
            return x(d.White_Thresh);
    })
    .attr("cy", function(d){
        return y(d.Black_Thresh);
    })
    .attr("r", function(d){
      return  2 + (d.Black_Search_N / 200);
    })
    .style('fill', 'orange');


circle =
          g.selectAll('circle').data(threshold)
      .on("mouseover", function(d){

  var name = d.County,


  // highlight
 // try to draw a shape over the Map
      canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]);

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      var path       = d3.geoPath()
                     .projection(projection);

    var key  = name;
    var matched = county.features.filter(d => d.properties.COUNTY==key);

//   Let's create a path for each (new) county shape
  var hl = gMap.selectAll(".select")
    .data(matched, d => d.properties.COUNTY);

  hl.enter().append("path")
      .attr("class", "select")
      .attr("d", path);

  hl.exit().remove();



          tooltip
              .style("left", d3.event.pageX + toolx + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html(d.County + "<br/> Minorities Searched: " +  d.Black_Search_N)
        })
    g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)

    g.append("g")
      .attr("class", "y axis")
      .call(yAxis)

    // text function
var Text = g.append('text')
 .attr("class", "color-bar-label")
  .attr("x", 200)
  .attr('y', 550)
  .attr('font-weight', 'bold')
  .text("White Search Threshold")
//  console.log(byCuisine)
   g.exit().style("opacity", 0)
//  console.log(d => )

    var Text = g.append('text')
 .attr("class", "color-bar-label")
  .attr("x", -300)
  .attr('y', -25)
  .attr('font-weight', 'bold')
  .attr('transform', 'rotate(-90)')
  .text("Minority Search Threshold")
//  console.log(byCuisine)
   g.exit().style("opacity", 0)
//  console.log(d => )

    var line = g.append("line")
            .attr("x1", 0)
            .attr("y1", 500)
            .attr("x2", 500)
            .attr("y2", 0)
    .attr("stroke-width", 2)
    .attr("stroke-dasharray", "5")
    .attr("stroke", 'black');

      d3.select('#hT').on("click", function(){
       updateMap(gMap, threshold, 1);
    var circle = g.selectAll('circle').data(threshold)
    .transition().duration(500)
    .attr("cx", function(d){
      return x(d.White_Thresh);
    })
    .attr("cy", function(d){
      return y(d.Hispanic_Thresh);
    })
    .attr("r", function(d){
      return  2 + (d.Hispanic_Search_N / 350);
    })
    .style("fill", "purple")
    .style("stroke", "purple");


    circle =
          g.selectAll('circle').data(threshold)
      .on("mouseover", function(d){
      var name = d.County,


  // highlight
 // try to draw a shape over the Map
      canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]);

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      var path       = d3.geoPath()
                     .projection(projection);

    var key  = name;
    var matched = county.features.filter(d => d.properties.COUNTY==key);

//   Let's create a path for each (new) county shape
  var hl = gMap.selectAll(".select")
    .data(matched, d => d.properties.COUNTY);

  hl.enter().append("path")
      .attr("class", "select")
      .attr("d", path);

  hl.exit().remove();


          tooltip
              .style("left", d3.event.pageX + toolx + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html(d.County  + "<br/> Minorities Searched: " +  d.Hispanic_Search_N)
        })
      })


    d3.select('#aT').on("click", function(){
      updateMap(gMap, threshold, 2);
    var circle = g.selectAll('circle').data(threshold).
    transition().duration(500).attr("cx", function(d){
      return x(d.White_Thresh);
    })
    .attr("cy", function(d){
      return y(d.Asian_Thresh);
    })
    .attr("r", function(d){
      return  2 + (d.Asian_Search_N / 50);
    })
    .style("fill", "green")
    .style("stroke", "green");

      circle =
          g.selectAll('circle').data(threshold)
      .on("mouseover", function(d){
        var name = d.County,


  // highlight
 // try to draw a shape over the Map
      canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]);

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      var path       = d3.geoPath()
                     .projection(projection);

    var key  = name;
    var matched = county.features.filter(d => d.properties.COUNTY==key);

//   Let's create a path for each (new) county shape
  var hl = gMap.selectAll(".select")
    .data(matched, d => d.properties.COUNTY);

  hl.enter().append("path")
      .attr("class", "select")
      .attr("d", path);

  hl.exit().remove();


          tooltip
              .style("left", d3.event.pageX + toolx + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html(d.County  + "<br/> Minorities Searched: " +  d.Asian_Search_N)
        })
    })

    d3.select('#bT').on("click", function(){
      updateMap(gMap, threshold, 0);
    var circle = g.selectAll('circle').data(threshold).transition()
    .duration(500).attr("cx", function(d){
      return x(d.White_Thresh);
    })
    .attr("cy", function(d){
      return y(d.Black_Thresh);
    })
    .attr("r", function(d){
      return  2 + (d.Black_Search_N / 200);
    })
    .style("fill", "orange")
    .style("stroke", "orange");

      circle =
          g.selectAll('circle').data(threshold)
      .on("mouseover", function(d){
        var name = d.County,


  // highlight
 // try to draw a shape over the Map
      canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]);

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      var path       = d3.geoPath()
                     .projection(projection);

    var key  = name;
    var matched = county.features.filter(d => d.properties.COUNTY==key);

//   Let's create a path for each (new) county shape
  var hl = gMap.selectAll(".select")
    .data(matched, d => d.properties.COUNTY);

  hl.enter().append("path")
      .attr("class", "select")
      .attr("d", path);

  hl.exit().remove();


          tooltip
              .style("left", d3.event.pageX + toolx + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html(d.County  + "<br/> Minorities Searched: " +  d.Black_Search_N)
        })
  })
      }




 function createMap(g, threshold, county){
      let canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]),

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      path       = d3.geoPath()
                     .projection(projection);

//   Let's create a path for each (new) county shape
  g.selectAll(".county")
    .data(county.features)
    .enter().append("path")
      .attr("class", "county")
      .attr("d", path);

     g.append("g")
    .attr("class", "legendT")
    .attr("transform", "translate(285,20)")
    .append("text")
    .attr("class", "axis--map--captionT")
    .attr("y", -16);

  updateMap(g, threshold, 0);

    }

    function updateMap(g, threshold, i){
      var data     = threshold.map(d => [d.Black_Thresh, d.Hispanic_Thresh, d.Asian_Thresh, d.White_Thresh, d.County]),
      maxCount = d3.max(data, d => (d[i] - d[3])),
      minCount = d3.min(data, d => (d[i]-d[3])),
//       meanCount = d3.mean(data, d => (d[i]-d[3])),
//       devCount = d3.deviation(data, d => (d[i]-d[3])),
      meanCount = d3.mean(data, d => d[i]-d[3]),
      devCount = d3.deviation(data, d => d[i]-d[3]),
//       steps    = 3,
      color = d3.scaleQuantile()
  .domain([-5, -2 * devCount ,2 * devCount, 5])
  .range(['IndianRed', 'LightGrey', 'DarkTurquoise' ]);

  var x = d3.scaleQuantile()
          .domain(([-5, -2 , 2   ,5])).range([-100, -40 , 40 , 100]);

//       var x = d3.scaleQuantile().domain([minCount, meanCount - (2 * devCount), meanCount, meanCount + (2 * devCount), maxCount].range(['orange', 'white','blue']))


      var f = d3.precisionRound(minCount, maxCount);

// console.log(data);
  counties = g.selectAll(".county")
                  .data(data, d => (d[4]?d[4]:d.properties.COUNTY));

  counties
    .transition().duration(300)
    .style("fill", d => color((d[i] -d[3])));
//     }
  counties.exit()
      .transition().duration(300)
      .style("fill", "none");
  var legend   = d3.select(".legendT");
   // For updating the legends, we get all the 'rect' shapes, and
  // perform an invert map to get the ranges for each color.
  let boxes = legend.selectAll("rect")
    .data(color.range().map(function(d) {

        d = color.invertExtent(d);
        if (d[0]==null) d[0] = x.domain()[0];
        if (d[1]==null) d[1] = x.domain()[1];

        return d;
      }));

  //   // We then create/update all boxes to the appropriate size and color
  boxes
    .enter().append("rect")
    .merge(boxes)
      .attr("height", 10)
      .attr("x", d => x(d[0]))
      .attr("width", d => (x(d[1]) - x(d[0])))
      .attr("fill", d => color(d[0]));

  // Update the tick values
  legend.call(d3.axisBottom(x)
//       .ticks(4)
      .tickSize(10,0)
      .tickValues([-5, -2* devCount, 2* devCount, 5 ])
      .tickFormat(d3.format(".2f")))
      .select(".domain")
      .remove();

       var Category = ['Black', 'Hispanic', 'Asian'];
  // ... and the title of the legend box
  legend.select(".axis--map--captionT")
    .attr("x", x.range()[0])
    .attr('y', -7)
    .text(`Difference between Search Threshold ${Category[i]} and White Drivers`);
    }


}

var vod_url = "https://raw.githubusercontent.com/jkastelan/DAA2018_jlk635/master/veil.json";

var county_URLV = "https://raw.githubusercontent.com/TNRIS/tx.geojson/master/counties/tx_counties.geojson";

d3.queue()
.defer(d3.json, vod_url)
.defer(d3.json, county_URLV).
await(createChartV)


function createChartV(error, vod, county){

  var margin = {'left': 40, 'right': 30,
               'top':10, 'bottom': 20}

  var svg = d3.select('#scatterSvgV').append('svg')
.style("width", 1200)
.style("height", 600);
  var toolx = 150;

  var gChart = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var gMap   = svg.append("g")
                  .attr("transform", "translate(550, 0)");


  createMap(gMap, vod, county);
  createScatter(gChart,vod, county);


  function createScatter(g, vod, county){
      var height = 500;
      var width = 1000;

      var x = d3.scaleLinear().domain([0, 0.3]).range([0, 500]);
      var y = d3.scaleLinear().domain([0, 0.3]).range([500, 0]);

      var xAxis = d3.axisBottom(x)
      var yAxis = d3.axisLeft(y)



      var tooltip = d3.select("#scatterSvgV")
        .append("div")
        .attr("class", "tooltip");



    var circle = g.selectAll('circle').data(vod).enter()
        .append('circle').attr("cx", function(d){
            return x(d.Black[0]);
    })
    .attr("cy", function(d){
        return y(d.Black[1]);
    })
    .attr("r", function(d){
      return 5 + (d.Black_Pop * 0.0001);
    })
    .style('fill', 'orange');


circle =
          g.selectAll('circle').data(vod)
      .on("mouseover", function(d){
       var name = d.County,


  // highlight
 // try to draw a shape over the Map
      canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]);

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      var path       = d3.geoPath()
                     .projection(projection);

    var key  = name;
    var matched = county.features.filter(d => d.properties.COUNTY==key);

//   Let's create a path for each (new) county shape
  var hl = gMap.selectAll(".select")
    .data(matched, d => d.properties.COUNTY);

  hl.enter().append("path")
      .attr("class", "select")
      .attr("d", path);

  hl.exit().remove();


          tooltip
              .style("left", d3.event.pageX + toolx + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html(d.County + "<br/> Minorities Observed: " +  d.Black_Pop)
        })
    g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)

    g.append("g")
      .attr("class", "y axis")
      .call(yAxis)

    // text function
var Text = g.append('text')
 .attr("class", "color-bar-label")
  .attr("x", 200)
  .attr('y', 550)
  .attr('font-weight', 'bold')
  .text("Before Dark Stop Ratio")
//  console.log(byCuisine)
   g.exit().style("opacity", 0)
//  console.log(d => )

    var Text = g.append('text')
 .attr("class", "color-bar-label")
  .attr("x", -300)
  .attr('y', -25)
  .attr('font-weight', 'bold')
  .attr('transform', 'rotate(-90)')
  .text("After Dark Stop Ratio")
//  console.log(byCuisine)
   g.exit().style("opacity", 0)
//  console.log(d => )

    var line = g.append("line")
            .attr("x1", 0)
            .attr("y1", 500)
            .attr("x2", 500)
            .attr("y2", 0)
    .attr("stroke-width", 2)
    .attr("stroke-dasharray", "5")
    .attr("stroke", 'black');

      d3.select('#hV').on("click", function(){
       updateMap(gMap, vod, 1);
       var x = d3.scaleLinear().domain([0, 0.9]).range([0, 500]);
      var y = d3.scaleLinear().domain([0, 0.9]).range([500, 0]);
        var xAxis = d3.axisBottom(x)
      var yAxis = d3.axisLeft(y)

        g.selectAll("g").remove();
          g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)

    g.append("g")
      .attr("class", "y axis")
      .call(yAxis)

    var circle = g.selectAll('circle').data(vod)
    .transition().duration(500)
    .attr("cx", function(d){
      return x(d.Hispanic[0]);
    })
    .attr("cy", function(d){
      return y(d.Hispanic[1]);
    })
    .attr("r", function(d){
      return  2 + (d.Hispanic_Pop * 0.0001);
    })
    .style("fill", "purple")
    .style("stroke", "purple");


    circle =
          g.selectAll('circle').data(vod)
      .on("mouseover", function(d){
      var name = d.County,


  // highlight
 // try to draw a shape over the Map
      canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]);

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      var path       = d3.geoPath()
                     .projection(projection);

    var key  = name;
    var matched = county.features.filter(d => d.properties.COUNTY==key);

//   Let's create a path for each (new) county shape
  var hl = gMap.selectAll(".select")
    .data(matched, d => d.properties.COUNTY);

  hl.enter().append("path")
      .attr("class", "select")
      .attr("d", path);

  hl.exit().remove();

          tooltip
              .style("left", d3.event.pageX + toolx + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html(d.County  + "<br/> Minorities Observed: " +  d.Hispanic_Pop)
        })
      })


    d3.select('#aV').on("click", function(){
      updateMap(gMap, vod, 2);
      var x = d3.scaleLinear().domain([0, 0.1]).range([0, 500]);
      var y = d3.scaleLinear().domain([0, 0.1]).range([500, 0]);
        var xAxis = d3.axisBottom(x)
      var yAxis = d3.axisLeft(y)

        g.selectAll("g").remove();
          g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)

    g.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    var circle = g.selectAll('circle').data(vod).
    transition().duration(500).attr("cx", function(d){
      return x(d.Asian[0]);
    })
    .attr("cy", function(d){
      return y(d.Asian[1]);
    })
    .attr("r", function(d){
      return  5 + (d.Asian_Pop * 0.0001);
    })
    .style("fill", "green")
    .style("stroke", "green");

      circle =
          g.selectAll('circle').data(vod)
      .on("mouseover", function(d){
        var name = d.County,


  // highlight
 // try to draw a shape over the Map
      canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]);

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      var path       = d3.geoPath()
                     .projection(projection);

    var key  = name;
    var matched = county.features.filter(d => d.properties.COUNTY==key);

//   Let's create a path for each (new) county shape
  var hl = gMap.selectAll(".select")
    .data(matched, d => d.properties.COUNTY);

  hl.enter().append("path")
      .attr("class", "select")
      .attr("d", path);

  hl.exit().remove();

          tooltip
              .style("left", d3.event.pageX + toolx + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html(d.County  + "<br/> Minorities Searched: " +  d.Asian_Pop)
        })
    })

 d3.select('#wV').on("click", function(){
      updateMap(gMap, vod, 3);
   var x = d3.scaleLinear().domain([0, 1]).range([0, 500]);
      var y = d3.scaleLinear().domain([0, 1]).range([500, 0]);
        var xAxis = d3.axisBottom(x)
      var yAxis = d3.axisLeft(y)

        g.selectAll("g").remove();
          g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)

    g.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    var circle = g.selectAll('circle').data(vod).
    transition().duration(500).attr("cx", function(d){
      return x(d.White[0]);
    })
    .attr("cy", function(d){
      return y(d.White[1]);
    })
    .attr("r", function(d){
      return  5 + (d.White_Pop * 0.0001);
    })
    .style("fill", "green")
    .style("stroke", "green");

      circle =
          g.selectAll('circle').data(vod)
      .on("mouseover", function(d){
        var name = d.County,


  // highlight
 // try to draw a shape over the Map
      canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]);

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      var path       = d3.geoPath()
                     .projection(projection);

    var key  = name;
    var matched = county.features.filter(d => d.properties.COUNTY==key);

//   Let's create a path for each (new) county shape
  var hl = gMap.selectAll(".select")
    .data(matched, d => d.properties.COUNTY);

  hl.enter().append("path")
      .attr("class", "select")
      .attr("d", path);

  hl.exit().remove();

          tooltip
              .style("left", d3.event.pageX + toolx + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html(d.County  + "<br/> Minorities Searched: " +  d.White_Pop)
        })
    })

     d3.select('#bV').on("click", function(){
      updateMap(gMap, vod, 0);
    var circle = g.selectAll('circle').data(vod).transition()
    .duration(500).attr("cx", function(d){
      return x(d.Black[0]);
    })
    .attr("cy", function(d){
      return y(d.Black[1]);
    })
    .attr("r", function(d){
      return  5 + (d.Black_Pop * 0.0001);
    })
    .style("fill", "orange")
    .style("stroke", "orange");

      circle =
          g.selectAll('circle').data(vod)
      .on("mouseover", function(d){
        var name = d.County,


  // highlight
 // try to draw a shape over the Map
      canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]);

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      var path       = d3.geoPath()
                     .projection(projection);

    var key  = name;
    var matched = county.features.filter(d => d.properties.COUNTY==key);

//   Let's create a path for each (new) county shape
  var hl = gMap.selectAll(".select")
    .data(matched, d => d.properties.COUNTY);

  hl.enter().append("path")
      .attr("class", "select")
      .attr("d", path);

  hl.exit().remove();

          tooltip
              .style("left", d3.event.pageX + toolx + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html(d.County  + "<br/> Minorities Observed: " +  d.Black_Pop)
        })
  })
      }




 function createMap(g, vod, county){
      let canvasSize = [650, 650],
      projection = d3.geoMercator()
                     .scale(Math.pow(2, 10.66 + 0.50))
                     .center([-99.9018,31.9686])
                     .translate([canvasSize[0]/2.7, canvasSize[1]/2.5]),

// We create a path generator (which can take a set of points to generate a path)

// using the created projection.
      path       = d3.geoPath()
                     .projection(projection);

//   Let's create a path for each (new) county shape
  g.selectAll(".county")
    .data(county.features)
    .enter().append("path")
      .attr("class", "county")
      .attr("d", path);

     g.append("g")
    .attr("class", "legendV")
    .attr("transform", "translate(285,20)")
    .append("text")
    .attr("class", "axis--map--captionV")
    .attr("y", -16);

  updateMap(g, vod, 0);

    }

    function updateMap(g, threshold, i){
      var data     = vod.map(d => [(d.Black[0] - d.Black[1]), (d.Hispanic[0] - d.Hispanic[1]), (d.Asian[0] - d.Asian[1]), (d.White[0] - d.White[1]), d.County]),
      maxCount = d3.max(data, d => d[i]),
      minCount = d3.min(data, d => d[i]),
      meanCount = d3.mean(data, d => (d[i])),
      devCount = d3.deviation(data, d => (d[i])),
      //       steps    = 3,
      color = d3.scaleQuantile()
  .domain([-5, -2 * devCount ,2 * devCount, 5])
  .range(['DarkTurquoise', 'LightGrey',  'IndianRed']);

  var x = d3.scaleQuantile()
          .domain(([-5, -2 , 2   ,5])).range([-100, -40 , 40 , 100]);

//       var x = d3.scaleQuantile().domain([minCount, meanCount - (2 * devCount), meanCount, meanCount + (2 * devCount), maxCount].range(['orange', 'white','blue']))


      var f = d3.precisionRound(minCount, maxCount);

// console.log(data);
  counties = g.selectAll(".county")
                  .data(data, d => (d[4]?d[4]:d.properties.COUNTY));

  counties
    .transition().duration(300)
    .style("fill", d => color(d[i]));
//     }
  counties.exit()
      .transition().duration(300)
      .style("fill", "none");
  var legend   = d3.select(".legendV");
   // For updating the legends, we get all the 'rect' shapes, and
  // perform an invert map to get the ranges for each color.
  let boxes = legend.selectAll("rect")
    .data(color.range().map(function(d) {

        d = color.invertExtent(d);
        if (d[0]==null) d[0] = x.domain()[0];
        if (d[1]==null) d[1] = x.domain()[1];

        return d;
      }));

  //   // We then create/update all boxes to the appropriate size and color
  boxes
    .enter().append("rect")
    .merge(boxes)
      .attr("height", 10)
      .attr("x", d => x(d[0]))
      .attr("width", d => (x(d[1]) - x(d[0])))
      .attr("fill", d => color(d[0]));

  // Update the tick values
  legend.call(d3.axisBottom(x)
//       .ticks(4)
      .tickSize(10,0)
      .tickValues([-5, -2* devCount, 2* devCount, 5 ])
      .tickFormat(d3.format(".2f")))
      .select(".domain")
      .remove();

       var Category = ['Black', 'Hispanic', 'Asian', 'White'];
  // ... and the title of the legend box
  legend.select(".axis--map--captionV")
    .attr("x", x.range()[0])
    .attr('y', -7)
    .text(`Difference between ${Category[i]} Before and After Dark Stop Ratio`);
    }


}
