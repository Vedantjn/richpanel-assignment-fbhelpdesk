import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <Container>
      <Box>
        <div className='outerBox'>
          <div className='heading'>
            <h1>Login to your account</h1>
          </div>

          <div className='loginEmail'>
            <p>Email</p>
            <input type="email" />
          </div>

          <div className='loginPassword'>
            <p>Password</p>
            <input type="password" />
          </div>

          <div className='loginRememberMe'>
            <input type="checkbox" name="Remember me" id="" />
            <p>Remember me</p>
          </div>

          <div className='button'>
            
            <Link to="/connect-page"><LogInButton>Login</LogInButton></Link>

            
          </div>

          <div className='boxBottomText'>
            <p>New to MyApp?<Link to="/register">Sign Up</Link></p>
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

    
  .loginRememberMe {
  display: flex;
  flex-direction: row;
  align-items: center; // Optional to vertically center elements
}
.heading{
    text-align : center;
}
.loginName input,
.loginEmail input,
.loginPassword input {
  width: 24vw; 
}

.boxBottomText{
    ${'' /* padding : 10px */}
    text-align : center;
}

.boxBottomText a{
    text-decoration : none;
    color : #3b5998;

}

`;

const Box = styled.div`
  background-color: white;
  padding: 40px;
  width : 25vw;
  border-radius : 20px
`;

const LogInButton = styled.button`
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


export default Login;
