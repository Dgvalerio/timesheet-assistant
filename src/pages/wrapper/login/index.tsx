import React, { FC, useState } from 'react';

import { LoginContainer } from './styles';

const Login: FC = () => {
  const [entered, setEntered] = useState('');

  return (
    <LoginContainer>
      <h1>Login</h1>
      <br />
      <input
        type="text"
        value={entered}
        onChange={({ target: { value } }) => setEntered(value)}
      />
      <br />
      <br />
      <input
        type="text"
        value={entered}
        onChange={({ target: { value } }) => setEntered(value)}
      />
    </LoginContainer>
  );
};

export default Login;
