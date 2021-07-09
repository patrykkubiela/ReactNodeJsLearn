import React from 'react';
import logo from './logo.svg';
import './App.css';

import tw from 'twin.macro';
import { HomePage } from './app/containers/HomePage';
import styled from 'styled-components';

const PageContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;

function App() {
  return <PageContainer>
    <HomePage/>
  </PageContainer>;
}

export default App;
