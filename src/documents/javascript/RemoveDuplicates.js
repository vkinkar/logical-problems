import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.min.css";
import {
  SectionHeading,
  SectionSubHeading,
  SectionDescription,
  CodeSection,
} from "../../style/styled";

const RemoveDuplicates = () => {
  const removeDuplicatesUsingSet = `let arr = [1,3,1,2,4,10,99,2,4,99];
console.log(...new Set(arr));

Output: 1 3 2 4 10 99`;

  const removeDuplicatesUsingForEach = `let arr = [1,3,1,2,4,10,99,2,4,99];
let unique = [];
arr.forEach(element => {
    if (!unique.includes(element)) {
        unique.push(element);
    }
});
console.log(...unique);

Output: 1 3 2 4 10 99`;

  const removeDuplicatesUsingReduce = `let arr = [1,3,1,2,4,10,99,2,4,99];
let unique = arr.reduce((acc, item)=>{
    if(!acc.includes(item)){
        acc.push(item);
    }
    return acc;
},[]);

console.log(unique);

Output: [1, 3, 2, 4, 10, 99]`;

  const removeDuplicatesUsingIndexOF = `let arr = [1,3,1,2,4,10,99,2,4,99];
arr.filter((item, index)=> arr.indexOf(item) === index);

Output: [1, 3, 2, 4, 10, 99]`;

  const findDuplicates = `let arr = [1,3,1,2,4,10,99,2,4,99];
arr.filter((item, index)=> (arr.indexOf(item) === index && arr.lastIndexOf(item) !== index) ); 

Output: [1, 2, 4, 99]`;

  const findUniqueElements = `let arr = [1,3,1,2,4,10,99,2,4,99];
arr.filter((item, index)=> (arr.indexOf(item) === index && arr.lastIndexOf(item) === index) ); 

Output: [3, 10]`;

  return (
    <>
      <SectionHeading>Remove Duplicates from an Array</SectionHeading>
      <SectionSubHeading>Method 1: Using set() Method</SectionSubHeading>
      <SectionDescription>
        This method sets a new object type with ES6 (ES2015) that allows you to
        create collections of unique values.
      </SectionDescription>
      <pre>
        <CodeSection
          className={"hljs"}
          dangerouslySetInnerHTML={{
            __html: hljs.highlight(removeDuplicatesUsingSet, {
              language: "javascript",
            }).value,
          }}
        ></CodeSection>
      </pre>
      <SectionSubHeading>Method 2: Using forEach() Method</SectionSubHeading>
      <pre>
        <CodeSection
          className={"hljs"}
          dangerouslySetInnerHTML={{
            __html: hljs.highlight(removeDuplicatesUsingForEach, {
              language: "javascript",
            }).value,
          }}
        ></CodeSection>
      </pre>
      <SectionSubHeading>Method 3: Using reduce() Method</SectionSubHeading>
      <pre>
        <CodeSection
          className={"hljs"}
          dangerouslySetInnerHTML={{
            __html: hljs.highlight(removeDuplicatesUsingReduce, {
              language: "javascript",
            }).value,
          }}
        ></CodeSection>
      </pre>
      <SectionSubHeading>Method 4: Using Filter / indexOf() Method</SectionSubHeading>
      <pre>
        <CodeSection
          className={"hljs"}
          dangerouslySetInnerHTML={{
            __html: hljs.highlight(removeDuplicatesUsingIndexOF, {
              language: "javascript",
            }).value,
          }}
        ></CodeSection>
      </pre>
      <SectionSubHeading>Method 5: Find duplicate elements from array</SectionSubHeading>
      <pre>
        <CodeSection
          className={"hljs"}
          dangerouslySetInnerHTML={{
            __html: hljs.highlight(findDuplicates, {
              language: "javascript",
            }).value,
          }}
        ></CodeSection>
      </pre>
      <SectionSubHeading>Method 6: Find elements which existed only once</SectionSubHeading>
      <pre>
        <CodeSection
          className={"hljs"}
          dangerouslySetInnerHTML={{
            __html: hljs.highlight(findUniqueElements, {
              language: "javascript",
            }).value,
          }}
        ></CodeSection>
      </pre>
    </>
  );
};

export default RemoveDuplicates;
