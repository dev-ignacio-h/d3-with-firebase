const data = [
  {width: 200, height: 100, fill: 'red'},
  {width: 100, height: 50, fill: 'pink'},
  {width: 50, height: 25, fill: 'blue'},
]

const svg = d3.select('svg')

const rect = svg.selectAll('rect')
  .data(data)
  .attr('width', d => d.width)
  .attr('height', d => d.height)
  .attr('fill', d => d.fill)

console.log(rect);
