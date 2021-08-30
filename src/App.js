import './App.scss';
import Carousel from './components/Carousel/Carousel';

import styled from 'styled-components';

const Title = styled.h1`
   margin-top: 0;
   margin-bottom: 8px;
   font-size: 4.8rem;
   line-height: 5.2rem;
   font-weight: 800;
`;

const SubTitle = styled.p`
   margin-top: 0;
   margin-bottom: 60px;
   font-size: 2rem;
   line-height: 2.8rem;
   font-weight: 400;
`;

function App() {
   return (
      <div className='app'>
         <div className='title-container'>
            <Title>Latana Knowledge Center</Title>
            <SubTitle>
               Everything you need to know about the best brand tracking
               solution in the world.
            </SubTitle>
         </div>
         <Carousel />
      </div>
   );
}

export default App;
