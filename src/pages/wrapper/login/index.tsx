import React, { FC, useState } from 'react';

import Index from '../../../components/icon';
import Icon from '../../../components/icon';
import { LoginStyles as Styles } from './styles';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Styles.Container>
      <section>
        <div>
          <img
            src="https://luby-timesheet.azurewebsites.net/Content/custom/image/logo/timesheet_login.png"
            alt="Timesheet Azure Logo"
            width={215}
            height={94}
          />
          <p>
            Caro usuário, faça o login para acessar a área de administração!
          </p>
        </div>
      </section>
      <section>
        <form>
          <div>
            <Icon.User />
            <input
              type="email"
              value={email}
              placeholder="Digite seu login"
              onChange={({ target: { value } }) => setEmail(value)}
            />
          </div>
          <div>
            <Icon.Key />
            <input
              type="password"
              value={password}
              placeholder="Digite sua senha"
              onChange={({ target: { value } }) => setPassword(value)}
            />
          </div>
          <button type="submit">
            Login In
            <Index.SignIn />
          </button>
          <a href="/">Esqueceu sua senha?</a>
        </form>
      </section>
    </Styles.Container>
  );
};

export default Login;
