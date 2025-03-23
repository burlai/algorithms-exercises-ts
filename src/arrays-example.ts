export const arraysExample = () => {
  const myArray = ["a", "b", "c", "d"];

  //4*4 = 16 bytes of storage

  // access (get element by index)
  console.log("access:", myArray[2]); // O(1) - constant time. It doesn't matter how big the array is, it will always take the same amount of time to access an element by index. Why? Because arrays are stored in memory in a contiguous block of memory. If we know the memory address of the first element, we can calculate the memory address of any element by index. For example, if the first element is stored at memory address 1000 and each element takes 4 bytes of storage, then the second element is stored at memory address 1004, the third element is stored at memory address 1008, and so on.

  // push (add element to the end of the array)
  myArray.push("f");
  console.log("push:", myArray); // O(1) - constant time. It doesn't matter how big the array is, it will always take the same amount of time to add an element to the end of the array.

  // pop (remove element from the end of the array)
  myArray.pop(); // O(1) - constant time. It doesn't matter how big the array is, it will always take the same amount of time to remove an element from the end of the array.
  myArray.pop();
  console.log("pop:", myArray);

  // with push and pop we are not looping through the array, we are just adding or removing the last element.

  // unshift (add element to the beginning of the array)
  myArray.unshift("h"); // O(n) - linear time. The bigger the array, the longer it will take to add an element to the beginning of the array.
  console.log("unshift:", myArray);
  // with unshift we are looping through the array to move all elements one position to the right. Why? Because arrays are stored in memory in a contiguous block of memory. If we want to add an element to the beginning of the array, we need to move all elements one position to the right.

  // splice (add element to the middle of the array)
  myArray.splice(2, 0, "string at the middle"); // O(n) - linear time. The bigger the array, the longer it will take to add an element to the middle of the array.
  console.log("splice:", myArray);
};

// In the context of computer memory and arrays, "contiguous" (укр: "суміжні", pl: "przylegające") means that the elements of the array are stored in a single, continuous block of memory. This means that each element is placed directly next to the previous element in memory, with no gaps in between.

// Why Contiguous Memory Matters
// Efficient Access:

// Because the elements are stored in a continuous block, accessing any element by its index is very efficient. The memory address of any element can be calculated directly using the base address of the array and the size of each element.

// For example, if the base address of the array is 1000 and each element takes 4 bytes, the address of the element at index 2 can be calculated as 1000 + 2 * 4 = 1008.

// Cache Performance:
// Modern CPUs use a memory cache to speed up access to frequently used data. Contiguous memory storage improves cache performance because accessing one element often loads nearby elements into the cache, making subsequent accesses faster.

// Memory Management:
// Contiguous memory allocation simplifies memory management because the entire array can be allocated and deallocated in one operation.

// Example
// Consider an array of integers:
// const myArray = [10, 20, 30, 40];

// In memory, this array might be stored as follows (assuming each integer takes 4 bytes):
// Memory Address:  1000  1004  1008  1012
// Values:          10    20    30    40

// Here, the elements 10, 20, 30, and 40 are stored in contiguous memory locations, with each element directly following the previous one.

// Conclusion
// Contiguous memory storage is a fundamental concept in computer science that enables efficient access and manipulation of array elements. It leverages the predictable memory layout to optimize performance and simplify memory management.
