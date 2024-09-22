import styled from "styled-components";

export const Wrapper = styled.div`
  display:flex;
`;

export const LeftNav = styled.aside`
  padding: 10px;
  width: 240px;
  overflow-y: auto;
  display: inline-block;
  border-right: 1px solid rgba(60,60,67,.12)
`;

export const RightSection = styled.main`
  width: calc(100% - 270px);
  display: inline-block;
  text-align: left;
  padding: 15px 15px;
`;

export const MenuCategory = styled.div`
  margin: 10px 10px;
  text-align: left;
  font-weight: 600;
  color: #3c2828;
  font-size: 16px;
  margin-bottom: 16px;
  padding-left: 0px;
`;

export const SubMenu = styled.div`
  padding-left: 12px;
`;

export const SubMenuLink = styled.a`
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  color: rgb(60, 40, 40);
  display: block;
  padding: 5px;
`;

export const RightSectionHeading = styled.div`
  font-weight: 600;
  color: #3c2828;
  font-size: 20px;
  border-bottom: 1px solid rgba(60, 60, 67, 0.12);
  padding-bottom: 5px;
`;

export const RightSectionDescription = styled.p`
  color: #3c2828;
`;

export const CodeSection = styled.code`
  background-color: #282c34;
  margin: 10px 0;
  padding: 10px 10px;
  display: block;
  font-size: 14px;
  line-height: 1.5;
`;