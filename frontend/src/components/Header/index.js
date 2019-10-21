import React from 'react';
import { Link } from 'react-router-dom';

import Notification from '~/components/Notifications';
import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo_purple.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notification />
          <Profile>
            <div>
              <strong>Jonathan Ferreira</strong>
              <Link to="/profile">Profile</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.pngCopy"
              alt="Jonathan"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
