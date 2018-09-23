function pascalRow(n) {
  let row = [1];

  for (let k = 0; k < n; ++k) {
    row.push(row[k] * (n - k) / (k + 1));
  }

  return row;
}

module.exports = pascalRow;
