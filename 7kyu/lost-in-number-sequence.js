// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.


//  single array of nums, always pos, no special chars
// array an integer

const findDeletedNumber = (arr, mixArr) => arr.filter(e => !mixArr.includes(e))[0];



console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [3,2,4,5, 6,7,8,1,9]))