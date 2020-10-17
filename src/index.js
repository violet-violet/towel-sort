
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if ((arguments.length === 0) || (matrix.length === 0)) {
      return [];
  }

  let result = matrix.reduce(function (acc, item, index) {
      if ((index % 2) !== 0) {
          item = item.reverse();            
      } 
      acc = acc.concat(item);
      return acc;
  }, []);

  return result;
}
