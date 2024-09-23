import "./App.css";
import styled from "styled-components";
import Dashboard from './layouts/Dashboard';

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
      <Dashboard/>
    </div>
  );
}

export default App;
