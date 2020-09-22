module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    let result = [depth];

    for (let element of arr) {
      if (Array.isArray(element)) {
        result.push(this.calculateDepth(element, depth + 1));
      }
    }

    return Math.max(...result);
  }
};