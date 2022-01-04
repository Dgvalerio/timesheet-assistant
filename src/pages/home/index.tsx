import React, { FC, useState } from 'react';

import { HomeStyles as Styles } from './styles';

const Home: FC = () => {
  const [entered, setEntered] = useState('');

  return (
    <Styles.Container>
      <h1>To Timesheet</h1>
      <input
        type="text"
        value={entered}
        onChange={({ target: { value } }) => setEntered(value)}
      />
    </Styles.Container>
  );
};

export default Home;
