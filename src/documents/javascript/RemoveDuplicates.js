import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.min.css";
import {
  SectionHeading,
  SectionSubHeading,
  SectionDescription,
  CodeSection,
} from "../../style/styled";

const RemoveDuplicates = () => {
  const htmlTmp = `
  import React from "react"; 
  import styled from "styled-components"; 
  import hljs from 'highlight.js/lib/core'; 
  import javascript from 'highlight.js/lib/languages/javascript';`;

  return (
    <>
      <SectionHeading>Remove Duplicates from an Array</SectionHeading>
      <SectionSubHeading>Method 1:</SectionSubHeading>
      <SectionDescription>gffsdf</SectionDescription>
      <pre>
        <CodeSection
          className={"hljs"}
          dangerouslySetInnerHTML={{
            __html: hljs.highlight(htmlTmp, { language: "javascript" }).value,
          }}
        ></CodeSection>
      </pre>
    </>
  );
};

export default RemoveDuplicates;
