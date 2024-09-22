import "./App.css";
import styled from "styled-components";
import { HashRouter, Route, Routes } from "react-router-dom";
import CategoryDashboard from './layouts/CategoryDashboard';
import ReactDashboard from './layouts/ReactDashboard';
import JavaScriptDashboard from './layouts/JavaScriptDashboard';

const Wrapper = styled.header`
  padding:0 1em;
  border-bottom: 2px solid rgb(206 228 237);  
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: #9B1D30;
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title>Logical Problems Repository</Title>
      </Wrapper>
      <HashRouter >
        <Routes>
          <Route exact path="/" element={<CategoryDashboard />} />
          <Route exact path="/react-js" element={<ReactDashboard />} />
          <Route exact path="/javascript" element={<JavaScriptDashboard />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
