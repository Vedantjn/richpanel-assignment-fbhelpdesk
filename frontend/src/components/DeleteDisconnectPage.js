import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const DeleteDisconnect = () => {
  return (
    <Container>
      <Box>
        <div className='outerBox'>
          <div className='heading'>
            <h1>FaceBook Page Integration</h1>
          </div>

          <div className='integrated-page-name heading'>
            <p>Integrated Page name : Amazon Business</p>
          </div>

          <div className='button'>
            <DeleteIntegrationButton>Delete Integration</DeleteIntegrationButton>
          </div>

          <div className='button'>
            
            <Link to="/agent-screen"><ReplyButton>Reply to Messages</ReplyButton></Link>

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

  .heading {
    text-align: center;
  }
`;

const Box = styled.div`
  background-color: white;
  padding: 40px;
  width: 25vw;
  border-radius: 20px;
`;

const Button = styled.button`
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  width: 25vw;
`;

const DeleteIntegrationButton = styled(Button)`
  background-color: #ff5349;
  margin-bottom: 10px; 
`;

const ReplyButton = styled(Button)`
  background-color: #3b5998;
`;

export default DeleteDisconnect;
