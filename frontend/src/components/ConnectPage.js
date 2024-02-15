import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ConnectPage = () => {
  return (
    <Container>
      <Box>
        <div className='outerBox'>
          <div className='heading'>
            <h1>Facebook Page Integration</h1>
          </div>

          <div className='button'>
            
            <Link to="/delete-disconnect"><ConnectPageButton>Connect Page</ConnectPageButton></Link>

          </div>

        </div>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  background-color: #3b5998;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

.heading{
    text-align : center;
    ${'' /* padding : 20px */}
    margin-bottom : 2.5rem;
}

`;

const Box = styled.div`
  background-color: white;
  padding: 40px;
  width : 25vw;
  border-radius : 20px
`;

const ConnectPageButton = styled.button`
  background-color: #3b5998; 
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: auto; /* Center horizontally */
  cursor: pointer;
  border-radius: 8px;
  ${'' /* width: 100%; // Added width */}
  width : 25vw
`;


export default ConnectPage;
