import styled from "styled-components";
import hljs from "highlight.js";
//import 'highlight.js/styles/atom-one-dark.min.css';
import 'highlight.js/styles/atom-one-dark.min.css';
import {
  Wrapper,
  LeftNav,
  RightSection,
  MenuCategory,
  SubMenu,
  SubMenuLink,
  RightSectionHeading,
  RightSectionDescription,
  CodeSection
} from "../style/styled";

const htmlTmp = `import React from "react";
import styled from "styled-components";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
`;
function JavaScriptDashboard() {
  return (
    <Wrapper>
      <LeftNav>
        <MenuCategory>
          Get Started
          <SubMenu>
            <SubMenuLink href="#">MDX</SubMenuLink>
            <SubMenuLink href="#">Live Block</SubMenuLink>
            <SubMenuLink href="#">API Generation</SubMenuLink>
          </SubMenu>
        </MenuCategory>
        <MenuCategory>
          Get Started
          <SubMenu>
            <SubMenuLink href="#">MDX</SubMenuLink>
            <SubMenuLink href="#">Live Block</SubMenuLink>
            <SubMenuLink href="#">API Generation</SubMenuLink>
          </SubMenu>
        </MenuCategory>
      </LeftNav>
      <RightSection>
        <RightSectionHeading>Example</RightSectionHeading>
        <RightSectionDescription>Dummy text</RightSectionDescription>
        <pre>
          <CodeSection
            className ={'hljs'}
            dangerouslySetInnerHTML={{
              __html: hljs.highlight(htmlTmp,{language: 'javascript'}).value
            }}
          ></CodeSection>
        </pre>
      </RightSection>
    </Wrapper>
  );
}

export default JavaScriptDashboard;
