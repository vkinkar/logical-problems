
import { HashRouter, Route, Routes } from "react-router-dom";
import {
  Wrapper,
  LeftNav,
  RightSection,
  MenuCategory,
  SubMenu,
  SubMenuLink  
} from "../style/styled";
import RemoveDuplicates from '../documents/javascript/RemoveDuplicates';

function JavaScriptDashboard() {
  return (
    <Wrapper>
      <LeftNav>
        <MenuCategory>
          JavaScript
          <SubMenu>
            <SubMenuLink href="#/javascript/remove-duplicates">Remove Duplicates</SubMenuLink>
            <SubMenuLink href="#">Live Block</SubMenuLink>
            <SubMenuLink href="#">API Generation</SubMenuLink>
          </SubMenu>
        </MenuCategory>
        <MenuCategory>
          React JS
          <SubMenu>
            <SubMenuLink href="#">MDX</SubMenuLink>
            <SubMenuLink href="#">Live Block</SubMenuLink>
            <SubMenuLink href="#">API Generation</SubMenuLink>
          </SubMenu>
        </MenuCategory>
      </LeftNav>
      <RightSection>
        <HashRouter >
          <Routes>
            <Route path="/" element={<RemoveDuplicates />} />
            <Route exact path="/javascript/remove-duplicates" element={<RemoveDuplicates />} />
          </Routes>
        </HashRouter>
      </RightSection>
    </Wrapper>
  );
}

export default JavaScriptDashboard;
