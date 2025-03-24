export const reverseString = (str: string): string => {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "not a valid input";
  }

  const reversedArray = [];
  const itemsInArray = str.length - 1;

  for (let i = itemsInArray; i >= 0; i--) {
    reversedArray.push(str[i]);
  }

  console.log(reversedArray.join(""));

  return reversedArray.join("");
};

export const reverseString2 = (str: string): string => {
  return str.split("").reverse().join("");
};

export const reverseString3 = (str: string): string => {
  return [...str].reverse().join("");
};
