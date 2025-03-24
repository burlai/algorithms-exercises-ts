export const mergeSortedArray = (
  arrayOne: Array<number>,
  arrayTwo: Array<number>
) => {
  const mergedArray: Array<number> = [];

  let arrayOneIndex = 1;
  let arrayTwoIndex = 1;

  let arrayOneItem = arrayOne[0];
  let arrayTwoItem = arrayTwo[0];

  // checking inputs arrays
  if (arrayOne.length === 0) {
    return arrayTwo;
  }

  if (arrayTwo.length === 0) {
    return arrayOne;
  }

  while (arrayOneItem || arrayTwoItem) {
    if (!arrayTwoItem || arrayOneItem < arrayTwoItem) {
      mergedArray.push(arrayOneItem);
      arrayOneItem = arrayOne[arrayOneIndex];
      arrayOneIndex++;
    } else {
      mergedArray.push(arrayTwoItem);
      arrayTwoItem = arrayTwo[arrayTwoIndex];
      arrayTwoIndex++;
    }
  }

  return mergedArray;
};
