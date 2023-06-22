export const stairsIn20 = (stairs:number[][]): number => {
     return stairs.flat().reduce((a, b) => a + b, 0) * 20;
   }