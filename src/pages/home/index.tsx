import React, { FC, useState } from 'react';

import { HomeContainer } from './styles';

const Home: FC = () => {
  const [entered, setEntered] = useState('');

  return (
    <HomeContainer>
      <h1>To Timesheet</h1>
      <input
        type="text"
        value={entered}
        onChange={({ target: { value } }) => setEntered(value)}
      />
    </HomeContainer>
  );
};

export default Home;
