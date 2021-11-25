import React from 'react';
import './App.css';


import Layout from './Components/Common/Layout/Layout';
import Container from './Components/Common/Container/Container';
import Main from './Components/Main/Main';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Container>
          <Main />
        </Container>
      </Layout>


    </div>
  );
}

export default App;
