import { arraysExample } from "./arrays-example";
import { mergeSortedArray } from "./merge-sorted-arrays";
import { reverseString } from "./reverse-string";
import "./style.css";
import typescriptLogo from "./typescript.svg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Algorithms & Data Structures</h1>
  </div>
`;

// arraysExample();
// reverseString("hello"); // olleh

console.log(mergeSortedArray([1, 5, 10, 100], [3, 7, 20]));
