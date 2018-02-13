var data = [203, 198, 405, 303, 322]

// document.getElementById('graph').innerHTML = 'Hello Guy'

// d3.select('#graph').html('Hi Nick')

// d3.select('#graph').html('Hi Guy').style('background-color', '#FFCCFF')

var x = d3.scale.linear()
  .domain([0, d3.max(data)])
  .range([0, 280])


d3.select('.chart')
  .selectAll('div')
  .data(data)
  .enter().append('div')
  .style('width', function(d) {return x(d) + 'px'})
  .text(function(d) {return d})
