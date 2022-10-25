import Link from 'next/link';
import React from 'react';
import { Container } from './style';

function Header() {
  return (
    <Container>
      <h1>AppStorm - Desafio Tecnico</h1>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/favorites'>Favoritos</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;