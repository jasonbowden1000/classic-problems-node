function pascalTriangle(size) {
  let triangle = [];

  for (let n = 0; n <= size; ++n) {
    let row = [];
    for (let k = 0; k <= n; ++k) {
      let el = k > 0 && n > k ? triangle[n - 1][k] + triangle[n - 1][k - 1] : 1;
      row.push(el);
    }
    triangle.push(row);
  }

  return triangle;
}



module.exports = pascalTriangle;
