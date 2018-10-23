//Level 1: D3 dabbler

//** Create the canvas size*** dimension setup
    var svgWidth = 700;
    var svgHeight = 500;
    var margin = {top: 20, bottom: 60, right: 20, left: 50};
    var height = svgHeight - margin.top - margin.bottom;
    var width = svgWidth - margin.left - margin.right;

//** Append svg to the body and group
var svg = d3
    .select ("#scatter")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);   
    

var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

//********************************************************************* */
//*append a div to the body to create tooltips, assign it a class. *** is it needed????
//====================================================================================

var toolTip = d3.select (".scatter")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
//*************************************************************************** */
    
//** Import the data**** use d3.csv function to pull data 
//==========================================================================
d3.csv("/data/data.csv").then(function(healthData) {
    //console.log(data);

    //Step 1: Parse Data/Cast as numbers
    //====================================
    healthData.forEach(function(data) {
        data.age = +data.age;
        data.smokes = +data.smokes;
    });

//Step 2: create scales
//===================================
//scale x to chart width
var xScale = d3.scaleLinear()
    .domain([30, d3.max(healthData, d => d.age)]) // is it correct?
    .range([0, width]);

//scale y to chart height
var yScale = d3.scaleLinear()
    .domain([8, d3.max(healthData, d => d.smokes)]) // is it correct?
    .range([height, 0]);

//Step 3: Create axes function
//=====================================
var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);

// Step 4: Append Axes to the chart
//=====================================
//set x to the bottom of the chart( add to html)
chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxis);

// set y to the y axis (add to html)
chartGroup.append("g")
    .call(yAxis);

// Step 5: Create Circles
// ===============================================
var circlesGroup = chartGroup.selectAll("circle")
    .data(healthData)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d.age))
    .attr("cy", d => yScale(d.smokes))
    .attr("r", "14")
    .attr("fill", "blue")
    .attr("opacity", ".5");

//Step 6: initialize Tooltip
//========================================
var toolTip = d3.tip()
    .attr("class", "tooltip")
    .offset([80, -60])
    .html(function(d) {

        return (`${d.state}<br>Age: ${d.age}<br>Smokes: ${d.smokes}`);
    
    }); 
 
// Step 7: Create tooltip in the chart
// ==============================
chartGroup.call(toolTip);

// Step 8: Create event listeners to display and hide the tooltip
//================================================================
circlesGroup.on("mouseover", function(data) {
     toolTip.show(data, this);

})
// onmouseout event
.on("mouseout", function(data, index) {
    toolTip.hide(data);
        
    });

//*********************************************************      
// Appending a label to each data point
//============================================
  chartGroup.append("text")
  .style("text-anchor", "middle")
  .style("font-size", "12px")
  .selectAll("tspan")
  .data(healthData)
  .enter()
  .append("tspan")
      .attr("x", function(data) {
          return xScale(data.age - 0);
      })
      .attr("y", function(data) {
          return yScale(data.smokes - 0.2);
      })
      .text(function(data) {
          return data.abbr
      });
//*********************************************************************** */
      
// Create axes labels
//===============================================
      chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left )
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .attr("class", "axisText")
        .text("Smokes(%)");
  
      chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
        .attr("class", "axisText")
        .text("Age (Median)");
    });
