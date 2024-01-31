import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import styled from 'styled-components'

function App() {

  const Container = styled.div`
   background-color:#F8F8FF;
   width:100%;
   padding-bottom:146px;
  `;

  return (
    <>
      <Container>
        <Header></Header>
        <Body></Body>
      </Container>
    </>
  )
}

export default App
