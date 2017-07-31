/*
 * Swap the bits of an integer
 *
 * Useful skills:
 * - getting a specific bit
 *     Place significant bit in rightmost position by popping off the number of places
 *     Use a simple mask to determine the rightmost bit
 * - using XOR to invert masked bit
 */

function swap(num, i, j) {
  let bitA = num >> i & 1;
  let bitB = num >> j & 1;

  if (bitA !== bitB) {
    num ^= 1 << j | 1 << i;
  }

  return num;
}

module.exports = swap;