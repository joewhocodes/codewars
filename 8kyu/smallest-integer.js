
// Given an array of integers your solution should find the smallest integer.




class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args
    }
  }

//   console.log(SmallestIntegerFinder.findSmallestInt(2))

   const findSmallestInt2 = args => {
      return args.sort((a, b) => a - b)[0]
    }

    console.log(findSmallestInt2([3, 4, 5, 1]))