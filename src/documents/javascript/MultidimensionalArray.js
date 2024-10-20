import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.min.css";
import {
  SectionHeading,
  SectionSubHeading,
  SectionDescription,
  CodeSection,
} from "../../style/styled";

const MultidimensionalArray = () => {
  const usingFlat = `const myArr = [1,2,[3,4],['vishal',5]];
const newArr = myArr.flat();
console.log(newArr);

Output:  [1, 2, 3, 4, 'vishal', 5]


const myArr = [1,2,[3,4,[5,6]]];
const newArr = myArr.flat();
console.log(newArr);

Output: [1, 2, 3, 4, Array(2)]

//flat(depth)
//depth - Optional. How deep a nested array should be flattened. 
//Default is 1.

const newArr = myArr.flat(2); //deep nested
console.log(newArr);

Output: [1, 2, 3, 4, 5, 6]
`;

  const usingRecursion = `let finalArray = []
const convertArray = (array) => {
    array.forEach(element => {
        if(Array.isArray(element)){
            convertArray(element)
        } else {
            finalArray.push(element)
        }
    })
}
convertArray([1,2,[3,4,[5,6,[7,8]]]]);
console.log(finalArray);

Output: [1, 2, 3, 4, 5, 6, 7, 8]
`;

 const singleToMultiDimensionalArray = `
let givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayLength = givenArray.length/3;
let finalArray = [];
let k = 0;

for(let i = 0; i < arrayLength; i++){
    finalArray[i] = []; // This is important, else it won't create multidimensional elments.
    for(let j = 0; j < arrayLength; j++){
        finalArray[i][j] = givenArray[k++];
    }
}
console.log(finalArray);`;

  const sortTheMatrix = `
let givenArray = [[5,4,7],[1,3,8],[2,9,6]];
let arrayLength = givenArray.length;
let flatArray = givenArray.flat().sort();
let finalArray = [];
let k = 0;

for(let i = 0; i < arrayLength; i++){
    finalArray[i] = []; // This is important, else it won't create multidimensional elments.
    for(let j = 0; j < arrayLength; j++){
        finalArray[i][j] = flatArray[k++];
    }
}
console.log(finalArray);

Output: [[1, 2, 3],[4, 5, 6], [7, 8, 9]]

// To print it in matrix form
finalArray.forEach(item => {
    console.log(...item)
});
`;

  return (
    <>
      <SectionHeading>Problems based on Multidimensional Array</SectionHeading>
      <SectionSubHeading>1. Covert multi dimensional array into single dimensional array</SectionSubHeading>
      <SectionDescription>
        <b>Array flat():</b> 
         Create a new array with the sub-array elements concatenated
      </SectionDescription>
      <pre>
        <CodeSection
          className={"hljs"}
          dangerouslySetInnerHTML={{
            __html: hljs.highlight(usingFlat, {
              language: "javascript",
            }).value,
          }}
        ></CodeSection>
      </pre>
      <SectionDescription>
        <b>Using Recursion:</b> 
      </SectionDescription>
      <pre>
        <CodeSection
          className={"hljs"}
          dangerouslySetInnerHTML={{
            __html: hljs.highlight(usingRecursion, {
              language: "javascript",
            }).value,
          }}
        ></CodeSection>
      </pre>
      <SectionSubHeading>2. Convert single dimensional array to Multidimensional array</SectionSubHeading>
      <SectionDescription>
        <b>Input:</b>  [1, 2, 3, 4, 5, 6, 7, 8, 9]
        <br></br>
        <b>Output:</b> [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
      </SectionDescription>
      <pre>
        <CodeSection
          className={"hljs"}
          dangerouslySetInnerHTML={{
            __html: hljs.highlight(singleToMultiDimensionalArray, {
              language: "javascript",
            }).value,
          }}
        ></CodeSection>
      </pre>
      <SectionSubHeading>3. Sort the given matrix</SectionSubHeading>
      <SectionDescription>
         <b>Input:</b> <br></br>
                5   4   7<br></br>
                1   3   8<br></br>
                2   9   6<br></br>
      </SectionDescription>
      <pre>
        <CodeSection
          className={"hljs"}
          dangerouslySetInnerHTML={{
            __html: hljs.highlight(sortTheMatrix, {
              language: "javascript",
            }).value,
          }}
        ></CodeSection>
      </pre>    
      <SectionSubHeading>4. Rotate Matrix Clockwise by 1</SectionSubHeading>
      <SectionDescription>
          <b>Input:</b> <br></br>
          1   2   3<br></br>
          4   5   6<br></br>
          7   8   9<br></br>
          <b>Output:</b> <br></br>
          4   1   2<br></br>
          7   5   3<br></br>
          8   9   6<br></br>       
          https://www.geeksforgeeks.org/rotate-matrix-elements/
      </SectionDescription>
    </>
  );
};

export default MultidimensionalArray;
