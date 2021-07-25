// select svg container first
const svg = d3.select('svg');

d3.json('menu.json').then(data => {

  const y = d3.scaleLinear()
    .domain([0, 1000])
    .range([0, 500]);

  const x = d3.scaleBand()
    .domain(data.map(item => item.name))
    .range([0, 500])
    .paddingInner(.05)
    .paddingOuter(.05)


  // console.log(x('veg curry'));
  // console.log(x('veg pasta'));
  // console.log(x.bandwidth());
  // console.log(data.map(item => item.name));

  // console.log(y(400));
  // console.log(y(00));
  // console.log(y(900));

  // join the data to rects
  const rects = svg.selectAll('rect')
    .data(data)

  rects.attr('width', x.bandwidth)
    .attr('height', d => y(d.orders))
    .attr('fill', 'orange')
    .attr('x', d => x(d.name));

  // append the enter selection to the DOM
  rects.enter()
    .append('rect')
      .attr('width', x.bandwidth)
      .attr('height', d => y(d.orders))
      .attr('fill', 'orange')
      .attr('x', d => x(d.name))
})