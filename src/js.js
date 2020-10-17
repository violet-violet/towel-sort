function towelSort (matrix) {
    if ((arguments.length === 0) || (matrix.length === 0)) {
        return [];
    }
    // console.log('Длина массива ', matrix.length);

    let result = matrix.reduce(function (acc, item, index) {
        if ((index % 2) !== 0) {
            item = item.reverse();            
        } 
        acc = acc.concat(item);
        return acc;
    }, []);

    return result;
}

// console.log('Получили: ',towelSort(), ', а должны были: []');
// console.log('Получили: ',towelSort([]), ', а должны были: []');
console.log('Получили: ',towelSort([
    [1, 2],
    [3, 4],
  ]), 'а должны были: [ 1, 2, 4, 3 ]');
console.log('Получили: ',towelSort([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]), ', а должны были: [ 1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12, 16, 15, 14, 13 ]');
console.log('Получили: ',towelSort([
    [1, 2, 4],
    [5, 6, 7, 8],
    [9, 12],
]), ', а должны были: [ 1, 2, 4, 8, 7, 6, 5, 9, 12 ]');
