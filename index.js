const data = [
  { width: 200, height: 100, fill: 'red' },
  { width: 100, height: 50, fill: 'pink' },
  { width: 50, height: 25, fill: 'blue' }
];

const svg = d3.select('svg');

// Join data to rects
const rects = svg
  .selectAll('rect')
  .data(data)

// add attrs to rects already in the DOm
rects
  .attr('width', (d) => d.width)
  .attr('height', (d) => d.height)
  .attr('width', (d) => d.width)
  .attr('height', (d) => d.height)
  .attr('fill', (d) => d.fill);

// append the enter selection to DOM
rects
  .enter()
  .append('rect')
  .attr('width', (d) => d.width)
  .attr('height', (d) => d.height)
  .attr('fill', (d) => d.fill);

console.log(rects);
