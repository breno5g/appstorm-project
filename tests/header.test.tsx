import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { RenderWithRedux } from './renderWithRedux';

describe('Name of the group', () => {
  const HeaderWithRedux = RenderWithRedux(Header);
  render(<HeaderWithRedux />);
  
  test('Header title', () => {
    const headerHeading1 = screen.getByRole('heading', { level: 1, name: /AppStorm - Desafio Tecnico/i });
    
    expect(headerHeading1).toBeDefined();
  });
  
  test('Header buttons', () => {
    const linkToHome = screen.getByRole("link", {name: "Home"});
    const linkToFavorites = screen.getByRole("link", {name: "Favoritos"});

    expect(linkToHome).toBeDefined();
    expect(linkToFavorites).toBeDefined();
  });
});