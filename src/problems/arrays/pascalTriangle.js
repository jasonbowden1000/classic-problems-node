function pascalTriangle(size) {
  let triangle = [];

  for (let i = 0; i <= size; ++i) {
    let row = [];
    for (let j = 0; j <= i; ++j) {
      let el = j > 0 && i > j ? triangle[i - 1][j] + triangle[i - 1][j - 1] : 1;
      row.push(el);
    }
    triangle.push(row);
  }

  return triangle;
}

module.exports = pascalTriangle;
