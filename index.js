const data = [
  {width: 200, height: 100, fill: 'red'}
]

const svg = d3.select('svg')

const rect = svg.select('rect')
  .data(data)
  .attr('width', (d, i, n)=> {
    console.log('data', data);
    console.log('d', d);
    console.log('i', i);
    console.log('n', n);
    return d.width
  })
  .attr('height', d => d.height)
  .attr('fill', d => d.fill)
