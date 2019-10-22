import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';
import { Container, Time } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong> October 22th</strong>
        <button type="button">
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Jonathan Ferreira</span>
        </Time>

        <Time available>
          <strong>10:00</strong>
          <span>Jonathan Ferreira</span>
        </Time>

        <Time available>
          <strong>15:00</strong>
          <span>Jonathan Ferreira</span>
        </Time>
      </ul>
    </Container>
  );
}
