import React, { FC, useState } from 'react';

import { LoginStyles as Styles } from './styles';

const Login: FC = () => {
  const [entered, setEntered] = useState('');

  return (
    <Styles.Container>
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
    </Styles.Container>
  );
};

export default Login;
