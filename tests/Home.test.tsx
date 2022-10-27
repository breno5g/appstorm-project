import { afterEach, describe, expect, test } from 'vitest';
import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import Home from '../pages';
import { RenderWithRedux } from './renderWithRedux';

describe('Home', () => {
  describe('Success', () => {
    let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
    afterEach(() => {
      component.unmount();
    });

    test('Home forms', async () => {
      const HomeWithRedux = RenderWithRedux(Home);
      component =render(<HomeWithRedux />);
      const input = screen.findByPlaceholderText("Insira o username desejado");
      const button = screen.findByRole("button");
      
      expect(input).toBeDefined();
      expect(button).toBeDefined();
  
      fireEvent.change(await input, "breno5g");
      fireEvent.click(await button);
  
      const username = screen.findByText("Breno Santos");
  
      expect(username).toBeDefined();
    });
  });
  
  describe('Failure', () => {
    let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
    afterEach(() => {
      component.unmount();
    });
    
    test('Home forms', async () => {
      const HomeWithRedux = RenderWithRedux(Home);
      component =render(<HomeWithRedux />);

      const input = screen.findByPlaceholderText("Insira o username desejado");
      const button = screen.findByRole("button");
      
      expect(input).toBeDefined();
      expect(button).toBeDefined();
  
      fireEvent.change(await input, "kdjaslkdjaksljdka");
      fireEvent.click(await button);
  
      const error = screen.findByText("Não foi possivel encontrar o usuário");
  
      expect(error).toBeDefined();
    });
  });
});